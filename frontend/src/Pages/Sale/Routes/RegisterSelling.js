import React, { useEffect, useState } from 'react'
import Checkbox from '../../../Components/Checkbox/Checkbox.js'
import FieldContainer from '../../../Components/FieldContainer/FieldContainer.js'
import Table from '../../../Components/Table/Table.js'
import { useDispatch, useSelector } from 'react-redux'
import { IoAttach } from 'react-icons/io5'
import CategoryCard from '../../../Components/CategoryCard/CategoryCard.js'
import NotFind from '../../../Components/NotFind/NotFind.js'
import Spinner from '../../../Components/Spinner/SmallLoader.js'
import SmallLoader from '../../../Components/Spinner/SmallLoader.js'
import {
    addPayment,
    getClients,
    getFilials,
    makePayment,
    returnSaleProducts,
    savePayment,
    setAllProductsBySocket,
} from '../Slices/registerSellingSlice.js'
import { deleteSavedPayment } from '../Slices/savedSellingsSlice.js'
import { getAllPackmans } from '../../Clients/clientsSlice.js'
import SearchInput from '../../../Components/Inputs/SearchInput.js'
import UniversalModal from '../../../Components/Modal/UniversalModal.js'
import { roundUsd, UsdToUzs, UzsToUsd } from '../../../App/globalFunctions.js'
import {
    universalToast,
    warningCountSellPayment,
    warningCurrencyRate,
    warningEmptyPackCount,
    warningLessPackCount,
    warningLessSellPayment,
    warningMoreDiscount,
    warningMorePayment,
    warningReturnProductsEmpty,
    warningSaleProductsEmpty,
} from '../../../Components/ToastMessages/ToastMessages.js'
import CustomerPayment from '../../../Components/Payment/CustomerPayment.js'
import { useLocation, useNavigate } from 'react-router-dom'
import BarcodeReader from 'react-barcode-reader'
import { useTranslation } from 'react-i18next'
import { filter, map } from 'lodash'
import socket from '../../../Config/socket.js'
import { setAllCategories } from '../../Category/categorySlice.js'
import Api from '../../../Config/Api.js'

