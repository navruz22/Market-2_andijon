const { Expense } = require("../../models/Expense/Expense");
const { Market } = require("../../models/MarketAndBranch/Market");
const { Incoming } = require("../../models/Products/Incoming");
const { Product } = require("../../models/Products/Product");
const { ProductData } = require("../../models/Products/Productdata");
const { ProductPrice } = require("../../models/Products/ProductPrice");
const { Debt } = require("../../models/Sales/Debt");
const { Discount } = require("../../models/Sales/Discount");
const { Payment } = require("../../models/Sales/Payment");
const { SaleConnector } = require("../../models/Sales/SaleConnector");
const { SaleProduct } = require("../../models/Sales/SaleProduct");
const {
  DailySaleConnector,
} = require("../../models/Sales/DailySaleConnector.js");
const { Client } = require("../../models/Sales/Client");
const { Exchangerate } = require("../../models/Exchangerate/Exchangerate");
require("../../models/Users");

const reduce = (arr, el) =>
  arr.reduce((prev, item) => prev + (item[el] || 0), 0);

module.exports.getReport = async (req, res) => {
  try {
    const { market, startDate, endDate } = req.body;
    const marke = await Market.findById(market);

    if (!marke) {
      return res
        .status(401)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const sales = await DailySaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      .select("-isArchive -updatedAt -user -market -__v")
      .populate(
        "payment",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate({
        path: "products",
        select: "totalprice totalpriceuzs pieces price product",
        populate: {
          path: "product",
          select: "price",
          populate: {
            path: "price",
            select:
              "incomingprice incomingpriceuzs sellingprice sellingpriceuzs",
          },
        },
      })
      .populate({
        path: "products",
        select: "totalprice totalpriceuzs pieces price product",
        populate: {
          path: "price",
          select: "incomingprice incomingpriceuzs sellingprice sellingpriceuzs",
        },
      })
      .populate("discount", "discount discountuzs procient");

    // qarz uchun saleconnector ishlatiyapman
    const saleconnector = await SaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      .select("-isArchive -updatedAt -user -market -__v")
      .populate("products", "totalprice totalpriceuzs")
      .populate("debts", "debt debtuzs debtType")
      .populate(
        "payments",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate("discounts", "discount discountuzs procient");

    const payments = await Payment.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .select("-__v -updatedAt -isArchive")
      .lean();

    const discounts = await Discount.find({
      discount: { $ne: 0 },
      market,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    let reports = {
      sale: {
        sale: 0,
        saleuzs: 0,
        salecount: 0,
      },
      income: {
        income: 0,
        incomeuzs: 0,
      },
      expenses: {
        expenses: 0,
        expensesuzs: 0,
        expensescount: 0,
      },
      cash: {
        cash: 0,
        cashuzs: 0,
        cashcount: 0,
      },
      card: {
        card: 0,
        carduzs: 0,
        cardcount: 0,
      },
      transfer: {
        transfer: 0,
        transferuzs: 0,
        transfercount: 0,
      },
      backproducts: {
        backproducts: 0,
        backproductsuzs: 0,
        backproductscount: 0,
      },
      discounts: {
        discounts: discounts.reduce(
          (summ, discount) => summ + discount.discount,
          0
        ),
        discountsuzs: discounts.reduce(
          (summ, discount) => summ + discount.discountuzs,
          0
        ),
        discountscount: discounts.length,
      },
      debts: {
        debts: 0,
        debtsuzs: 0,
        debtscount: 0,
      },
      payments: {
        payments: 0,
        paymentsuzs: 0,
        paymentscount: 0,
      },
    };

    reports.payments.payments = payments.reduce((prev, payment) => {
      reports.payments.paymentscount++;
      reports.payments.paymentsuzs +=
        payment.cashuzs + payment.carduzs + payment.transferuzs;
      prev += payment.cash + payment.card + payment.transfer;

      return prev;
    }, 0);

    // reports.payments.payments = saleconnector.reduce((prev, sale) => {
    //   const payments = sale.payments.reduce((prev, payment) => {
    //     if (payment.cash !== 0 || payment.card !== 0 || payment.transfer !== 0) {
    //       reports.payments.paymentsuzs += payment.cashuzs + payment.carduzs + payment.transferuzs;
    //       reports.payments.paymentscount++;
    //       prev += payment.cash + payment.card + payment.transfer
    //     }
    //     return prev;
    //   }, 0)
    //   prev += payments;
    //   return prev;
    // }, 0)

    let incomingprice = 0;
    let incomingpriceuzs = 0;

    let backproduct = 0;
    let backproductuzs = 0;
    let backproductcount = 0;

    const roundUzs = (price) => Math.round(Number(price) * 1) / 1;
    const roundUsd = (price) => Math.round(Number(price) * 1000) / 1000;

    sales.map((sale) => {
      reports.sale.salecount++;
      sale.products.map((product) => {
        reports.sale.sale += roundUsd(product.totalprice);
        reports.sale.saleuzs += roundUzs(product.totalpriceuzs);
        incomingprice += roundUsd(
          ((product.price && product.price.incomingprice) ||
            (product.product && product.product.price.incomingprice) ||
            0) * product.pieces
        );
        incomingpriceuzs += roundUzs(
          ((product.price && product.price.incomingpriceuzs) ||
            (product.product && product.product.price.incomingpriceuzs) ||
            0) * product.pieces
        );
        if (product.totalprice < 0) {
          backproduct += roundUsd(product.totalprice);
          backproductuzs += roundUzs(product.totalpriceuzs);
          backproductcount++;
        }
      });
    });

    reports.income.income = roundUsd(
      Number(reports.sale.sale) -
      Number(incomingprice) -
      Number(reports.discounts.discounts)
    );
    reports.income.incomeuzs = roundUzs(
      Number(reports.sale.saleuzs) -
      Number(incomingpriceuzs) -
      Number(reports.discounts.discountsuzs)
    );

    // Get debts report functions  START
    const reducecount = (arr, el) =>
      arr.reduce((prev, item) => prev + (item[el] || 0), 0);

    reports.debts.debtscount = saleconnector.reduce((prev, sale) => {
      let totalprice = reducecount(sale.products, "totalprice");
      let payment = reducecount(sale.payments, "payment");
      let discount = reducecount(sale.discounts, "discount");
      if (totalprice - payment - discount > 0.01) {
        return prev + 1;
      }
      return prev;
    }, 0);

    reports.debts.debts = saleconnector.reduce((prev, sale) => {
      const debts = sale.debts.reduce((prev, debt) => prev + (debt.debtType === 'dollar' && debt.debt || 0), 0)
      return prev + debts
    }, 0);

    reports.debts.debtsuzs = saleconnector.reduce((prev, sale) => {
      const debts = sale.debts.reduce((prev, debt) => prev + (debt.debtType === 'sum' && debt.debtuzs || 0), 0)
      return prev + debts
    }, 0);

    reports.debts.debts = Math.round(reports.debts.debts * 100) / 100;
    reports.debts.debtsuzs = Math.round(reports.debts.debtsuzs * 1) / 1;
    // Get debts report functions  END

    // Get expenses report functions  START
    const expenses = await Expense.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select("sum sumuzs");

    reports.expenses.expensescount = expenses.length;
    reports.expenses.expenses = expenses.reduce(
      (prev, expense) => prev + expense.sum,
      0
    );
    reports.expenses.expensesuzs = expenses.reduce(
      (prev, expense) => prev + expense.sumuzs,
      0
    );
    // Get expenses report functions  START

    reports.backproducts.backproducts = backproduct;
    reports.backproducts.backproductsuzs = backproductuzs;
    reports.backproducts.backproductscount = backproductcount;

    res.status(201).send(reports);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "Serverda xatolik yuz berdi...", message: error.message });
  }
};

module.exports.getSales = async (req, res) => {
  try {
    const { market, currentPage, countPage, startDate, endDate, search } =
      req.body;

    const id = new RegExp(".*" + search ? search.id : "" + ".*", "i");
    const client = new RegExp(".*" + search ? search.client : "" + ".*", "i");

    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(401)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const saleconnector = await DailySaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .select("-isArchive -updatedAt -__v -packman")
      .populate({
        path: "saleconnector",
        select: "id",
        match: { id: id },
      })
      .populate(
        "payment",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate("user", "firstname lastname")
      .populate({
        path: "client",
        select: "name",
        match: { name: client },
      })
      .populate({
        path: "products",
        select: "totalprice totalpriceuzs pieces price unitprice unitpriceuzs",
        populate: {
          path: "product",
          select: "productdata",
          populate: {
            path: "productdata",
            select: "name code",
          },
        },
      });

    let filter = saleconnector.filter((sale) => {
      return sale.saleconnector !== null && sale.client !== null;
    });
    const count = filter.length;
    const data = filter.splice(currentPage * countPage, countPage);

    res.status(200).json({ data, count });
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getProfitData = async (req, res) => {
  try {
    const { market, currentPage, countPage, startDate, endDate, search } =
      req.body;

    const id = new RegExp(".*" + search ? search.id : "" + ".*", "i");
    const client = new RegExp(".*" + search ? search.client : "" + ".*", "i");

    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(401)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const saleconnector = await DailySaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .sort({ createdAt: -1 })
      .select("-isArchive -updatedAt -market -__v")
      .populate(
        "payment",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate({
        path: "saleconnector",
        select: "id",
        match: { id: id },
      })
      .populate({
        path: "client",
        select: "name",
        match: { name: client },
      })
      .populate({
        path: "user",
        select: "firstname lastname",
      })
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs product createdAt user",
        populate: {
          path: "price",
          select: "incomingprice incomingpriceuzs sellingprice sellingpriceuzs",
        },
      })
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs product createdAt user",
        populate: {
          path: "user",
          select: "firstname lastname",
        },
      })
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs product createdAt user",
        populate: {
          path: "product",
          select: "productdata",
          populate: {
            path: "productdata",
            select: "name code",
          },
        },
      })
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs product createdAt user",
        populate: {
          path: "product",
          select: "price",
          populate: {
            path: "price",
            select:
              "incomingprice incomingpriceuzs sellingprice sellingpriceuzs",
          },
        },
      })
      .populate(
        "discount",
        "discount discountuzs totalprice totalpriceuzs procient"
      );

    const profitData = saleconnector
      .map((sale) => {
        // const totalincomingprice = sale.products.reduce(
        //   (prev, item) => prev + item.pieces * (item.price && item.price.incomingprice || 0),
        //   0
        // );
        // const totalincomingpriceuzs = sale.products.reduce(
        //   (prev, item) => prev + item.pieces * (item.price && item.price.incomingpriceuzs || 0),
        //   0
        // );
        const totalincomingprice = sale.products.reduce(
          (prev, item) =>
            prev +
            item.pieces *
            ((item.price && item.price.incomingprice) ||
              (item.product && item.product.price.incomingprice) ||
              0),
          0
        );
        const totalincomingpriceuzs = sale.products.reduce(
          (prev, item) =>
            prev +
            item.pieces *
            ((item.price && item.price.incomingpriceuzs) ||
              (item.product && item.product.price.incomingpriceuzs) ||
              0),
          0
        );
        const totalprice = sale.products.reduce(
          (summ, product) => summ + product.totalprice,
          0
        );
        const totalpriceuzs = sale.products.reduce(
          (summ, product) => summ + product.totalpriceuzs,
          0
        );
        const discount = (sale.discount && sale.discount.discount) || 0;
        const discountuzs = (sale.discount && sale.discount.discountuzs) || 0;
        const profit = totalprice - totalincomingprice - discount;
        const profituzs = totalpriceuzs - totalincomingpriceuzs - discountuzs;

        return {
          createdAt: sale.createdAt,
          id: sale.id,
          saleconnector: sale.saleconnector,
          client: sale.client && sale.client,
          totalincomingprice,
          totalincomingpriceuzs,
          totalprice,
          totalpriceuzs,
          discount,
          discountuzs,
          profit,
          profituzs,
          dailyconnector: sale,
        };
      })
      .filter((sale) => sale.saleconnector !== null && sale.client !== null);

    const count = profitData.length;
    const profitreport = profitData.splice(currentPage * countPage, countPage);

    res.status(201).json({ data: profitreport, count });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Serverda xatolik yuz berdi...", message: error.message });
  }
};

