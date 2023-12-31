import React, { forwardRef } from 'react'
import { uniqueId, map } from 'lodash'
import { useSelector } from 'react-redux'
import { roundUsd, roundUzs, UsdToUzs, UzsToUsd } from '../../App/globalFunctions'

export const SaleCheckAll = forwardRef((props, ref) => {
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
    console.log(selled);
    const { market } = useSelector((state) => state.login)
    const { currencyType, currency} = useSelector((state) => state.currency)
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

    const calculateAllPaymentsUsd = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    (pr.usdpayment && pr.usdpayment || 0)
                )
            }, 0)
            : 0
    }

    const calculateDebt = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    (pr?.debt?.debtType === 'sum' ? pr?.debtuzs : 0)
                )
            }, 0)
            : 0
    }

    const calculateDebtUsd = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                return (
                    acc +
                    (pr?.debt?.debtType === 'dollar' ? pr?.debt?.debt : 0)
                )
            }, 0)
            : 0
    }

    console.log(returned);

    return (
        <div ref={ref} className={'bg-white-900 p-4 rounded-md'}>
            <div className='flex pb-2 justify-between border-b-[0.8px] border-black-700'>
                <ul className='w-[35%]'>
                    <li className='check-ul-li'>
                        Do'kon:
                        <span className='check-ul-li-span font-bold'>{market.name}</span>
                    </li>
                    <li className='check-ul-li'>
                        Telefon:
                        <span className='check-ul-li-span font-bold'>
                            {market.phone1}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Manzil:
                        <span className='check-ul-li-span font-bold' >
                            {market?.address}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Sana:
                        <span className='check-ul-li-span'>
                            {new Date(product?.createdAt).toLocaleDateString()}{' '}
                            <span className='ml-3 font-bold'>
                                {new Date(
                                    product?.createdAt
                                ).toLocaleTimeString()}
                            </span>
                        </span>
                    </li>
                    <li className='check-ul-li font-bold'>
                        Mijoz:{' '}
                        <span className='check-ul-li-span font-bold'>
                            {product?.client?.name ||
                                product?.packman?.name ||
                                ''}
                        </span>
                    </li>
                </ul>
                <div>
                    <img className='w-[200px]' src={market?.image} alt="logo" />
                </div>
                <div className='check-ul-li flex-col'>
                    <div className={'grow text-center'}>
                        <h2 className='check-text-style mb-5'>
                            Sotuv: <span className={'ml-2 font-bold'}>{product?.id}</span>
                        </h2>
                    </div>
                    {/* <div className='check-ul-li justify-end'>
                        <p>
                            Sotuvchi:{' '}
                            <span className='check-ul-li-span font-bold'>
                                {userInfo?.firstname} {userInfo?.lastname}
                            </span>
                        </p>
                    </div> */}
                </div>
            </div>
            {selled?.length > 0 && (
                <div className='mt-5'>
                    <h3 className='text-[1.3rem] text-black-900 mb-5 font-bold'>
                        Sotilganlar :
                    </h3>
                    <table className='border-collapse border border-slate-400 w-full'>
                        <thead>
                            <tr>
                                <td className='check-table-rtr'>№</td>
                                <td className='check-table-rtr'>Sana</td>
                                <td className='check-table-rtr'>Vaqti</td>
                                <td className='check-table-rtr'>Maxsulot</td>
                                <td className='check-table-rtr'>Soni</td>
                                {selled.some(el => el.isPackcount) && <td className='check-table-rtr'>To'plam</td>}
                                <td className='check-table-rtr'>Narxi(dona)</td>
                                <td className='check-table-rtr'>Jami</td>
                                <td className='check-table-rtr'>Sotuvchi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {map([...selled].sort((a, b) => Number(a?.product?.category?.code) - Number(b?.product?.category?.code)), (item, index) => {
                                return (
                                    <tr key={uniqueId('selled-row')}>
                                        <td className='p-1 border text-center text-[0.875rem] font-bold'>
                                            {index + 1}
                                        </td>
                                        <td className='check-table-body'>
                                            {new Date(
                                                item?.createdAt
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className='check-table-body text-center'>
                                            {new Date(
                                                item?.createdAt
                                            ).toLocaleTimeString()}
                                        </td>
                                        <td className='check-table-body text-start'>
                                            {item?.product?.productdata?.name}
                                        </td>
                                        <td className='check-table-body'>
                                            {item?.pieces}
                                        </td>
                                        {selled.some(el => el.isPackcount) && <td className='check-table-body'>
                                            {item?.packcountpieces === 0 ? "" : item?.packcountpieces}
                                        </td>}
                                        <td className='check-table-body'>
                                            {item?.product?.isUsd
                                                ? item?.unitprice
                                                : item?.unitpriceuzs}{' '}
                                            {item?.product?.isUsd ? "USD" : "UZS"}
                                        </td>
                                        <td className='check-table-body'>
                                            {item?.product?.isUsd
                                                ? item?.totalprice
                                                : item?.totalpriceuzs}{' '}
                                            {item?.product?.isUsd ? "USD" : "UZS"}
                                        </td>
                                        <td className='check-table-body'>
                                            {item?.user
                                                ? item.user.firstname +
                                                ' ' +
                                                item.user.lastname[0]
                                                : ''}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            {returned?.length > 0 && (
                <>
                    <div className='mt-5'>
                        <h3 className='text-[1.3rem] text-black-700 mb-5 font-bold'>
                            Qaytarilganlar :
                        </h3>
                        <table className='border-collapse border border-slate-400 w-full'>
                            <thead>
                                <tr>
                                    <td className='check-table-rtr'>№</td>
                                    <td className='check-table-rtr'>Sana</td>
                                    <td className='check-table-rtr'>Kodi</td>
                                    <td className='check-table-rtr'>
                                        Maxsulot
                                    </td>
                                    <td className='check-table-rtr'>Soni</td>
                                    <td className='check-table-rtr'>
                                        Narxi(dona)
                                    </td>
                                    <td className='check-table-rtr'>Jami</td>
                                </tr>
                            </thead>
                            <tbody>
                                {map(returned, (item, index) => {
                                    return (
                                        <tr key={uniqueId('selled-row')}>
                                            <td className='p-1 border text-center text-[0.875rem] font-bold'>
                                                {index + 1}
                                            </td>
                                            <td className='check-table-body'>
                                                {new Date(
                                                    item?.createdAt
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className='check-table-body'>
                                                {
                                                    item?.product?.productdata
                                                        ?.code
                                                }
                                            </td>
                                            <td className='check-table-body'>
                                                {
                                                    item?.product?.productdata
                                                        ?.name
                                                }
                                            </td>
                                            <td className='check-table-body'>
                                                {item?.pieces}
                                            </td>
                                            <td className='check-table-body'>
                                                {item.product.isUsd
                                                    ? item?.unitprice.toLocaleString(
                                                        'ru-Ru'
                                                    )
                                                    : item?.unitpriceuzs.toLocaleString(
                                                        'ru-Ru'
                                                    )}{' '}
                                                {item.product.isUsd ? "USD" : "UZS"}
                                            </td>
                                            <td className='check-table-body'>
                                                {item.product.isUsd
                                                    ? item?.totalprice.toLocaleString(
                                                        'ru-Ru'
                                                    )
                                                    : item?.totalpriceuzs.toLocaleString(
                                                        'ru-Ru'
                                                    )}{' '}
                                                {item.product.isUsd ? "USD" : "UZS"}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='border-t-[0.8px] border-black-700 w-full mt-4 mb-4 text-end'>
                        <h3 className='text-black-900 text-[1.1rem] text-black-700 font-bold pt-4'>
                            Qaytarilganlar jami :{' '}
                            <span className='text-black-900 font-bold'>
                                {returned.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0)} USD
                            </span> {'  '}
                            <span className='text-black-900 font-bold'>
                                {returned.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0)} UZS
                            </span>
                        </h3>
                    </div>
                </>
            )}
            <div className='border-t-[0.8px] border-black-700 w-full mt-[1rem]'></div>
            <ul>
                <li className='check-ul-li-foot border-t-0 text-[#000] text-[18px] font-bold'>
                    Jami:{' '}
                    <div className='flex gap-2'>
                        <span className='font-bold text-[#000]'>
                            {[...selled].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)} USD <br />
                        </span>
                        <span className='font-bold text-[#000]'>
                            {[...selled].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)} UZS
                        </span>
                    </div>
                </li>
                {/* <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    Chegirma:{' '}
                    <span className='text-black-900 font-bold'>
                        {(
                            calculateAllDiscounts(selledDiscounts) +
                            calculateAllDiscounts(returnedDiscounts)
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li> */}
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    To'langan:{' '}
                    <span className='text-black-900 font-bold'>
                        {(
                            calculateAllPayments(selledPayments) +
                            calculateAllPayments(returnedPayments)
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    To'langan USD:{' '}
                    <span className='text-black-900 font-bold'>
                        {(
                            calculateAllPaymentsUsd(selledPayments) +
                            calculateAllPaymentsUsd(returnedPayments)
                        ).toLocaleString('ru-Ru')}{' '}
                        USD
                    </span>
                </li>
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    Chegirma UZS:{' '}
                    <span className='text-black-900 font-bold'>
                        {product?.discounts && [...product.discounts].reduce((prev, discount) => prev + (discount.discountuzs && discount.discountuzs || 0), 0)} UZS
                    </span>
                </li>
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    Chegirma USD:{' '}
                    <span className='text-black-900 font-bold'>
                        {product?.discounts && [...product.discounts].reduce((prev, discount) => prev + (discount.discount && discount.discount || 0), 0)} USD
                    </span>
                </li>
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    Qarz UZS:{' '}
                    <span className='text-black-900 font-bold'>
                        {roundUzs(product?.debtuzs)} UZS
                    </span>
                </li>
                <li className='text-black-900 check-ul-li-foot'>
                    {' '}
                    Qarz USD:{' '}
                    <span className='text-black-900 font-bold'>
                        {roundUsd(product?.debtusd)} USD
                    </span>
                </li>
            </ul>
        </div>
    )
})
