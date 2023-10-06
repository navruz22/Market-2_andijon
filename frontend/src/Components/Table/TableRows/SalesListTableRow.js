import React from 'react'
import TableBtn from '../../Buttons/TableBtn'
import { uniqueId, map } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'
import { roundUsd, UzsToUsd, UsdToUzs } from '../../../App/globalFunctions'
import { useSelector } from 'react-redux'

export const SalesListTableRow = ({
    data,
    currentPage,
    countPage,
    // currency,
    Print,
    sellers,
    addPlus,
    editComment
}) => {

    const { currency } = useSelector((state) => state.currency)

    const location = useLocation()

    const result = (prev, usd, uzs) => {
        return prev + uzs
    }
    const reduceEl = (arr, usd, uzs) => {
        return arr ? arr.reduce((prev, item) => {
            return result(prev, item[usd], item[uzs])
        }, 0) : 0
    }

    // const calculateDebt = (data) => {
    //     return data
    //         ? data.reduce((acc, pr) => {
    //             return (
    //                 acc +
    //                 (pr?.debt?.debtType === 'sum' ? pr?.debtuzs : 0)
    //             )
    //         }, 0)
    //         : 0
    // }

    // const calculateDebtUsd = (data) => {
    //     return data
    //         ? data.reduce((acc, pr) => {
    //             return (
    //                 acc +
    //                 (pr?.debt?.debtType === 'dollar' ? pr?.debt?.debt : 0)
    //             )
    //         }, 0)
    //         : 0
    // }

    const navigate = useNavigate()
    const linkToSale = (saleconnector, returnProducts) => {
        navigate(`${sellers ? '/' : '/sotuv/sotish'}`, {
            replace: true,
            state: { saleconnector, returnProducts },
        })
    }

    return (
        <>
            {data && data.length > 0 && map(data, (saleconnector, index) => (
                <tr className='tr' key={uniqueId('sales')}>
                    <td className='text-left td'>
                        {currentPage * countPage + 1 + index}
                    </td>
                    <td className='td '>
                        <div className='flex justify-between'>
                            <span>
                                {new Date(
                                    saleconnector.updatedAt
                                ).toLocaleDateString()}
                            </span>
                            <span>
                                {new Date(
                                    saleconnector.updatedAt
                                ).toLocaleTimeString()}{' '}
                            </span>
                        </div>
                    </td>
                    <td className='text-left td'>{saleconnector.id}</td>
                    <td className='text-left td'>
                        {saleconnector?.client?.name}
                        {/* {saleconnector?.client?.name ? (
                            <div className='flex justify-between items-center'>
                                <span> {saleconnector?.client?.name}</span>
                                <TableBtn
                                    type={'edit'}
                                    bgcolor={'bg-success-500'}
                                    onClick={() => addPlus(saleconnector._id)}
                                />
                            </div>
                        ) : (
                            <div className='flex justify-center items-center'>
                                <TableBtn
                                    type={'add'}
                                    bgcolor={'bg-success-500'}
                                    onClick={() => addPlus(saleconnector._id)}
                                />
                            </div>
                        )} */}
                    </td>
                    <td className='text-success-500 text-right td'>
                        {reduceEl(
                            saleconnector.products,
                            'totalprice',
                            'totalpriceuzs'
                        ).toLocaleString('ru-Ru')}{' '}
                        UZS
                    </td>
                    <td className='text-warning-500 text-right td'>
                        {saleconnector?.discounts && saleconnector.discounts.reduce((prev, el) => prev + (el.discountuzs && el.discountuzs || 0), 0)} UZS
                    </td>
                    <td className='text-warning-500 text-right td'>
                        {saleconnector?.discounts && saleconnector.discounts.reduce((prev, el) => prev + (el.discount && el.discount || 0), 0)} USD
                    </td>
                    {/* <td className='text-warning-500 text-right td'>
                        {reduceEl(
                            saleconnector.discounts,
                            'discount',
                            'discountuzs'
                        ).toLocaleString('ru-Ru')}{' '}
                        {currency}
                    </td> */}
                    <td className='text-error-500 text-right td'>
                        {
                            saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                            saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0) +
                            (
                                (saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                    saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0)) < 0 &&
                                UsdToUzs(saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                    saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0), currency) || 0
                            ) > 0 && saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                            saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0) +
                            (
                                (saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                    saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0)) < 0 &&
                                UsdToUzs(saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                    saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0), currency) || 0
                            ) || 0
                        } UZS
                    </td>
                    <td className='text-error-500 text-right td'>
                        {
                            roundUsd(saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0) +
                                (
                                    (saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                                        saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)) < 0 &&
                                    UzsToUsd(saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                                        saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0), currency) || 0
                                )) > 0 && roundUsd(saleconnector?.products.reduce((prev, el) => prev + (el.product.isUsd && el.totalprice || 0), 0) -
                                saleconnector?.payments.reduce((prev, el) => prev + (el.usdpayment && el.usdpayment || 0), 0) +
                                (
                                    (saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                                        saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0)) < 0 &&
                                    UzsToUsd(saleconnector?.products.reduce((prev, el) => prev + (!el.product.isUsd && el.totalpriceuzs || 0), 0) -
                                        saleconnector?.payments.reduce((prev, el) => prev + (el.paymentuzs || 0), 0), currency) || 0
                                )) || 0 
                        } USD
                    </td>
                    <td className='text-left td  '>
                        {saleconnector.dailyconnectors && saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1].comment ? (
                            <div className='flex justify-between items-center'>
                                <span>{saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1].comment}</span>
                                <TableBtn
                                    type={'edit'}
                                    bgcolor={'bg-success-500'}
                                    onClick={() => editComment(saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1], saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1].comment)}
                                />
                            </div>
                        ) : (
                            <div className='flex justify-center items-center'>
                                <TableBtn
                                    type={'add'}
                                    bgcolor={'bg-success-500'}
                                    onClick={() => editComment(saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1], saleconnector.dailyconnectors[saleconnector.dailyconnectors.length - 1].comment)}
                                />
                            </div>
                        )}

                    </td>

                    <td className='py-[0.375rem] td border-r-0'>
                        <div className='flex items-center justify-center gap-[0.625rem]'>
                            <TableBtn
                                type={'print'}
                                bgcolor={'bg-primary-800'}
                                onClick={() => Print(saleconnector)}
                            />
                            {!location.pathname.includes('/kassa/sale') && <>
                                {/* <TableBtn
                                    type={'add'}
                                    bgcolor={'bg-success-500'}
                                    onClick={() => linkToSale(saleconnector)}
                                /> */}
                                <TableBtn
                                    type={'return'}
                                    bgcolor={'bg-error-500'}
                                    onClick={() =>
                                        linkToSale(
                                            saleconnector.saleconnector,
                                            true
                                        )
                                    }
                                />
                            </>}
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