module.exports.getPayment = async (req, res) => {
  try {
    const { market, currentPage, countPage, startDate, endDate, search, type } =
      req.body;

    const id = new RegExp(".*" + search ? search.id : "" + ".*", "i");
    const client = new RegExp(".*" + search ? search.client : "" + ".*", "i");

    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(401)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    //========================================

    const allpayments = await Payment.find({
      // [type]: { $ne: 0 },
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .sort({ createdAt: -1 })
      .select(`-isArchive -user -updatedAt -__v -products`)
      .populate({
        path: "saleconnector",
        select: "id client products payments user dailyconnectors",
        match: { id: id },
        populate: {
          path: "client",
          select: "name",
          match: { name: client },
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "user",
          select: "firstname lastname",
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "payments",
          select:
            "payment paymentuzs comment totalprice usdpayment totalpriceuzs createdAt cash cashuzs card carduzs transfer transferuzs",
          sort: 1
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "products",
          select:
            "totalprice unitprice isUsd totalpriceuzs unitpriceuzs isPackcount packcountpieces pieces pieces createdAt discount saleproducts product fromFilial",
          populate: {
            path: "product",
            select: "productdata packcount isUsd",
            populate: {
              path: "productdata",
              select: "name code",
            },
          },
          sort: 1
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "products",
          select:
            "totalprice unitprice isUsd totalpriceuzs unitpriceuzs isPackcount packcountpieces pieces pieces createdAt discount saleproducts product fromFilial",
          populate: {
            path: "user",
            select: "firstname lastname",
          },
          sort: 1
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "dailyconnectors",
          select: "payment",
        },
      })
      .populate({
        path: "saleconnector",
        select: "id client createdAt products payments user dailyconnectors debts",
        populate: {
          path: "debts",
          select: "debt debtuzs debtType createdAt",
        },
      })
      .populate({
        path: "debt",
        select: "debt debtuzs debtType createdAt"
      })
      .lean();

    const respayments = [];

    const total = {
      payment: {
        cash: 0,
        cashuzs: 0,
        card: 0,
        carduzs: 0,
        transfer: 0,
        transferuzs: 0,
        usdpayment: 0,
      },
      back: {
        cash: 0,
        cashuzs: 0,
        card: 0,
        carduzs: 0,
        transfer: 0,
        transferuzs: 0,
        usdpayment: 0,
      },
      result: {
        cash: 0,
        cashuzs: 0,
        card: 0,
        carduzs: 0,
        transfer: 0,
        transferuzs: 0,
        usdpayment: 0,
      },
    };

    const exchangerate = await Exchangerate.find({
      market,
    })
      .sort({ createdAt: -1 })
      .lean()

    const currency = exchangerate[0].exchangerate

    for (const payment of allpayments) {

      const daily = await DailySaleConnector.findOne({
        market,
        payment: payment._id
      })
        .select("-__v -updatedAt -isArchive")
        .populate("user", "firstname lastname")
        .populate("client", "name")
        .populate({
          path: "products",
          select:
            "totalprice totalpriceuzs pieces isPackcount isUsd packcountpieces price unitprice unitpriceuzs product createdAt user",
          populate: {
            path: "product",
            select: "productdata packcount isUsd",
            populate: {
              path: "productdata",
              select: "name code",
            },
          },
        })
        .populate({
          path: "products",
          select:
            "totalprice totalpriceuzs pieces isPackcount isUsd packcountpieces price unitprice unitpriceuzs product createdAt user",
          populate: {
            path: "user",
            select: "firstname lastname",
          },
        })
        .populate({
          path: "products",
          select:
            "totalprice totalpriceuzs pieces isPackcount isUsd packcountpieces price unitprice unitpriceuzs product createdAt user",
          populate: {
            path: "user",
            select: "firstname lastname",
          },
        })
        .populate({
          path: "debt",
          select: "debt debtuzs debtType",
        })
        .populate({
          path: "payment",
          select:
            "cash cashuzs card carduzs transfer transferuzs usdpayment payment paymentuzs totalprice totalpriceuzs",
        })
        .lean()

      // const paymentsusd = payment.saleconnector.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0)

      // const paymentsusd = payment.saleconnector.payments.reduce((prev, el) => {
      //   if (new Date(el.createdAt) <= new Date(payment.createdAt) ) {
      //     prev += (el.usdpayment && el.usdpayment || 0)
      //   }
      //   return prev;
      // }, 0)

      // // const paymentsuzs = payment.saleconnector.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)

      // const paymentsuzs = payment.saleconnector.payments.reduce((prev, el) => {
      //   if (new Date(el.createdAt) <= new Date(payment.createdAt)) {
      //     prev += (el.paymentuzs || 0)
      //   }
      //   return prev;
      // }, 0)

      // const totalproductsusd = payment.saleconnector.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)
      // const totalproductsuzs = payment.saleconnector.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)

      // const totalproductsusd = payment.saleconnector.products.reduce((prev, el) => {
      //   if (new Date(el.createdAt) <= new Date(payment.createdAt)) {
      //     prev += (el.product.isUsd && el.totalprice || 0)
      //   }
      //   return prev;
      // }, 0)
      // const totalproductsuzs = payment.saleconnector.products.reduce((prev, el) => {
      //   if (new Date(el.createdAt) <= new Date(payment.createdAt)) {
      //     prev += (!el.product.isUsd && el.totalpriceuzs || 0)
      //   }
      //   return prev;
      // }, 0)

      

      // const alldebtsusd = (totalproductsusd - paymentsusd +
      //   (
      //     (totalproductsuzs - paymentsuzs) < 0 &&
      //     (Math.round(((totalproductsuzs - paymentsuzs) / currency) * 10000) / 10000) || 0
      //   )) > 0 && (totalproductsusd - paymentsusd +
      //     (
      //       (totalproductsuzs - paymentsuzs) < 0 &&
      //       (Math.round(((totalproductsuzs - paymentsuzs) / currency) * 10000) / 10000) || 0
      //     )) || 0

      // const alldebtsuzs = (totalproductsuzs - paymentsuzs +
      //   (
      //     (totalproductsusd - paymentsusd) < 0 &&
      //     Math.round((totalproductsusd - paymentsusd) * currency) || 0
      //   )) > 0 && (totalproductsuzs - paymentsuzs +
      //     (
      //       (totalproductsusd - paymentsusd) < 0 &&
      //       Math.round((totalproductsusd - paymentsusd) * currency) || 0
      //     )) || 0

      // console.log(alldebtsusd);
      // console.log(alldebtsuzs);

      const alldebtsusd = payment.saleconnector.debts.reduce((prev, el) => {
          if (new Date(el.createdAt) <= new Date(payment.createdAt)) {
            prev += (el.debt > 0 ? el.debt : 0)
          }
          return prev;
        }, 0) - payment.saleconnector.payments.reduce((prev, item) => {
          if (new Date(item.createdAt) <= new Date(payment.createdAt)) {
            prev += (!item.totalpriceuzs && (item.usdpayment) || 0)
          }
          return prev;
        }, 0)

      const alldebtsuzs = payment.saleconnector.debts.reduce((prev, el) => {
          if (new Date(el.createdAt) <= new Date(payment.createdAt)) {
            prev += (el.debtuzs > 0 ? el.debtuzs : 0)
          }
          return prev;
        }, 0) - payment.saleconnector.payments.reduce((prev, item) => {
          if (new Date(item.createdAt) <= new Date(payment.createdAt)) {
            prev += (!item.totalpriceuzs && (item.cashuzs + item.carduzs + item.transferuzs) || 0)
          }
          return prev;
        }, 0)

      const oldebtsusd = alldebtsusd - (payment?.debt?.debt || 0)
      const oldebtsuzs = alldebtsuzs - (payment?.debt?.debtuzs || 0)

      respayments.push({
        id: payment.saleconnector && payment.saleconnector.id,
        saleconnector: {
          ...daily,
          alldebtsusd: alldebtsusd,
          alldebtsuzs: alldebtsuzs,
          old_debtsusd: oldebtsusd,
          old_debtsuzs: oldebtsuzs,
        },
        saleconnector2: payment.saleconnector,
        createdAt: payment.createdAt,
        client:
          payment.saleconnector &&
          payment.saleconnector.client &&
          payment.saleconnector.client,
        user: payment.saleconnector &&
          payment.saleconnector.user &&
          payment.saleconnector.user,
        cash: payment.cash,
        cashuzs: payment.cashuzs,
        usdpayment: payment.usdpayment,
        card: payment.card,
        carduzs: payment.carduzs,
        transfer: payment.transfer,
        transferuzs: payment.transferuzs,
        totalprice: (payment.totalprice && payment.totalprice) || 0,
        totalpriceuzs: (payment.totalpriceuzs && payment.totalpriceuzs) || 0,
        debtuzs: payment.debtuzs,
        debt: payment.debt,
        alldebtsusd: alldebtsusd,
          alldebtsuzs: alldebtsuzs,
      });

      if (payment.cash < 0 || payment.card < 0 || payment.transfer < 0 || payment.usdpayment < 0) {
        total.back.cash += payment.cash;
        total.back.cashuzs += payment.cashuzs;
        total.back.card += payment.card;
        total.back.carduzs += payment.carduzs;
        total.back.transfer += payment.transfer;
        total.back.transferuzs += payment.transferuzs;
        total.back.usdpayment += (payment.usdpayment || 0);
      } else {
        total.payment.cash += payment.cash;
        total.payment.cashuzs += payment.cashuzs;
        total.payment.card += payment.card;
        total.payment.carduzs += payment.carduzs;
        total.payment.transfer += payment.transfer;
        total.payment.transferuzs += payment.transferuzs;
        total.payment.usdpayment += (payment.usdpayment || 0);
      }
    }

    total.result.cash = total.payment.cash + total.back.cash;
    total.result.cashuzs = total.payment.cashuzs + total.back.cashuzs;
    total.result.card = total.payment.card + total.back.card;
    total.result.carduzs = total.payment.carduzs + total.back.carduzs;
    total.result.transfer = total.payment.transfer + total.back.transfer;
    total.result.usdpayment = total.payment.usdpayment + total.back.usdpayment;
    total.result.transferuzs =
      total.payment.transferuzs + total.back.transferuzs;
    console.log(respayments);
    // const response = respayments.filter(
    //   (product) => product.saleconnector !== null
    // );
    const count = respayments.length;
    let paymentsreport = respayments.splice(currentPage * countPage, countPage);
    res.status(201).json({ data: paymentsreport, count, total });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getDebtsReport = async (req, res) => {
  try {
    const { market, startDate, endDate } = req.body;
    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(400)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const saleconnector = await SaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .select("-isArchive -updatedAt -__v -packman")
      .populate(
        "payments",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate({
        path: "products",
        select:
          "totalprice unitprice totalpriceuzs isPackcount packcountpieces unitpriceuzs pieces createdAt discount saleproducts product",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "product",
          select: "productdata packcount isUsd",
          populate: { path: "productdata", select: "name code" },
        },
      })
      .populate({
        path: "products",
        select:
          "totalprice unitprice totalpriceuzs unitpriceuzs pieces packcountpieces createdAt discount saleproducts product",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "user",
          select: "firstname lastname",
        },
      })
      .populate("client", "name")
      .populate(
        "payments",
        "payment paymentuzs cashuzs carduzs transferuzs usdpayment comment totalprice totalpriceuzs"
      )
      .populate("debts")
      .populate(
        "discounts",
        "discount discountuzs procient products totalprice totalpriceuzs"
      )
      .populate("user", "firstname lastname")
      .populate("dailyconnectors", "comment debt")
      .lean();

    const exchangerate = await Exchangerate.find({
      market,
    })
      .sort({ createdAt: -1 })
      .lean()

    const currency = exchangerate[0].exchangerate

    const debtsreport = saleconnector
      .map((sale) => {
        const reduce = (arr, el) =>
          arr.reduce((prev, item) => prev + (item[el] || 0), 0);

        const paymentsusd = sale.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0)
        const paymentsuzs = sale.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)
        const totalproductsusd = sale.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)
        const totalproductsuzs = sale.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)

        const debt =
          sale.products.reduce((prev, p) => prev + (p.totalpriceuzs || 0), 0) -
          sale.payments.reduce((prev, p) => prev + (p.paymentuzs || 0), 0)

        const debtuzs =
          (totalproductsuzs - paymentsuzs +
            (
              (totalproductsusd - paymentsusd) < 0 &&
              Math.round((totalproductsusd - paymentsusd) * currency) || 0
            )) > 0 && (totalproductsuzs - paymentsuzs +
              (
                (totalproductsusd - paymentsusd) < 0 &&
                Math.round((totalproductsusd - paymentsusd) * currency) || 0
              )) || 0


        const debtusd =
          (totalproductsusd - paymentsusd +
            (
              (totalproductsuzs - paymentsuzs) < 0 &&
              (Math.round(((totalproductsuzs - paymentsuzs) / currency) * 10000) / 10000) || 0
            )) > 0 && (totalproductsusd - paymentsusd +
              (
                (totalproductsuzs - paymentsuzs) < 0 &&
                (Math.round(((totalproductsuzs - paymentsuzs) / currency) * 10000) / 10000) || 0
              )) || 0

        const debtComment =
          sale.debts.length > 0
            ? sale.debts[sale.debts.length - 1].comment
            : "";
        const debtId =
          sale.debts.length > 0 ? sale.debts[sale.debts.length - 1]._id : "";
        // console.log(paymentsuzs);
        return {
          _id: sale._id,
          id: sale.id,
          createdAt: sale.createdAt,
          client: sale.client && sale.client,
          // debtId: sale.debts.length > 0 && sale.debts[0]._id,
          // debtType: "",
          debt: debt,
          debtuzs: debtuzs,
          debtusd: debtusd,
          debtid: debtId,
          comment: debtComment,
          saleconnector: { ...sale },
        };
      })
      .filter((sales) => sales.debtusd > 0 || sales.debtuzs > 0);

    res.status(201).json({ data: debtsreport });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getDiscountsReport = async (req, res) => {
  try {
    const { market, currentPage, countPage, startDate, endDate, search } =
      req.body;

    const id = new RegExp(".*" + search ? search.id : "" + ".*", "i");
    const client = new RegExp(".*" + search ? search.client : "" + ".*", "i");

    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(400)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const discounts = await Discount.find({
      discount: { $ne: 0 },
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .select("-isArchive -user -updatedAt -__v ")
      .populate({
        path: "saleconnector",
        select: "id client",
        match: { id: id },
        populate: {
          path: "client",
          select: "name",
          match: { name: client },
        },
      });

    const discountsreport = discounts
      .map((discount) => {
        return {
          createdAt: discount.createdAt,
          id: discount.saleconnector && discount.saleconnector.id,
          saleconnector: discount.saleconnector,
          client:
            discount.saleconnector &&
            discount.saleconnector.client &&
            discount.saleconnector.client,
          totalprice: discount.totalprice,
          totalpriceuzs: discount.totalpriceuzs,
          discount: discount.discount,
          discountuzs: discount.discountuzs,
          procient: discount.procient,
        };
      })
      .filter((discount) => discount.saleconnector !== null);

    const count = discountsreport.length;

    const reportdiscount = discountsreport.splice(
      currentPage * countPage,
      countPage
    );

    res.status(200).json({ data: reportdiscount, count });
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getBackProducts = async (req, res) => {
  try {
    const { market, currentPage, countPage, startDate, endDate, search } =
      req.body;

    const id = new RegExp(".*" + search ? search.id : "" + ".*", "i");
    const client = new RegExp(".*" + search ? search.client : "" + ".*", "i");

    const marke = await Market.findById(market);
    if (!marke) {
      return res
        .status(401)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const saleconnector = await SaleConnector.find({
      market,
    })
      .select("-isArchive -updatedAt -__v")
      .populate(
        "payments",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs user createdAt product",
        populate: [
          {
            path: "product",
            select: "productdata",
            populate: {
              path: "productdata",
              select: "code name",
            },
          },
          {
            path: "user",
            select: "firstname lastname",
          },
        ],
      })
      .populate("user", "firstname lastname")
      .lean();

    const dailyconnector = await DailySaleConnector.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .select("-isArchive -updatedAt -__v -packman")
      .populate({
        path: "saleconnector",
        select: "id",
        match: { id: id },
      })
      .populate(
        "payment",
        "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
      )
      .populate({
        path: "client",
        select: "name",
        match: { name: client },
      })
      .populate("packman", "name")
      .populate("user", "firstname lastname")
      .populate({
        path: "products",
        select:
          "totalprice totalpriceuzs pieces price unitprice unitpriceuzs product",
        populate: {
          path: "product",
          select: "productdata",
          populate: {
            path: "productdata",
            select: "code name",
          },
        },
      })
      .lean();

    let filter = dailyconnector
      .filter(
        (sale) =>
          sale.saleconnector !== null &&
          sale.client !== null &&
          sale.products[0] &&
          sale.products[0].pieces < 0
      )
      .map((connector) => {
        const chequeData = saleconnector.filter(
          (item) => String(item._id) === String(connector.saleconnector._id)
        );
        return {
          createdAt: connector.createdAt,
          id: connector.saleconnector && connector.saleconnector.id,
          saleconnector: connector.saleconnector,
          client:
            connector.saleconnector &&
            connector.saleconnector.client &&
            connector.saleconnector.client,
          count: reduce(connector.products, "pieces"),
          totalprice: reduce(connector.products, "totalprice"),
          totalpriceuzs: reduce(connector.products, "totalpriceuzs"),
          back: (connector.payment && connector.payment.payment) || 0,
          backuzs: (connector.payment && connector.payment.paymentuzs) || 0,
          dailyconnector: { ...chequeData[0] },
        };
      });
    const count = filter.length;
    const data = filter.splice(currentPage * countPage, countPage);

    res.status(200).json({ data, count });
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getProductsReport = async (req, res) => {
  try {
    const { market } = req.body;

    const isMarket = await Market.findById(market);
    if (!isMarket) {
      return res
        .status(400)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const products = await Product.find({
      market,
    })
      .select("total price")
      .populate("price", "incomingprice incomingpriceuzs");

    const productsreport = {
      producttypes: products.length,
      totalpieces: 0,
      totalprice: 0,
      totalpriceuzs: 0,
    };

    products.map((product) => {
      productsreport.totalpieces += product.total;
      productsreport.totalprice +=
        (Math.round(Number(product.price.incomingprice) * 1000) / 1000) *
        Math.round(product.total);
      productsreport.totalpriceuzs +=
        (Math.round(Number(product.price.incomingpriceuzs) * 1) / 1) *
        Math.round(product.total);
    });

    res.status(200).json(productsreport);
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getIncomingsReport = async (req, res) => {
  try {
    const { market, startDate, endDate } = req.body;

    const isMarket = await Market.findById(market);
    if (!isMarket) {
      return res
        .status(400)
        .json({ message: `Diqqat! Do'kon haqida malumotlar topilmadi!` });
    }

    const incomings = await Incoming.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select("pieces totalprice totalpriceuzs product");

    const incomingsreport = {
      totalincomings: incomings.length,
      producttypes: 0,
      totalpieces: 0,
      totalprice: 0,
      totalpriceuzs: 0,
    };

    let arr = [];
    incomings.map((incoming) => {
      if (!arr.includes(incoming.product.toString())) {
        incomingsreport.producttypes += 1;
        arr.push(incoming.product.toString());
      }
      incomingsreport.totalpieces += incoming.pieces;
      incomingsreport.totalprice += incoming.totalprice;
      incomingsreport.totalpriceuzs += incoming.totalpriceuzs;
    });

    res.status(200).json(incomingsreport);
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getSalesReport = async (req, res) => {
  try {
    const { market, startDate, endDate } = req.body;

    const salesProducts = await SaleProduct.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select("product pieces");

    let saleproducts = {
      producttypes: 0,
      totalpieces: 0,
    };

    let arr = [];
    salesProducts.map((product) => {
      if (!arr.includes(product.product.toString())) {
        saleproducts.producttypes += 1;
        arr.push(product.product.toString());
      }
      saleproducts.totalpieces += product.pieces;
    });

    return res.status(200).json(saleproducts);
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.getExpensesReport = async (req, res) => {
  try {
    const { market, startDate, endDate, currentPage, countPage } = req.body;

    const expenses = await Expense.find({
      market,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).select("sum sumuzs comment type createdAt");

    res.status(200).json({
      count: expenses.length,
      data: expenses.splice(currentPage * countPage, countPage),
    });
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};

module.exports.changeDebtComment = async (req, res) => {
  try {
    const { debtid, comment } = req.body;

    const debt = await Debt.findById(debtid);
    debt.comment = comment;
    await debt.save();

    res.status(200).json(debt.comment);
  } catch (error) {
    res.status(400).json({ error: "Serverda xatolik yuz berdi..." });
  }
};
