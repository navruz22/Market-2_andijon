import React, { forwardRef } from 'react'
import { uniqueId, map } from 'lodash'
import { useSelector } from 'react-redux'
import { roundUsd, roundUzs, UsdToUzs, UzsToUsd } from '../../../App/globalFunctions'

export const SmallCheck = forwardRef((props, ref) => {
    const {
        selled,
        returned,
        selledDiscounts,
        returnedDiscounts,
        selledPayments,
        returnedPayments,
        product,
        userInfo,
    } = props
    console.log(product);
    const { market } = useSelector((state) => state.login)
    const { currencyType, currency } = useSelector((state) => state.currency)
    const calculateAllSum = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    pr[
                    currencyType === 'USD'
                        ? 'totalprice'
                        : 'totalpriceuzs'
                    ]
                )
            }, 0)
            : 0
    }
    const calculateAllFilialSum = (data) => {
        if (currencyType === 'USD') {
            return data.reduce((prev, el) => prev + ((el.fromFilial || 0) * el.unitprice), 0)
        } else {
            return data.reduce((prev, el) => prev + ((el.fromFilial || 0) * el.unitpriceuzs), 0)
        }
    }
    const calculateAllDiscounts = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    pr[currencyType === 'USD' ? 'discount' : 'discountuzs']
                )
            }, 0)
            : 0
    }
    const calculateAllPayments = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    pr[currencyType === 'USD' ? 'payment' : 'paymentuzs']
                )
            }, 0)
            : 0
    }
    console.log(market);
    return (
        <div ref={ref} className={'bg-white-900 p-4 rounded-md w-[7.5cm]'}>
            <div className='flex pb-[1px] flex-col text-center justify-center border-b-[0.8px] border-black-700'>
                {/* <div>
                    <img src={market?.image} alt="logo" />
                </div> */}
                {/* <h2 className='text-[16px] mb-4 font-bold'>{market.name}</h2> */}
                {/* <div className='flex justify-between items-center py-1 text-[12px] font-bold'>
                    Telefon:
                    <span className='text-[12px] text-black-900 font-bold'>
                        {market.phone1}
                    </span>
                </div> */}
                <div className='flex justify-between items-center py-[1px] text-[12px] font-bold'>
                    Sana:
                    <span className='text-[12px] text-black-900 font-bold'>
                        {new Date(product?.createdAt).toLocaleDateString()} {new Date(product?.createdAt).toLocaleTimeString()}
                        {/* <span className='ml-3 font-bold'>
                                {new Date(
                                    product?.createdAt
                                ).toLocaleTimeString()}
                            </span> */}
                    </span>
                </div>
                <div className='flex justify-between items-center py-[1px] text-[12px] font-bold'>
                    Mijoz:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {product?.client?.name ||
                            product?.packman?.name ||
                            ''}
                    </span>
                </div>
                {/* <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                    Sotuvchi:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {userInfo?.old_debtsusd} {userInfo?.lastname}
                    </span>
                </div> */}
                <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                    Eski qarz USD:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {roundUsd(product?.old_debtsusd)} USD
                    </span>
                </div>
                <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                    Eski qarz UZS:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {roundUsd(product?.old_debtsuzs)} UZS
                    </span>
                </div>
                {/* <div className='check-ul-li flex-col'>
                    <div className={'grow text-center'}>
                        <h2 className='check-text-style mb-5'>
                            Sotuv: <span className={'ml-2 font-bold'}>{product?.id}</span>
                        </h2>
                    </div>
                    <div className='check-ul-li justify-end'>
                        <p>
                            Sotuvchi:{' '}
                            <span className='check-ul-li-span font-bold'>
                                {userInfo?.firstname} {userInfo?.lastname}
                            </span>
                        </p>
                    </div>
                </div> */}
            </div>
            {selled?.length > 0 && (
                <div className='mt-[1px]'>
                    <h3 className='text-[14px] text-center text-black-900 mb-[1px] font-bold'>
                        SOTILGANLAR
                    </h3>
                    <div>
                        {map(selled, (item, index) => (
                            <div className=''>
                                <div className='text-left text-[12px] text-black-900 font-bold'>
                                    {index + 1}. {item?.product?.productdata?.name}
                                </div>
                                <div className='text-right text-[12px] text-black-900 font-bold'>
                                    {item?.pieces} * {item?.product?.isUsd ? item?.unitprice.toLocaleString('ru-Ru') : item?.unitpriceuzs.toLocaleString('ru-Ru')} = {item?.product?.isUsd ? item?.totalprice.toLocaleString('ru-Ru') : item?.totalpriceuzs.toLocaleString('ru-Ru')}{' '}{item?.product?.isUsd ? "USD" : "UZS"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {returned?.length > 0 && (
                <div className='mb-[-1px] mt-[-1px]'>
                    <h3 className='text-[14px] text-black-900 mb-[1px] font-bold'>
                        Qaytarilganlar jami :
                    </h3>
                    <div>
                        {map(returned, (item, index) => (
                            <div className=''>
                                <div className='text-left text-[12px] text-black-900 font-bold'>
                                    {index + 1}. {item?.product?.productdata?.name}
                                </div>
                                <div className='text-right text-[12px] text-black-900 font-bold'>
                                    {item?.pieces} * {item?.product?.isUsd ? item?.unitprice.toLocaleString('ru-Ru') : item?.unitpriceuzs.toLocaleString('ru-Ru')} = {item?.product?.isUsd ? item?.totalprice.toLocaleString('ru-Ru') : item?.totalpriceuzs.toLocaleString('ru-Ru')}{' '}{item?.product?.isUsd ? "USD" : "UZS"}
                                </div>
                            </div>
                        ))}
                    </div>
                    {[...returned].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0) > 0 && <div className='text-black-900  check-ul-li-foot mt-4'>
                        Jami UZS:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {[...selled].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)}{' '}
                            UZS
                        </span>
                    </div>}
                    {[...returned].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0) > 0 && <div className='text-black-900  check-ul-li-foot mt-4'>
                        Jami USD:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {[...selled].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)}{' '}
                            USD
                        </span>
                    </div>}
                </div>
            )}
            {[...selled].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0) > 0 && <div className='flex justify-between items-center mb-[-1px] text-black-900 text-[14px] font-bold border-none'>
                Jami UZS:{' '}
                <span style={{ fontWeight: "bolder" }} className='text-right text-black-900 text-[12px] font-bold'>
                    {[...selled].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)}{' '}
                    UZS
                </span>
            </div>}
            {[...selled].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0) > 0 && <div className='flex justify-between items-center mb-[-1px] text-black-900 text-[14px] font-bold mt-[-1px] border-none '>
                Jami USD:{' '}
                <span style={{ fontWeight: "bolder" }} className='text-right text-black-900 text-[12px] font-bold'>
                    {[...selled].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)}{' '}
                    USD
                </span>
            </div>}
            {product.payments && [...product.payments].reduce((prev, el) => prev + (el?.paymentuzs || 0), 0) > 0 && <div className='flex justify-between items-center mb-[-1px] text-black-900 text-[14px] font-bold mt-[-1px] border-none'>
                {' '}
                To'langan:{' '}
                <span className='text-black-900 text-right text-[12px] font-bold'>
                    {selledPayments.reduce((prev, el) => prev + (el?.paymentuzs || 0), 0)}{' '}
                    UZS
                </span>
            </div>}
            {product.payments && [...product.payments].reduce((prev, el) => prev + (el?.usdpayment || 0), 0) > 0 && <div className='flex justify-between items-center mb-[-1px] text-black-900 text-[14px] font-bold mt-[-1px] border-none'>
                {' '}
                To'langan:{' '}
                <span className='text-black-900 text-right text-[12px] font-bold'>
                    {selledPayments.reduce((prev, el) => prev + (el?.usdpayment || 0), 0)}{' '}
                    USD
                </span>
            </div>}
            <div className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                {' '}
                Qarz:{' '}
                <span className='text-black-900 text-right text-[12px] font-bold'>
                    {/* {
                        (product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                        (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0))
                    } UZS */}
                    {
                        ((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                            (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)) +
                            (
                                ((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                                    (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0))) < 0 &&
                                UsdToUzs((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                                    (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0)), currency) || 0
                            )) > 0 && ((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                                (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)) +
                                (
                                    ((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                                        (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0))) < 0 &&
                                    UsdToUzs((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                                        (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0)), currency) || 0
                                )) || 0
                    } UZS
                </span>
            </div>
            <div className='flex justify-between items-center mb-[1px] mt-[1px] text-black-900 text-[14px] font-bold border-none'>
                {' '}
                Qarz:{' '}
                <span className='text-black-900 text-[12px] text-right font-bold'>
                    {/* {
                        (product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                        (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0))
                    } USD */}
                    {
                            roundUsd(((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                            (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0)) +
                            (
                                ((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                                (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0))) < 0 &&
                                UzsToUsd((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                                (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)), currency) || 0
                            )) > 0 && ((product?.products && product?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)) -
                            (product?.payments && product?.payments.reduce((prev, el) => prev + (el.usdpayment || 0), 0)) +
                            (
                                ((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                                (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0))) < 0 &&
                                UzsToUsd((product?.products && product?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)) -
                                (product?.payments && product?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)), currency) || 0
                            )) || 0)
                        } USD
                </span>
            </div>
            {product?.alldebtsusd && <div className='flex justify-between items-center mb-[1px] mt-[1px] text-black-900 text-[14px] font-bold border-none'>
                {' '}
                Umumiy qarz USD:{' '}
                <span className='text-black-900 text-[12px] text-right font-bold'>
                    {product?.alldebtsusd < 0 ? 0 : roundUsd(product?.alldebtsusd) || 0}{' '} USD
                </span>
            </div> || " "}
            {product?.alldebtsuzs && <div className='flex justify-between items-center mb-[1px] mt-[1px] text-black-900 text-[14px] font-bold border-none'>
                {' '}
                Umumiy qarz UZS:{' '}
                <span className='text-black-900 text-[12px] text-right font-bold'>
                    {product?.alldebtsuzs < 0 ? 0 : roundUzs(product?.alldebtsuzs) || 0}{' '} UZS
                </span>
            </div> || " "}
        </div>
    )
})