const RegisterSelling = () => {
    const { t } = useTranslation(['common'])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { user, market } = useSelector((state) => state.login)
    const { currencyType, currency } = useSelector((state) => state.currency)
    const { allcategories, loading } = useSelector((state) => state.category)
    const { allProducts, clients, loadingMakePayment, lastPayments } =
        useSelector((state) => state.registerSelling)
    const { packmans } = useSelector((state) => state.clients)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState('')
    const [checked, setChecked] = useState(false)
    const [tableProducts, setTableProducts] = useState([])
    const [filteredCategories, setFilteredCategories] = useState(allcategories)
    const [activeCategory, setActiveCategory] = useState(null)
    const [searchCategory, setSearchCategory] = useState('')
    const [optionPackman, setOptionPackman] = useState([])
    const [packmanValue, setPackmanValue] = useState('')
    const [optionClient, setOptionClient] = useState([])
    const [clientValue, setClientValue] = useState('')
    const [userValue, setUserValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [paymentModalVisible, setPaymentModalVisible] = useState(false)
    const [paymentType, setPaymentType] = useState('cash')
    const [paymentCash, setPaymentCash] = useState('')
    const [paymentCashUzs, setPaymentCashUzs] = useState('')
    const [paymentUsd, setPaymentUsd] = useState("")
    const [paymentCard, setPaymentCard] = useState('')
    const [paymentCardUzs, setPaymentCardUzs] = useState('')
    const [paymentTransfer, setPaymentTransfer] = useState('')
    const [paymentTransferUzs, setPaymentTransferUzs] = useState('')
    const [paymentDiscount, setPaymentDiscount] = useState('')
    const [paymentDiscountUzs, setPaymentDiscountUzs] = useState('')
    const [paymentDiscountPercent, setPaymentDiscountPercent] = useState('')
    const [allMainPayment, setAllMainPayment] = useState('')
    const [hasDiscount, setHasDiscount] = useState(false)
    const [discountSelectOption, setDiscountSelectOption] = useState({
        label: '%',
        value: '%',
    })
    const [paymentDebt, setPaymentDebt] = useState(0)
    const [paymentDebtUzs, setPaymentDebtUzs] = useState(0)
    const [allPayment, setAllPayment] = useState(0)
    const [allPaymentUzs, setAllPaymentUzs] = useState(0)
    const [paid, setPaid] = useState(0)
    const [paidUzs, setPaidUzs] = useState(0)
    const [modalBody, setModalBody] = useState('')
    const [modalData, setModalData] = useState(null)
    const [temporary, setTemporary] = useState(null)
    const [saleConnectorId, setSaleConnectorId] = useState(null)
    const [returnProducts, setReturnProducts] = useState([])
    const [discounts, setDiscounts] = useState([])
    const [returnDiscounts, setReturnDiscounts] = useState([])
    const [totalPaymentsUsd, setTotalPaymentsUsd] = useState(0)
    const [totalPaymentsUzs, setTotalPaymentsUzs] = useState(0)
    const [totalPaysUsd, setTotalPaysUsd] = useState(0)
    const [totalPaysUzs, setTotalPaysUzs] = useState(0)
    const [exchangerate, setExchangerate] = useState(currency)
    const [saleComment, setSaleComment] = useState('')
    const [lowUnitpriceProducts, setLowUnitpriceProducts] = useState([])
    const [wholesale, setWholesale] = useState(false)
    const [debtType, setDebtType] = useState('sum')

    const [selectedFilial, setSelectedFilial] = useState({
        label: market.name,
        value: market._id,
    })

    let delay = null
  
    const headers = [
        { title: '№' },
        { title: t('Filial') },
        { title: t('Qoldiq') },
        { title: t('Nomi') },
        { title: t('Soni') },
        { title: t('Narxi') },
        { title: t('Jami'), styles: 'w-[8rem]' },
        { title: '' },
        { title: '' },
    ]

    const headerReturn = [
        { title: '№' },
        { title: t('Kodi') },
        { title: t('Nomi') },
        { title: t('Soni') },
        { title: t('Jami') },
        { title: t('Soni') },
        { title: t('Jami') },
    ]

    // payment
    const togglePaymentModal = (bool) => {
        bool
            ? setPaymentModalVisible(!paymentModalVisible)
            : setPaymentModalVisible(bool)
        setPaymentType('cash')
        setHasDiscount(false)
        setPaymentDiscount('')
        setPaymentDiscountUzs('')
        setPaymentDiscountPercent('')
        setPaymentDebt(0)
        setPaymentDebtUzs(0)
        setDiscountSelectOption({ label: '%', value: '%' })
    }

    const toggleCheckModal = () => {
        setModalVisible(!modalVisible)
        setModalBody('')
        setModalData(null)
    }

    const convertToUsd = (value) => Math.round(value * 10000) / 10000

    const convertToUzs = (value) => Math.round(value)

    const currentEchangerate = (uzs, usd) => {
        setExchangerate(convertToUzs(uzs / usd))
    }

    // if (product.total === 0) return warningCountSellPayment()
    const handleClickPayment = () => {
        if (tableProducts.length) {
            if (
                tableProducts.some(
                    (prod) => prod.total === 0 && prod.fromFilial === 0
                )
            )
                return warningCountSellPayment()
            const filteredData = tableProducts
                .filter((item) => item.unitprice <= item.incomingprice)
                .map((item) => item.product._id)
            if (filteredData.length > 0) {
                setLowUnitpriceProducts(filteredData)
                warningLessSellPayment()
            } else {
                setLowUnitpriceProducts(filteredData)
                const all = tableProducts.reduce(
                    (acc, cur) => convertToUsd(acc + cur.totalprice),
                    0
                )
                const allUzs = tableProducts.reduce(
                    (acc, cur) => convertToUzs(acc + cur.totalpriceuzs),
                    0
                )
                const allUzs2 = tableProducts.reduce(
                    (acc, cur) => convertToUzs(acc + (!cur.isUsd && cur.totalpriceuzs || 0)),
                    0
                )
                const allUsd = tableProducts.reduce(
                    (prev, el) => prev + (el.isUsd && el.totalprice || 0),
                    0)

                const allUsd2 = tableProducts.reduce(
                    (prev, el) => prev + (!el.isUsd && el.totalprice || 0),
                    0)
                setAllPayment(roundUsd(allUsd))
                setAllPaymentUzs(allUzs2)
                setAllMainPayment(allUzs)
                setPaymentUsd(roundUsd(allUsd))
                setPaymentCash(roundUsd(allUsd2))
                setPaymentCashUzs(allUzs2)
                setPaid(roundUsd(all))
                setPaidUzs(allUzs)
                setPaymentModalVisible(true)
                currentEchangerate(allUzs, all)
            }
        } else {
            !currency ? warningCurrencyRate() : warningSaleProductsEmpty()
        }
    }

    const handleChangePaymentType = (type) => {
        const all = allPayment - Number(paymentDiscount)
        const allUzs = allPaymentUzs - Number(paymentDiscountUzs)
        const all2 = returnProducts.reduce(
            (summ, product) => convertToUsd(summ + product.totalprice),
            0
        )
        const all2Uzs = returnProducts.reduce(
            (summ, product) => convertToUzs(summ + product.totalpriceuzs),
            0
        )
        const payment = convertToUsd(totalPaymentsUsd - totalPaysUsd - all2)
        const paymentUzs = convertToUzs(
            totalPaymentsUzs - totalPaysUzs - all2Uzs
        )
        if (paymentType !== type) {
            setPaymentType(type)
            switch (type) {
                case 'cash':
                    if (returnProducts.length > 0) {
                        if (payment <= 0) {
                            setAllPayment(payment)
                            setAllPaymentUzs(paymentUzs)
                            setPaymentCash(Math.abs(payment))
                            setPaymentCashUzs(Math.abs(paymentUzs))
                            setPaid(Math.abs(payment))
                            setPaidUzs(Math.abs(paymentUzs))
                        } else {
                            setPaymentCash(0)
                            setPaymentCashUzs(UsdToUzs(0, exchangerate))
                            setPaymentDebt(convertToUsd(payment))
                            setPaymentDebtUzs(convertToUzs(paymentUzs))
                            setAllPayment(all2)
                            setAllPaymentUzs(all2Uzs)
                            setPaid(all2)
                            setPaidUzs(all2Uzs)
                        }
                    } else {
                        setPaymentCash(all)
                        setPaymentCashUzs(allUzs)
                        setPaymentCard('')
                        setPaymentCardUzs('')
                        setPaymentTransfer('')
                        setPaymentTransferUzs('')
                        setPaid(all)
                        setPaidUzs(allUzs)
                        setPaymentDebt(0)
                        setPaymentDebtUzs(0)
                    }
                    break
                case 'card':
                    if (returnProducts.length > 0) {
                        if (payment <= 0) {
                            setAllPayment(payment)
                            setAllPaymentUzs(paymentUzs)
                            setPaymentCard(Math.abs(payment))
                            setPaymentCardUzs(Math.abs(paymentUzs))
                            setPaid(Math.abs(payment))
                            setPaidUzs(Math.abs(paymentUzs))
                        } else {
                            setPaymentCard(0)
                            setPaymentCardUzs(UsdToUzs(0, exchangerate))
                            setPaymentDebt(convertToUsd(payment))
                            setPaymentDebtUzs(convertToUzs(paymentUzs))
                            setAllPayment(all2)
                            setAllPaymentUzs(all2Uzs)
                            setPaid(all2)
                            setPaidUzs(all2Uzs)
                        }
                    } else {
                        setPaymentCard(all)
                        setPaymentCardUzs(allUzs)
                        setPaymentCash('')
                        setPaymentCashUzs('')
                        setPaymentTransfer('')
                        setPaymentTransferUzs('')
                        setPaid(all)
                        setPaidUzs(allUzs)
                        setPaymentDebt(0)
                        setPaymentDebtUzs(0)
                    }
                    setPaymentCash('')
                    setPaymentCashUzs('')
                    setPaymentTransfer('')
                    setPaymentTransferUzs('')
                    break
                case 'transfer':
                    if (returnProducts.length > 0) {
                        if (payment <= 0) {
                            setAllPayment(payment)
                            setAllPaymentUzs(paymentUzs)
                            setPaymentTransfer(Math.abs(payment))
                            setPaymentTransferUzs(Math.abs(paymentUzs))
                            setPaid(Math.abs(payment))
                            setPaidUzs(Math.abs(paymentUzs))
                        } else {
                            setPaymentTransfer(0)
                            setPaymentTransferUzs(UsdToUzs(0, exchangerate))
                            setPaymentDebt(convertToUsd(payment))
                            setPaymentDebtUzs(convertToUzs(paymentUzs))
                            setAllPayment(all2)
                            setAllPaymentUzs(all2Uzs)
                            setPaid(all2)
                            setPaidUzs(all2Uzs)
                        }
                    } else {
                        setPaymentTransfer(all)
                        setPaymentTransferUzs(allUzs)
                        setPaymentCash('')
                        setPaymentCashUzs('')
                        setPaymentCard('')
                        setPaymentCardUzs('')
                        setPaid(all)
                        setPaidUzs(allUzs)
                        setPaymentDebt(0)
                        setPaymentDebtUzs(0)
                    }
                    setPaymentCash('')
                    setPaymentCashUzs('')
                    setPaymentCard('')
                    setPaymentCardUzs('')
                    break
                default:
                    setPaymentCash('')
                    setPaymentCashUzs('')
                    setPaymentCard('')
                    setPaymentCardUzs('')
                    setPaymentTransfer('')
                    setPaymentTransferUzs('')
                    setPaid(0)
                    setPaidUzs(0)
                    setPaymentUsd('')
                    setPaymentDebt(allPayment - Number(paymentDiscount))
                    setPaymentDebtUzs(
                        allPaymentUzs - Number(paymentDiscountUzs)
                    )
                    break
            }
        }
    }
    // console.log(allPayment);
    const writePayment = (value, type) => {
        const maxSum = Math.abs(allPayment)
        const maxSumUzs = Math.abs(allPaymentUzs)
        if (currencyType === 'USD') {
            if (type === 'cash') {
                const all =
                    Number(value) +
                    Number(paymentUsd)
                const allUzs =
                    Number(UsdToUzs(value, exchangerate)) +
                    Number(UsdToUzs(paymentUsd, exchangerate))
                if (all <= maxSum) {
                    setPaymentCash(value)
                    setPaymentCashUzs(UsdToUzs(value, exchangerate))
                    setPaymentDebt(convertToUsd(maxSum - all))
                    setPaymentDebtUzs(convertToUzs(maxSumUzs - allUzs))
                    setPaid(all)
                    setPaidUzs(allUzs)
                } else {
                    warningMorePayment()
                }
            } else if (type === 'usd') {
                const all =
                    Number(value) +
                    Number(paymentCash)
                const allUzs =
                    Number(UsdToUzs(value, exchangerate)) +
                    Number(paymentCashUzs)
                if (all <= maxSum) {
                    setPaymentDebt(convertToUsd(maxSum - all))
                    setPaymentDebtUzs(convertToUzs(maxSumUzs - allUzs))
                    setPaid(all)
                    setPaidUzs(allUzs)
                    setPaymentUsd(value)
                } else {
                    warningMorePayment()
                }
            } else if (type === 'card') {
                const all =
                    Number(value) +
                    Number(paymentCash) +
                    Number(paymentTransfer)
                const allUzs =
                    Number(paymentCashUzs) +
                    Number(UsdToUzs(value, exchangerate)) +
                    Number(paymentTransferUzs)
                if (all <= maxSum) {
                    setPaymentCard(value)
                    setPaymentCardUzs(UsdToUzs(value, exchangerate))
                    setPaymentDebt(convertToUsd(maxSum - all))
                    setPaymentDebtUzs(convertToUzs(maxSumUzs - allUzs))
                    setPaid(all)
                    setPaidUzs(allUzs)
                } else {
                    warningMorePayment()
                }
            } else {
                const all =
                    Number(value) + Number(paymentCash) + Number(paymentCard)
                const allUzs =
                    Number(paymentCashUzs) +
                    Number(paymentCardUzs) +
                    Number(UsdToUzs(value, exchangerate))
                if (all <= maxSum) {
                    setPaymentTransfer(value)
                    setPaymentTransferUzs(UsdToUzs(value, exchangerate))
                    setPaymentDebt(convertToUsd(maxSum - all))
                    setPaymentDebtUzs(convertToUzs(maxSumUzs - allUzs))
                    setPaid(all)
                    setPaidUzs(allUzs)
                } else {
                    warningMorePayment()
                }
            }
        } else {
            if (type === 'cash') {
                const all =
                    Number(value) +
                    Number(paymentTransferUzs) +
                    Number(paymentCardUzs)

                const allUsd =
                    Number(UzsToUsd(value, exchangerate)) +
                    Number(paymentTransfer) +
                    Number(paymentCard)

                setPaymentCashUzs(value)
                setPaymentCash(convertToUsd(UzsToUsd(value, exchangerate)))
                // setPaymentDebt(convertToUsd(maxSum - allUsd))

                setPaid(allUsd)
                setPaidUzs(all)
                if (all <= maxSumUzs) {
                    setPaymentDebtUzs(maxSumUzs - (paymentUsd > maxSum ? UsdToUzs(paymentUsd - maxSum, exchangerate) : 0) - all)
                } else {
                    setPaymentDebtUzs(0)
                    setPaymentUsd(convertToUsd(maxSum - UzsToUsd(all - maxSumUzs, exchangerate)))
                    setPaymentDebt(0)
                }
            } else if (type === 'usd') {
                const all =
                    Number(paymentCashUzs) +
                    Number(paymentTransferUzs) +
                    Number(paymentCardUzs)
                const allUsd =
                    Number(value)
                // console.log(allUsd);
                // console.log(maxSum);
                // if (allUsd <= maxSum) {
                // console.log(maxSum, allUsd);

                // setPaymentDebtUzs(convertToUzs(maxSumUzs - all))
                setPaid(allUsd)
                // setPaidUzs(all)
                setPaymentUsd(value)
                if (allUsd <= maxSum) {
                    setPaymentDebt(maxSum - (all > maxSumUzs ? UzsToUsd(all - maxSumUzs, exchangerate) : 0) - allUsd)
                } 
                else {
                    setPaymentDebtUzs(0)
                    setPaymentCashUzs(maxSumUzs - UsdToUzs(allUsd - maxSum, exchangerate))
                    setPaymentCash(UzsToUsd(maxSumUzs - UsdToUzs(allUsd - maxSum, exchangerate), exchangerate))
                    setPaymentDebt(0)
                }
                // } else {
                //     warningMorePayment()
                // }
            } else if (type === 'card') {
                const all =
                    Number(value) +
                    Number(paymentCashUzs) +
                    Number(paymentTransferUzs) 
                const allUsd =
                    Number(paymentCash) +
                    Number(UzsToUsd(value, exchangerate)) +
                    Number(paymentTransfer) 
                // if (all <= maxSumUzs) {
                //     setPaymentCard(UzsToUsd(value, exchangerate))
                //     setPaymentCardUzs(value)
                //     setPaymentDebt(convertToUsd(maxSum - allUsd))
                //     setPaymentDebtUzs(convertToUzs(maxSumUzs - all))
                //     setPaid(UzsToUsd(all, exchangerate))
                //     setPaidUzs(all)
                // } else {
                //     warningMorePayment()
                // }

                setPaymentCardUzs(value)
                setPaymentCard(UzsToUsd(value, exchangerate))
                // setPaymentDebt(convertToUsd(maxSum - allUsd))

                setPaid(allUsd)
                setPaidUzs(all)
                if (all <= maxSumUzs) {
                    setPaymentDebtUzs(maxSumUzs - (paymentUsd > maxSum ? UsdToUzs(paymentUsd - maxSum, exchangerate) : 0) - all)
                } else {
                    setPaymentDebtUzs(0)
                    setPaymentUsd(convertToUsd(maxSum - UzsToUsd(all - maxSumUzs, exchangerate)))
                    setPaymentDebt(0)
                }
            } else {
                const all =
                    Number(value) +
                    Number(paymentCashUzs) +
                    Number(paymentCardUzs) 
                const allUsd =
                    Number(paymentCash) +
                    Number(paymentCard) +
                    Number(UzsToUsd(value, exchangerate)) 
                // if (all <= maxSumUzs) {
                //     setPaymentTransfer(UzsToUsd(value, exchangerate))
                //     setPaymentTransferUzs(value)
                //     setPaymentDebt(convertToUsd(maxSum - allUsd))
                //     setPaymentDebtUzs(convertToUzs(maxSumUzs - all))
                //     setPaid(allUsd)
                //     setPaidUzs(all)
                // } else {
                //     warningMorePayment()
                // }

                setPaymentTransferUzs(value)
                setPaymentTransfer(UzsToUsd(value, exchangerate))
                // setPaymentDebt(convertToUsd(maxSum - allUsd))

                setPaid(allUsd)
                setPaidUzs(all)
                if (all <= maxSumUzs) {
                    setPaymentDebtUzs(maxSumUzs - (paymentUsd > maxSum ? UsdToUzs(paymentUsd - maxSum, exchangerate) : 0) - all)
                } else {
                    setPaymentDebtUzs(0)
                    setPaymentUsd(convertToUsd(maxSum - UzsToUsd(all - maxSumUzs, exchangerate)))
                    setPaymentDebt(0)
                }
            }
        }
    }

    const handleChangeDiscount = (value, type) => {
        if (type === 'usd') {
            const discountUsd =
                Math.round((value) * 10000) / 10000
            setPaymentDiscountPercent(value)
            setPaymentDiscount(discountUsd)
           
            setPaidUzs(allMainPayment -
                UsdToUzs(discountUsd, exchangerate)
                - Number(paymentDiscountUzs)
            )
            // setPaymentUsd(allPayment - discountUsd)
        } else {
            const discountUzs =
                Math.round((value) * 1) / 1
            setPaymentDiscountPercent(value)
            setPaymentDiscountUzs(discountUzs)
            setPaidUzs(allMainPayment - discountUzs - Number(UsdToUzs(paymentDiscount, exchangerate)))
        }
        setPaymentCash('')
        setPaymentCashUzs('')
        setPaymentCard('')
        setPaymentCardUzs('')
        setPaymentTransfer('')
        setPaymentTransferUzs('')
        setPaymentDebt('')
        setPaymentDebtUzs('')
        setPaymentUsd("")
    }

    const handleChangePaymentInput = (value, key) => {
        writePayment(value, key)
    }
    // console.log(allPaymentUzs);
    const handleClickDiscountBtn = () => {

        setHasDiscount(!hasDiscount)
        // if (paymentType === 'cash') {
        //     setPaymentCash(allPayment)
        //     setPaymentCashUzs(allPaymentUzs)
        //     setPaid(allPayment)
        //     setPaidUzs(allPaymentUzs)
        // } else if (paymentType === 'card') {
        //     setPaymentCard(allPayment)
        //     setPaymentCardUzs(allPaymentUzs)
        //     setPaid(allPayment)
        //     setPaidUzs(allPaymentUzs)
        // } else if (paymentType === 'transfer') {
        //     setPaymentTransfer(allPayment)
        //     setPaymentTransferUzs(allPaymentUzs)
        //     setPaid(allPayment)
        //     setPaidUzs(allPaymentUzs)
        // } else {
        //     setPaymentCash('')
        //     setPaymentCashUzs('')
        //     setPaymentCard('')
        //     setPaymentCardUzs('')
        //     setPaymentTransfer('')
        //     setPaymentTransferUzs('')
        //     setPaid(0)
        //     setPaidUzs(0)
        //     setPaymentDebt(allPayment)
        //     setPaymentDebtUzs(allPaymentUzs)
        // }
        setPaymentDiscount('')
        setPaymentDiscountUzs('')
        setPaymentDiscountPercent('')
    }

    const handleChangeDiscountSelectOption = (option) => {
        if (discountSelectOption.value !== option.value) {
            setDiscountSelectOption(option)
            setPaymentDiscount('')
            setPaymentDiscountUzs('')
            setPaymentDiscountPercent('')
            setPaymentCash('')
            setPaymentCashUzs('')
            setPaymentCard('')
            setPaymentCardUzs('')
            setPaymentTransfer('')
            setPaymentTransferUzs('')
            setPaymentDebt(allPayment)
            setPaymentDebtUzs(allPaymentUzs)
            setPaid(0)
            setPaidUzs(0)
        }
    }

    const clearAll = (bool) => {
        setPaymentCash('')
        setPaymentCashUzs('')
        setPaymentCard('')
        setPaymentCardUzs('')
        setPaymentTransfer('')
        setPaymentTransferUzs('')
        setPaymentUsd('')
        setPaymentDebt(0)
        setPaymentDebtUzs(0)
        setPaid(0)
        setPaidUzs(0)
        setTableProducts([])
        setClientValue('')
        setPackmanValue('')
        setOptionPackman([
            {
                label: t('Tanlang'),
                value: '',
            },
            ...map([...packmans], (pack) => ({
                value: pack._id,
                label: pack.name,
            })),
        ])
        setOptionClient([
            {
                label: t('Barchasi'),
                value: '',
            },
            ...map([...clients], (client) => ({
                value: client._id,
                label: client.name,
                saleconnectorid: client?.saleconnectorid || null,
            })),
        ])
        setUserValue('')
        setChecked(false)
        setActiveCategory(null)
        setCurrentProduct(null)
        setSearchCategory('')
        setSaleConnectorId(null)
        setReturnDiscounts([])
        setDiscounts([])
        setReturnProducts([])
        setTotalPaysUsd(0)
        setTotalPaysUzs(0)
        setTotalPaymentsUzs(0)
        setTotalPaymentsUsd(0)
        togglePaymentModal(bool)
        setSelectedFilial({
            label: market.name,
            value: market._id,
        })
    }

    const handleClickPay = () => {
        if (delay === null) {
            delay = window.setTimeout(() => {
                delay = null
                setModalBody('complete')
                setModalVisible(true)
            }, 300)
        }
    }

    const handleDoubleClick = () => {
        window.clearTimeout(delay)
        delay = null
        returnProducts.length > 0 ? handleApproveReturn() : handleApprovePay()
    }

    const handleClosePay = () => {
        setModalVisible(false)
        setTimeout(() => {
            setModalBody('')
        }, 500)
    }

    const handleApprovePay = () => {
        handleClosePay()
        const body = {
            saleproducts: map(tableProducts, (product) => {
                if (wholesale) {
                    const prev = {
                        ...product,
                        pieces:
                            Number(product.pieces) + Number(product.fromFilial),
                        unitprice: product.tradeprice || product.unitprice,
                        unitpriceuzs:
                            product.tradepriceuzs || product.unitpriceuzs,
                    }
                    prev?.tradeprice && delete prev?.tradeprice
                    prev?.tradepriceuzs && delete prev?.tradepriceuzs
                    return prev
                } else {
                    const prev = {
                        ...product,
                        pieces:
                            Number(product.pieces) + Number(product.fromFilial),
                    }
                    prev?.tradeprice && delete prev?.tradeprice
                    prev?.tradepriceuzs && delete prev?.tradepriceuzs
                    return prev
                }
            }),
            client: {
                _id: clientValue ? clientValue?.value : null,
                name: clientValue ? clientValue.label : userValue,
                packman: clientValue?.packman,
            },
            packman: packmanValue
                ? {
                    _id: packmanValue.value,
                    name: packmanValue.label,
                }
                : null,
            discount: {
                discount: Number(paymentDiscount),
                discountuzs: Number(paymentDiscountUzs),
                procient: Number(paymentDiscountPercent),
                isProcient: !!paymentDiscountPercent,
            },
            payment: {
                totalprice: Number(allPayment),
                totalpriceuzs: Number(allPaymentUzs),
                type: paymentType,
                cash: Number(paymentCash),
                cashuzs: Number(paymentCashUzs),
                card: Number(paymentCard),
                carduzs: Number(paymentCardUzs),
                transfer: Number(paymentTransfer),
                transferuzs: Number(paymentTransferUzs),
                discount: Number(paymentDiscount),
                discountuzs: Number(paymentDiscountUzs),
                usdpayment: Number(paymentUsd),
            },
            
            debt: {
                debt: Number(paymentDebt),
                debtuzs: Number(paymentDebtUzs),
                debtType: debtType,
                comment: '',
            },
            user: user._id,
            saleconnectorid: saleConnectorId,
            comment: saleComment,
        }
        console.log(body);
        
        dispatch(saleConnectorId ? addPayment(body) : makePayment(body)).then(
            ({ payload, error }) => {
                if (!error) {
                    // setModalData(payload)
                    clearAll()
                    setWholesale(false)
                    // setTimeout(() => {
                    //     setModalBody('checkSell')
                    //     setModalVisible(true)
                    //     clearAll()
                    // }, 500)
                    if (temporary) {
                        dispatch(deleteSavedPayment({ _id: temporary._id }))
                        setTemporary(null)
                    }
                }
            }
        )
    }

    const handleApproveReturn = () => {
        handleClosePay()
        const body = {
            saleproducts: filter(
                returnProducts,
                (product) => Number(product.pieces) > 0
            ),
            discounts: returnDiscounts,
            payment: {
                totalprice: Number(allPayment),
                totalpriceuzs: Number(allPaymentUzs),
                type: paymentType,
                cash: Number(allPaymentUzs < 0 ? -1 * paymentCash : paymentCash),
                cashuzs: Number(
                    allPaymentUzs < 0 ? -1 * paymentCashUzs : paymentCashUzs
                ),
                card: Number(allPaymentUzs < 0 ? -1 * paymentCard : paymentCard),
                carduzs: Number(
                    allPaymentUzs < 0 ? -1 * paymentCardUzs : paymentCardUzs
                ),
                transfer: Number(
                    allPaymentUzs < 0 ? -1 * paymentTransfer : paymentTransfer
                ),
                transferuzs: Number(
                    allPaymentUzs < 0 ? -1 * paymentTransferUzs : paymentTransferUzs
                ),
                usdpayment: Number(
                    allPayment < 0 ? -1 * paymentUsd : paymentUsd
                ),
            },
            debt: {
                debt: Number(allPayment < 0 ? -1 * paymentDebt : paymentDebt),
                debtuzs: Number(
                    allPaymentUzs < 0 ? -1 * paymentDebtUzs : paymentDebtUzs
                ),
                comment: '',
            },
            user: user._id,
            saleconnectorid: saleConnectorId,
            comment: saleComment,
        }
        console.log(body);
        // return
        dispatch(returnSaleProducts(body)).then(({ payload, error }) => {
            if (!error) {
                setModalData(payload)
                setTimeout(() => {
                    setModalBody('checkSellReturn')
                    setModalVisible(true)
                    clearAll()
                }, 500)
            }
        })
    }
    
    const handleClickSave = () => {
        if (tableProducts.length > 0) {
            const all = tableProducts.reduce(
                (acc, cur) => convertToUsd(acc + cur.totalprice),
                0
            )
            const allUzs = tableProducts.reduce(
                (acc, cur) => convertToUzs(acc + cur.totalpriceuzs),
                0
            )
            const body = {
                temporary: {
                    saleconnectorid: clientValue.saleconnectorid || null,
                    clientValue,
                    packmanValue,
                    userValue,
                    tableProducts,
                    totalPrice: all,
                    totalPriceUzs: allUzs,
                },
            }
            // console.log(body);
            // return 
            dispatch(savePayment(body)).then(({ error }) => {
                if (!error) {
                    clearAll(false)
                    navigate('/sotuv/saqlanganlar')
                }
            })
            if (temporary) {
                dispatch(deleteSavedPayment({ _id: temporary._id }))
                setTemporary(null)
            }
        }
    }

    // bu yerda boshqa funksiyalar
    const handleChange = (id, value, key) => {
        switch (key) {
            case 'unitprice':
                handleChangeProductUnitPriceTable(id, value)
                break
            case 'pieces':
                handleChangeProductNumberTable(id, value)
                break
            case 'fromFilial':
                handleChangeFromFilial(id, value)
                break
            case 'select':
                handleSelectFilial(id, value)
                break
            case 'packcount':
                handlePackcount(id, value)
                break
            default:
                break
        }
    }

    const handlePackcount = (index, value) => {
        if (tableProducts.some((prod, i) => i === index && !prod.packcount)) {
            return warningEmptyPackCount()
        }
        if (tableProducts.some((prod, i) => i === index && prod?.packcount > prod.total)) {
            return warningEmptyPackCount()
        }
        const newRelease = map(tableProducts, (prod, i) => {
            if (i === index) {
                return {
                    ...prod,
                    totalpackcount: !prod?.isPackcount && ((prod.total / prod.packcount) / 100) * 100,
                    isPackcount: !prod?.isPackcount,
                    totalprice: !prod?.isPackcount ? convertToUsd(
                        (prod?.packcount) *
                        (wholesale
                            ? prod.tradeprice ||
                            prod.unitprice
                            : prod.unitprice)
                    ) : prod.unitprice,
                    totalpriceuzs: !prod?.isPackcount ? convertToUzs(
                        (prod?.packcount) *
                        (wholesale
                            ? prod.tradepriceuzs ||
                            prod.unitpriceuzs
                            : prod.unitpriceuzs)
                    ) : prod.unitpriceuzs,
                    packcountpieces: 1,
                    pieces: !prod?.isPackcount ? prod.packcount : 1
                }
            }

            return prod
        })
        setTableProducts(newRelease)
    }

    const handleDelete = (index) => {
        tableProducts.splice(index, 1)
        setTableProducts([...tableProducts])
    }

    const handleChangeChecked = () => {
        if (checked) {
            setUserValue('')
            setPackmanValue('')
            setClientValue('')
        }
        setChecked(!checked)
    }

    const handleClickCategory = (id) => {
        if (activeCategory === id) {
            setActiveCategory(null)
        } else {
            setActiveCategory(id)
            setSearchCategory('')
            setFilteredCategories(allcategories)
        }
    }

    const handleSearchCategory = (e) => {
        const str = e.target.value
        setSearchCategory(str)
        const searchedStr = str.replace(/\s+/g, ' ').trim()
        const filterData = filter(allcategories, (obj) =>
            obj.name
                ? obj.name.toLowerCase().includes(searchedStr) ||
                obj.code.includes(searchedStr)
                : obj.code.includes(searchedStr)
        )
        setFilteredCategories(str !== '' ? filterData : allcategories)
    }

    const handleChangeSelectedProduct = (option) => {
        // const hasProduct = option.barcode
        //     ? filter(
        //           tableProducts,
        //           (obj) => obj.product.barcode === option.barcode
        //       ).length > 0
        //     : filter(tableProducts, (obj) => obj.product._id === option.value)
        //           .length > 0

        !option.barcode && setSelectedProduct(option)
        const product = option.barcode
            ? allProducts.find(
                (obj) => obj.productdata.barcode === option.barcode
            )
            : allProducts.find((obj) => obj._id === option.value)

        const currentProduct = {
            total: product.total,
            product: {
                _id: product._id,
                code: product.productdata.code,
                name: product.productdata.name,
                barcode: product.productdata.barcode,
            },
            totalprice: product.price.sellingprice,
            totalpriceuzs: product.price.sellingpriceuzs,
            tradeprice: product.price.tradeprice || 0,
            tradepriceuzs: product.price.tradepriceuzs || 0,
            pieces: 1,
            isUsd: product?.isUsd || false,
            incomingprice: product.price.incomingprice,
            incomingpriceuzs: product.price.incomingpriceuzs,
            unitprice: product.price.sellingprice,
            unitpriceuzs: product.price.sellingpriceuzs,
            categorycode: product.category.code,
            filialProductsTotal: product.total,
            fromFilial: 0,
            filial: market._id,
            packcount: product?.packcount,
        }
        if (
            (currencyType === 'USD' &&
                currentProduct.incomingprice <= currentProduct.unitprice) ||
            (currencyType === 'UZS' &&
                currentProduct.incomingpriceuzs <=
                currentProduct.unitpriceuzs)
        ) {
            setTableProducts([...tableProducts, currentProduct])
            setSelectedProduct('')
        } else {
            warningLessSellPayment()
        }

    }
    // console.log(tableProducts);
    const handleChangePackmanValue = (option) => {
        setPackmanValue(option)
        const pack = filter(packmans, (pack) => pack._id === option.value)[0]
        if (pack && pack.hasOwnProperty('clients')) {
            setOptionClient(
                map(pack.clients, (client) => ({
                    label: client.name,
                    value: client._id,
                    packman: pack,
                    saleconnectorid: client?.saleconnectorid || null,
                }))
            )
        } else {
            setOptionClient([
                {
                    label: t('Tanlang'),
                    value: '',
                },
                ...map([...clients], (client) => ({
                    label: client.name,
                    value: client._id,
                    packman: client?.packman,
                    saleconnectorid: client?.saleconnectorid || null,
                })),
            ])
        }
        setClientValue('')
        setUserValue('')
    }

    const handleClickPrint = () => { }

    const handleChangeClientValue = (option) => {
        setClientValue(option)
        setSaleConnectorId(option?.saleconnectorid || null)
        const client = filter(
            clients,
            (client) => client._id === option.value
        )[0]
        if (client && client.hasOwnProperty('packman')) {
            setPackmanValue({
                label: client?.packman?.name,
                value: client?.packman?._id,
            })
        }
        option.value ? setUserValue(option.label) : setUserValue('')
    }

    const handleChangeUserValue = (e) => {
        setUserValue(e.target.value)
    }

    const handleChangeProductUnitPrice = (value) => {
        setCurrentProduct({
            ...currentProduct,
            unitprice:
                currencyType === 'USD' ? value : UzsToUsd(value, exchangerate),
            unitpriceuzs:
                currencyType === 'UZS' ? value : UsdToUzs(value, exchangerate),
            totalprice:
                currencyType === 'USD'
                    ? value * currentProduct.pieces
                    : UzsToUsd(value * currentProduct.pieces, exchangerate),
            totalpriceuzs:
                currencyType === 'UZS'
                    ? value * currentProduct.pieces
                    : UsdToUzs(value * currentProduct.pieces, exchangerate),
        })
    }

    const handleChangeProductNumber = (value) => {
        setCurrentProduct({
            ...currentProduct,
            pieces: value,
            totalprice: value * currentProduct.unitprice,
            totalpriceuzs: value * currentProduct.unitpriceuzs,
        })
    }

    const handleChangeProductUnitPriceTable = (index, value) => {
        const newRelease = !wholesale
            ? map(tableProducts, (prevProduct, i) =>
                i === index
                    ? {
                        ...prevProduct,
                        unitprice: prevProduct.isUsd
                            ? value
                            : UzsToUsd(value, exchangerate),
                        unitpriceuzs: prevProduct.isUsd
                            ? UsdToUzs(value, exchangerate)
                            : value,
                        totalprice: prevProduct.isUsd
                            ? value *
                            (Number(prevProduct.pieces))
                            : UzsToUsd(
                                value *
                                Number(prevProduct.pieces),
                                exchangerate
                            ),
                        totalpriceuzs: prevProduct.isUsd ?
                            UsdToUzs(
                                value *
                                Number(prevProduct.pieces),
                                exchangerate
                            ) :
                            value * (Number(prevProduct.pieces))

                    }
                    : prevProduct
            )
            : map(tableProducts, (prevProduct, i) =>
                i === index
                    ? {
                        ...prevProduct,
                        tradeprice: prevProduct.isUsd
                            ? value
                            : UzsToUsd(value, exchangerate),
                        tradepriceuzs: prevProduct.isUsd
                            ? UsdToUzs(value, exchangerate)
                            : value,
                        totalprice: prevProduct.isUsd
                            ? value *
                            (Number(prevProduct.pieces))
                            : UzsToUsd(
                                value *
                                Number(prevProduct.pieces),
                                exchangerate
                            ),
                        totalpriceuzs: prevProduct.isUsd ?
                            UsdToUzs(
                                value *
                                Number(prevProduct.pieces),
                                exchangerate
                            ) :
                            value * (Number(prevProduct.pieces))
                    }
                    : prevProduct
            )
        setTableProducts(newRelease)
    }

    const handleChangeProductNumberTable = (index, value) => {
        const newRelease = map(tableProducts, (prevProduct, i) =>
            i === index
                ? {
                    ...prevProduct,
                    pieces: prevProduct?.isPackcount ? Number(value) * prevProduct?.packcount : value,
                    packcountpieces: prevProduct?.isPackcount ? Number(value) : 0,
                    totalprice: convertToUsd(
                        (prevProduct?.isPackcount ? Number(value) * prevProduct?.packcount : Number(value)) *
                        (wholesale
                            ? prevProduct.tradeprice ||
                            prevProduct.unitprice
                            : prevProduct.unitprice)
                    ),
                    totalpriceuzs: convertToUzs(
                        (prevProduct?.isPackcount ? Number(value) * prevProduct?.packcount : Number(value)) *
                        (wholesale
                            ? prevProduct.tradepriceuzs ||
                            prevProduct.unitpriceuzs
                            : prevProduct.unitpriceuzs)
                    ),
                }
                : prevProduct
        )
        setTableProducts(newRelease)
    }

    const handleChangeFromFilial = (id, value) => {
        const newRelease = map(tableProducts, (prevProduct) =>
            prevProduct.product._id === id
                ? {
                    ...prevProduct,
                    fromFilial: Number(value),
                    totalprice: convertToUsd(
                        (Number(value) + Number(prevProduct.pieces)) *
                        (wholesale
                            ? prevProduct.tradeprice ||
                            prevProduct.unitprice
                            : prevProduct.unitprice)
                    ),
                    totalpriceuzs: convertToUzs(
                        (Number(value) + Number(prevProduct.pieces)) *
                        (wholesale
                            ? prevProduct.tradepriceuzs ||
                            prevProduct.unitpriceuzs
                            : prevProduct.unitpriceuzs)
                    ),
                }
                : prevProduct
        )
        setTableProducts(newRelease)
    }

    const handleChangeProduct = (value, key) => {
        switch (key) {
            case 'unitprice':
                handleChangeProductUnitPrice(value)
                break
            case 'pieces':
                handleChangeProductNumber(value)
                break
            default:
                return null
        }
    }

    const increment = (id) => {
        const newRelease = map(tableProducts, (prevProduct) =>
            prevProduct.product._id === id
                ? {
                    ...prevProduct,
                    pieces: Number(prevProduct.pieces) + 1,
                    totalprice: convertToUsd(
                        (Number(prevProduct.pieces) +
                            Number(prevProduct.fromFilial) +
                            1) *
                        (wholesale
                            ? prevProduct.tradeprice ||
                            prevProduct.unitprice
                            : prevProduct.unitprice)
                    ),
                    totalpriceuzs: convertToUzs(
                        (Number(prevProduct.pieces) +
                            Number(prevProduct.fromFilial) +
                            1) *
                        (wholesale
                            ? prevProduct.tradepriceuzs ||
                            prevProduct.unitpriceuzs
                            : prevProduct.unitpriceuzs)
                    ),
                }
                : prevProduct
        )
        setTableProducts(newRelease)
    }

    const decrement = (id) => {
        const newRelease = map(tableProducts, (prevProduct) =>
            prevProduct.product._id === id
                ? {
                    ...prevProduct,
                    pieces:
                        Number(prevProduct.pieces) > 1
                            ? Number(prevProduct.pieces) - 1
                            : 1,
                    totalprice: convertToUsd(
                        (Number(prevProduct.pieces) > 1
                            ? Number(prevProduct.pieces) -
                            1 +
                            Number(prevProduct.fromFilial)
                            : 1) *
                        (wholesale
                            ? prevProduct.tradeprice ||
                            prevProduct.unitprice
                            : prevProduct.unitprice)
                    ),
                    totalpriceuzs: convertToUzs(
                        (Number(prevProduct.pieces) > 1
                            ? Number(prevProduct.pieces) -
                            1 +
                            Number(prevProduct.fromFilial)
                            : 1) *
                        (wholesale
                            ? prevProduct.tradepriceuzs ||
                            prevProduct.unitpriceuzs
                            : prevProduct.unitpriceuzs)
                    ),
                }
                : prevProduct
        )
        setTableProducts(newRelease)
    }

    const changeComment = (e) => {
        setSaleComment(e)
    }

    const handleError = () => {
        universalToast(t("Mahsulot kodi o'qilmadi!"), 'warning')
    }

    const handleScan = (data) => {
        handleChangeSelectedProduct({ barcode: data })
    }

    const handleChangeReturnProduct = (value, id, index) => {
        if (value > Number(returnProducts[index].product.pieces))
            return universalToast(
                t(
                    "Diqqat! Qaytariladigan mahsulot soni sotilgan mahsulot sonidan ortiq bo'lolmaydi"
                ),
                'warning'
            )
        const newRelease = map(returnProducts, (prevProduct) =>
            prevProduct._id === id
                ? {
                    ...prevProduct,
                    pieces: value,
                    totalprice: convertToUsd(value * prevProduct.unitprice),
                    totalpriceuzs: convertToUzs(
                        value * prevProduct.unitpriceuzs
                    ),
                }
                : prevProduct
        )
        setReturnProducts(newRelease)
    }

    const handleClickReturnPayment = () => {
        if (returnProducts.length) {
            const all = returnProducts.reduce(
                (summ, product) => convertToUsd(summ + (product?.product.isUsd ? product.totalprice : 0)),
                0
            )
            const allUzs = returnProducts.reduce(
                (summ, product) => convertToUzs(summ + (!product?.product.isUsd ? product.totalpriceuzs : 0)),
                0
            )
            
            const newRelease = discounts.map((discount) => {
                let newDiscount = { ...discount }
                map(returnProducts, (product) => {
                    if (discount._id === product.product?.discount) {
                        newDiscount = {
                            ...discount,
                            discount: convertToUsd(
                                newDiscount.discount -
                                (product.totalprice * discount.procient) /
                                100
                            ),
                            discountuzs: convertToUzs(
                                newDiscount.discountuzs -
                                (product.totalpriceuzs *
                                    discount.procient) /
                                100
                            ),
                            totalprice: convertToUsd(
                                newDiscount.totalprice - product.totalprice
                            ),
                            totalpriceuzs: convertToUzs(
                                newDiscount.totalpriceuzs -
                                product.totalpriceuzs
                            ),
                        }
                    }
                    return ''
                })
                return { ...newDiscount }
            })
            const totalDiscountsUsd = newRelease.reduce(
                (summ, discount) => summ + discount.discount,
                0
            )
            const totalDiscountsUzs = newRelease.reduce(
                (summ, discount) => summ + discount.discountuzs,
                0
            )
            // console.log(returnProducts);
            // console.log(totalPaymentsUzs);
            // console.log(totalPaysUzs);
            // console.log(allUzs);
            const payment = convertToUsd(
                totalPaymentsUsd - totalPaysUsd - totalDiscountsUsd - all
            )
            const paymentUzs = convertToUzs(
                totalPaymentsUzs - totalPaysUzs - totalDiscountsUzs - allUzs
            )
            setReturnDiscounts(newRelease)
            if ((payment < 0) || (paymentUzs < 0)) {
                setAllPayment(payment)
                setAllPaymentUzs(paymentUzs)
                setPaymentCash(Math.abs(payment))
                setPaymentCashUzs(Math.abs(paymentUzs))
                setPaid(Math.abs(payment))
                setPaidUzs(Math.abs(paymentUzs))
                setPaymentUsd(Math.abs(payment))
            } else {
                setPaymentCash(0)
                setPaymentUsd(0)
                setPaymentCashUzs(UsdToUzs(0, exchangerate))
                setPaymentDebt(convertToUsd(payment))
                setPaymentDebtUzs(convertToUzs(paymentUzs))
                setAllPayment(all)
                setAllPaymentUzs(allUzs)
                setPaid(all)
                setPaidUzs(allUzs)
            }
            setPaymentModalVisible(true)
            currentEchangerate(allUzs, all)
        } else {
            warningReturnProductsEmpty()
        }
    }

    const toggleSalePrice = (e) => {
        let checked = e.target.checked
        if (tableProducts.length > 0) {
            setWholesale(!wholesale)
            if (checked) {
                setTableProducts((prevState) =>
                    prevState.map((product) => ({
                        ...product,
                        totalprice: product.tradeprice
                            ? convertToUsd(
                                Number(product.pieces + product.fromFilial) *
                                product.tradeprice
                            )
                            : product.totalprice,
                        totalpriceuzs: product.tradepriceuzs
                            ? convertToUzs(
                                Number(product.pieces + product.fromFilial) *
                                product.tradepriceuzs
                            )
                            : product.totalpriceuzs,
                    }))
                )
            } else {
                setTableProducts((prevState) =>
                    prevState.map((product) => ({
                        ...product,
                        totalprice: product.unitprice
                            ? convertToUsd(
                                Number(product.pieces + product.fromFilial) *
                                product.unitprice
                            )
                            : product.totalprice,
                        totalpriceuzs: product.unitpriceuzs
                            ? convertToUzs(
                                Number(product.pieces + product.fromFilial) *
                                product.unitpriceuzs
                            )
                            : product.totalpriceuzs,
                    }))
                )
            }
        } else {
            warningSaleProductsEmpty()
        }
    }

    const handleSelectFilial = (id, value) => {
        getFilialProducts(value)
            .then((data) => {
                setTableProducts(
                    [...tableProducts].map((prod) => {
                        if (prod.product._id === id) {
                            prod.filialProductsTotal = data.total
                            prod.filial = value.filial
                            if (value.filial === market._id) {
                                prod.fromFilial = 0
                                prod.totalprice = convertToUsd(
                                    Number(prod.pieces) *
                                    (wholesale
                                        ? prod.tradeprice || prod.unitprice
                                        : prod.unitprice)
                                )
                                prod.totalpriceuzs = convertToUzs(
                                    Number(prod.pieces) *
                                    (wholesale
                                        ? prod.tradepriceuzs ||
                                        prod.unitpriceuzs
                                        : prod.unitpriceuzs)
                                )
                            }
                        }
                        return prod
                    })
                )
            })
            .catch((data) => universalToast(data, 'error'))
    }

    const getFilialProducts = async (value) => {
        const { data } = await Api.post('/filials/products/get', value)
        return data
    }

    useEffect(() => {
        let allProductsReducer = []
        let productsForSearch = []
        market &&
            socket.emit('getProductsOfCount', {
                market: market._id,
            })
        market &&
            socket.on('categories', ({ id, categories }) => {
                id === market._id && dispatch(setAllCategories(categories))
            })
        market &&
            socket.on('getProductsOfCount', ({ id, products }) => {
                if (id === market._id) {
                    productsForSearch = [
                        ...productsForSearch,
                        ...map(products, (product) => ({
                            value: product._id,
                            label: `(${product.total}) ${product.category.code
                                }${product.productdata.code} - ${product.productdata.name
                                } -------- (${product?.isUsd
                                    ? (product?.price?.sellingprice).toLocaleString(
                                        'ru-RU'
                                    )
                                    : (product?.price?.sellingpriceuzs).toLocaleString(
                                        'ru-RU'
                                    )
                                } ${product?.isUsd ? "USD" : 'UZS'})`,
                        })),
                    ]
                    setFilteredProducts(productsForSearch)
                    allProductsReducer.push(...products)
                    dispatch(setAllProductsBySocket(allProductsReducer))
                }
            })
        market &&
            socket.on('error', ({ id, message }) => {
                id === market._id && universalToast(message, 'error')
            })

        //    eslint-disable-next-line react-hooks/exhaustive-deps
    }, [market, dispatch, lastPayments])

    useEffect(() => {
        if (activeCategory) {
            const filteredData = filter(
                allProducts,
                (product) => product.category._id === activeCategory
            )
            setFilteredProducts(
                map(filteredData, (product) => ({
                    value: product._id,
                    label: `(${product.total}) ${product.category.code}${product.productdata.code} - ${product.productdata.name}`,
                }))
            )
        } else {
            setFilteredProducts(
                map(allProducts, (product) => ({
                    value: product._id,
                    label: `(${product.total}) ${product.category.code}${product.productdata.code} - ${product.productdata.name}`,
                }))
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory])

    useEffect(() => {
        dispatch(getAllPackmans())
        dispatch(getClients())
        dispatch(getFilials({ marketData: market }))
    }, [dispatch, market])

    useEffect(() => {
        setFilteredCategories(allcategories)
    }, [allcategories])

    useEffect(() => {
        setOptionPackman([
            {
                label: t('Tanlang'),
                value: '',
            },
            ...map([...packmans], (packman) => ({
                value: packman._id,
                label: packman.name,
            })),
        ])
    }, [packmans, t])
   
    useEffect(() => {
        setOptionClient([
            {
                label: t('Barchasi'),
                value: '',
            },
            ...map([...clients], (client) => ({
                value: client._id,
                label: client.name,
                saleconnectorid: client?.saleconnectorid || null,
            })),
        ])
    }, [clients, t])

    useEffect(() => {
        const data = location.state

        const setClientData = () => {
            data.saleconnector.client &&
                setClientValue({
                    label: data.saleconnector.client.name,
                    value: data.saleconnector.client._id,
                })
            data.saleconnector.packman &&
                setPackmanValue({
                    label: data.saleconnector.packman.name,
                    value: data.saleconnector.packman._id,
                })
            setSaleConnectorId(data.saleconnector._id)
        }
        if (data && data.temporary) {
            console.log(data.temporary);
            setTemporary(data.temporary)
            setTableProducts(data.temporary.tableProducts)
            setSaleConnectorId(data.temporary.clientValue?.saleconnectorid || null)
            setClientValue(data.temporary.clientValue)
            setPackmanValue(data.temporary.packmanValue)
            setUserValue(data.temporary.userValue)
        }
        if (data && data.saleconnector && !data.returnProducts) {
            setClientData()
        }
        if (data && data.saleconnector && data.returnProducts) {
            console.log(data.saleconnector);
            setClientData()
            let returned = []
            map(data.saleconnector.products, (saleProduct) => {
                const sale = {
                    _id: saleProduct.product._id,
                    isUsd: saleProduct.product.isUsd,
                    discount: saleProduct.discount && saleProduct.discount || 0,
                    pieces: saleProduct.pieces,
                    totalprice: saleProduct.totalprice,
                    totalpriceuzs: saleProduct.totalpriceuzs,
                }
                map(saleProduct.saleproducts, (product) => {
                    sale.pieces += product.pieces
                    sale.totalprice += product.totalprice
                    sale.totalpriceuzs += product.totalpriceuzs
                    return ''
                })
                saleProduct.pieces > 0 &&
                    returned.push({
                        pieces: '',
                        totalpriceuzs: 0,
                        totalprice: 0,
                        unitprice: saleProduct.unitprice,
                        unitpriceuzs: saleProduct.unitpriceuzs,
                        product: { ...sale },
                        productdata: { ...saleProduct.product.productdata },
                        _id: saleProduct._id,
                    })
                return ''
            })
            setSaleConnectorId(data.saleconnector.saleconnector)
            setReturnProducts(
                filter(returned, (product) => product.product.pieces > 0)
            )
            setDiscounts([])
            const totalSumm = (datas, property, type) => {
                return type === 'uzs'
                    ? convertToUzs(
                        datas.reduce((summ, data) => summ + data[property], 0)
                    )
                    : convertToUsd(
                        datas.reduce((summ, data) => summ + data[property], 0)
                    )
            }
            setTotalPaymentsUsd(
                data.saleconnector.products.reduce((prev, el) => prev + (el.product.isUsd ? el.totalprice : 0), 0)
            )
            setTotalPaymentsUzs(
                data.saleconnector.products.reduce((prev, el) => prev + (!el.product.isUsd ? el.totalpriceuzs : 0), 0)
            )
            setTotalPaysUsd(
                data.saleconnector.payment.usdpayment
            )
            setTotalPaysUzs(
                data.saleconnector.payment.paymentuzs
            )
        }
        window.history.replaceState({}, document.title)
    }, [location.state])

    

    return (
        <div className={'flex grow relative overflow-auto'}>
            {loadingMakePayment && (
                <div className='fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full'>
                    <SmallLoader />
                </div>
            )}
            <CustomerPayment
                returned={!!returnProducts.length}
                exchangerate={exchangerate}
                type={paymentType}
                active={paymentModalVisible}
                allMainPayment={allMainPayment}
                togglePaymentModal={togglePaymentModal}
                changePaymentType={handleChangePaymentType}
                onChange={handleChangePaymentInput}
                client={userValue || clientValue.label || packmanValue.label}
                allPayment={allPayment}
                allPaymentUzs={allPaymentUzs}
                card={currencyType === 'USD' ? paymentCard : paymentCardUzs}
                cash={currencyType === 'USD' ? paymentCash : paymentCashUzs}
                debt={paymentDebt}
                debtuzs={paymentDebtUzs}
                discount={paymentDiscount}
                discountUzs={paymentDiscountUzs}
                handleChangeDiscount={handleChangeDiscount}
                hasDiscount={hasDiscount}
                transfer={
                    currencyType === 'USD'
                        ? paymentTransfer
                        : paymentTransferUzs
                }
                handleClickDiscountBtn={handleClickDiscountBtn}
                discountSelectOption={discountSelectOption}
                handleChangeDiscountSelectOption={
                    handleChangeDiscountSelectOption
                }
                paid={currencyType === 'USD' ? paid : paidUzs}
                handleClickPay={handleClickPay}
                changeComment={changeComment}
                saleComment={saleComment}
                onDoubleClick={handleDoubleClick}
                paymentUsd={paymentUsd}
                debtType={debtType}
                setDebtType={setDebtType}
            />
            <UniversalModal
                body={modalBody}
                toggleModal={
                    modalBody === 'complete' ? handleClosePay : toggleCheckModal
                }
                approveFunction={
                    modalBody === 'complete'
                        ? returnProducts.length
                            ? handleApproveReturn
                            : handleApprovePay
                        : handleClickPrint
                }
                isOpen={modalVisible}
                product={modalData}
                headers={headers}
                headerText={
                    modalBody === 'complete' &&
                    t("To'lovni amalga oshirishni tasdiqlaysizmi ?")
                }
                title={
                    modalBody === 'complete' &&
                    t(
                        "To'lovni amalga oshirgach bu ma`lumotlarni o`zgaritirb bo`lmaydi !"
                    )
                }
                changeProduct={handleChangeProduct}
            />
            <div className='flex flex-col grow gap-[1.25rem] overflow-auto'>
                <div className={'mainPadding flex flex-col gap-[1.25rem]'}>
                    <div>
                        <Checkbox
                            id={'register-selling'}
                            onChange={handleChangeChecked}
                            value={checked}
                            label={t('Mijoz')}
                        />
                        <div className={'flex gap-[1.25rem] mt-[1rem]'}>
                            <FieldContainer
                                placeholder={t('Santexniklar')}
                                maxWidth={'w-[14.676875rem]'}
                                disabled={!checked}
                                border={true}
                                select={true}
                                value={packmanValue}
                                options={optionPackman}
                                onChange={handleChangePackmanValue}
                            />
                            <FieldContainer
                                placeholder={t('Xaridor')}
                                maxWidth={'w-[14.676875rem]'}
                                disabled={!checked}
                                border={true}
                                select={true}
                                value={clientValue}
                                options={optionClient}
                                onChange={handleChangeClientValue}
                            />
                            <FieldContainer
                                placeholder={t('Amaldagi xaridor')}
                                disabled={!checked}
                                value={userValue}
                                onChange={handleChangeUserValue}
                            />
                        </div>
                    </div>
                    {!returnProducts.length && (
                        <div className={'flex flex-col gap-[1.25rem]'}>
                            <FieldContainer
                                select={true}
                                placeholder={t('misol: kompyuter')}
                                value={selectedProduct}
                                label={t('Maxsulotlar')}
                                onChange={handleChangeSelectedProduct}
                                options={filteredProducts}
                            />
                            <div className={'flex justify-end items-start'}>
                                <div className='checkbox-card sale-toggle-container'>
                                    <p className={'toggleText'}>
                                        {t('Optom narxida hisoblash')} :
                                    </p>
                                    <input
                                        type='checkbox'
                                        checked={wholesale}
                                        onChange={toggleSalePrice}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={'tableContainerPadding mt-[-20px]'}>
                    {returnProducts.length ? (
                        <Table
                            page={'backproduct'}
                            data={returnProducts}
                            headers={headerReturn}
                            currency={currencyType}
                            changeHandler={handleChangeReturnProduct}
                        />
                    ) : !tableProducts.length ? (
                        <NotFind
                            text={t("Sotuvda mahsulotlar qo'shilmagan!")}
                        />
                    ) : (
                        <Table
                            page={'registersale'}
                            data={tableProducts}
                            headers={headers}
                            currency={currencyType}
                            Delete={handleDelete}
                            changeHandler={handleChange}
                            footer={'registersale'}
                            increment={increment}
                            decrement={decrement}
                            lowUnitpriceProducts={lowUnitpriceProducts}
                            wholeSale={wholesale}
                            selectedFilial={selectedFilial}
                        />
                    )}
                </div>
            </div>
            <div className='register-selling-right min-w-[20.25rem] bg-white-400 backdrop-blur-[3.125rem] rounded-[0.25rem] flex flex-col gap-[1.25rem]'>
                <div className='flex flex-col grow gap-[1.25rem]'>
                    <SearchInput
                        placeholder={t('kategoriyani qidirish...')}
                        value={searchCategory}
                        onChange={handleSearchCategory}
                        onKeyUp={() => { }}
                    />
                    <div className='grow relative overflow-auto'>
                        <div className='cards-container absolute left-0 right-[0.125rem] top-0 bottom-0'>
                            {loading ? (
                                <div className='tableContainerPadding'>
                                    <Spinner />
                                </div>
                            ) : filteredCategories.length > 0 ? (
                                map(filteredCategories, (category) => (
                                    <CategoryCard
                                        key={category._id}
                                        id={category._id}
                                        activeCategory={
                                            category._id === activeCategory
                                        }
                                        title={category.name}
                                        code={category.code}
                                        products={category.products.length}
                                        onClick={handleClickCategory}
                                    />
                                ))
                            ) : (
                                <NotFind text={t('Kategoriya mavjud emas')} />
                            )}
                        </div>
                    </div>
                </div>
                <div className={'flex gap-[0.625rem]'}>
                    <button
                        type={'button'}
                        className={'register-selling-right-accept-btn'}
                        onClick={
                            returnProducts.length
                                ? handleClickReturnPayment
                                : handleClickPayment
                        }
                    >
                        {t("To'lov")}
                    </button>
                    {!returnProducts.length && (
                        <button
                            type={'button'}
                            onClick={handleClickSave}
                            className={'register-selling-right-deny-btn'}
                        >
                            <IoAttach size={'1.5rem'} />
                        </button>
                    )}
                </div>
            </div>
            <BarcodeReader onError={handleError} onScan={handleScan} />
        </div>
    )
}

export default RegisterSelling
