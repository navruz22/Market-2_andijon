import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { uniqueId, map } from 'lodash'
export const SaleCheck = forwardRef((props, ref) => {
    const { product } = props
    const { products } = product
    const { market } = useSelector((state) => state.login)
    const { currencyType } = useSelector((state) => state.currency)
    const calculateDebt = (total, payment, discount = 0) => {
        return (total - payment - discount).toLocaleString('ru-Ru')
    }
    console.log(props);
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
                        <span className='text-black check-ul-li-span '>
                            {market.phone1}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Manzil:
                        <span className='check-ul-li-span font-bold'>
                            {market?.address}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Sana:
                        <span className='check-ul-li-span font-bold'>
                            {new Date(product?.createdAt).toLocaleDateString()}
                        </span>
                    </li>
                    <li className='check-ul-li'>
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
                            Sotuv:{' '}
                            <span className={'ml-2 font-bold'}>
                                {product?.saleconnector.id}
                            </span>
                        </h2>
                        <h2 className='check-text-style font-bold'>
                            Chek: {product?.id}
                        </h2>
                    </div>
                    <div className='check-ul-li justify-end font-bold'>
                        <p>
                            Sotuvchi:{' '}
                            <span className='check-ul-li-span font-bold'>
                                {product?.user?.firstname}{' '}
                                {product?.user?.lastname}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <table className='border-collapse border border-slate-400 w-full break-inside-auto'>
                    <thead>
                        <tr className={'break-inside-avoid break-after-auto'}>
                            <td className='check-table-rtr'>№</td>
                            <td className='check-table-rtr'>Kodi</td>
                            <td className='check-table-rtr'>Maxsulot</td>
                            <td className='check-table-rtr'>Soni</td>
                            {product?.products.some(el => el.isPackcount) && <td className='check-table-rtr'>To'plam</td>}
                            <td className='check-table-rtr'>Narxi (dona)</td>
                            <td className='check-table-rtr'>Jami</td>
                        </tr>
                    </thead>
                    <tbody>
                        {map([...products].sort(
                            (a, b) =>
                                a.product?.category?.code.localeCompare(
                                    b.product?.category?.code
                                ) ||
                                a.product?.productdata?.code -
                                b.product?.productdata?.code
                        ), (item, index) => {
                            return (
                                <tr key={uniqueId('saleCheck')}>
                                    <td className='p-1 border text-center text-[0.875rem] font-bold'>
                                        {index + 1}
                                    </td>
                                    <td className='check-table-body text-center'>
                                        {item?.product?.category?.code} {item?.product?.productdata?.code}
                                    </td>
                                    <td className='check-table-body text-start'>
                                        {item?.product?.productdata?.name}
                                    </td>
                                    <td className='check-table-body'>
                                        {item?.pieces}
                                    </td>
                                    {product?.products.some(el => el.isPackcount) && <td className='check-table-body'>
                                        {item?.isPackcount && item?.packcountpieces > 0 ? item?.packcountpieces : ""}
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
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='border-t-[0.8px] border-black-700 w-full mt-[1rem]'></div>
            <ul>
                <li className='check-ul-li-foot border-t-0 text-[#000] text-[18px] font-bold'>
                    Jami:{' '}
                    <div className='flex gap-2'>
                        <span className='font-bold text-[#000]'>
                            {[...products].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)} USD <br />
                        </span>
                        <span className='font-bold text-[#000]'>
                            {[...products].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)} UZS
                        </span>
                    </div>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    To'langan:{' '}
                    <span className='font-bold'>
                        {product?.payment?.paymentuzs}{' '} UZS
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    To'langan USD:{' '}
                    <span className='font-bold'>
                        {product?.payment?.usdpayment} USD
                    </span>
                </li>
                {product?.debt?.debtType === 'dollar' ?
                    <li className='check-ul-li-foot'>
                        {' '}
                        Qarz:{' '}
                        <span className='font-bold'>
                            {product?.debt?.debt.toLocaleString('ru-Ru')} USD
                        </span>
                    </li> :
                    <li className='check-ul-li-foot'>
                        {' '}
                        Qarz:{' '}
                        <span className='font-bold'>
                            {product?.debt?.debtuzs.toLocaleString('ru-Ru')}{' '} UZS
                        </span>
                    </li>
                }
            </ul>
        </div>
    )
})
