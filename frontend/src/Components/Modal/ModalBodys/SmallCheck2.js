import React, { forwardRef } from 'react'
import { uniqueId, map } from 'lodash'
import { useSelector } from 'react-redux'
import { roundUsd, roundUzs } from '../../../App/globalFunctions'

export const SmallCheck2 = forwardRef((props, ref) => {
    const {
        product
    } = props
    // const { products } = product
    const { market } = useSelector((state) => state.login)
    const calculateDebt = (total, payment, discount = 0) => {
        return (total - payment - discount).toLocaleString('ru-Ru')
    }
    return (
        <>
            <div ref={ref} className={'bg-white-900 p-4 rounded-md w-[7.5cm]'}>
                <div className='flex pb-[1px] flex-col text-center justify-center border-b-[0.8px] border-black-700'>
                    {/* <h2 className='text-[16px] mb-4 font-bold'>{market.name}</h2> */}
                    <div className='flex justify-between items-center py-[1px] text-[12px] font-bold'>
                        Telefon:
                        <span className='text-[12px] text-black-900 font-bold'>
                            {market.phone1}
                        </span>
                    </div>
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
                    {!product?.cashuzs && <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                        Sotuvchi:{' '}
                        <span className='text-[12px] text-black-900 font-bold'>
                            {product?.user?.firstname}{' '}
                            {product?.user?.lastname}
                        </span>
                    </div>}
                    {product?.old_debtsusd && <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                        Eski qarz USD:{' '}
                        <span className='text-[12px] text-black-900 font-bold'>
                            {roundUsd(product?.old_debtsusd)} USD
                        </span>
                    </div>}
                    {product?.old_debtsuzs && <div className={'flex justify-between items-center py-[1px] text-[12px] font-bold'}>
                        Eski qarz UZS:{' '}
                        <span className='text-[12px] text-black-900 font-bold'>
                            {roundUsd(product?.old_debtsuzs)} UZS
                        </span>
                    </div>}
                </div>
                {product?.products && product?.products.length > 0 && (
                    <div className='mt-[1px] border-b-[0.8px] border-black-700 pb-[1px]'>
                        {map(product?.products, (item, index) => (
                            <div className=''>

                                <div className='text-left text-[12px] text-black-900 font-bold'>
                                    {index + 1}. {item?.product?.productdata?.name}
                                </div>
                                <div className='text-right text-[12px] text-black-900 font-bold'>
                                    {item.isPackcount && <span className=' text-[12px] text-[#fff] px-1 font-bold bg-[#000]'>
                                        {item?.packcountpieces}
                                    </span>} {item?.pieces} * {item?.product?.isUsd ? item?.unitprice.toLocaleString('ru-Ru') : item?.unitpriceuzs.toLocaleString('ru-Ru')} = {item?.product?.isUsd ? item?.totalprice.toLocaleString('ru-Ru') : item?.totalpriceuzs.toLocaleString('ru-Ru')}{' '}{item?.product?.isUsd ? "USD" : "UZS"}
                                </div>
                            </div>
                        ))}
                    </div>

                )}
                <div className='w-full mt-1 text-left'>
                    {product?.products && product?.products.reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0) > 0 && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        Jami UZS:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {product?.products && product?.products.reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)}{' '}
                            UZS
                        </span>
                    </h3>}
                    {product?.products && product?.products.reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0) > 0 && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        Jami USD:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {product?.products && product?.products.reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)}{' '}
                            USD
                        </span>
                    </h3>}
                    {(product?.payment?.paymentuzs || (product?.cashuzs + product?.carduzs + product?.transferuzs)) && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        To'langan UZS:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {(product?.payment?.paymentuzs || (product?.cashuzs + product?.carduzs + product?.transferuzs) || 0)}{' '}
                            UZS
                        </span>
                    </h3>}
                    {(product?.payment?.usdpayment || product?.usdpayment) && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        To'langan USD:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {(roundUsd(product?.payment?.usdpayment) || roundUsd(product?.usdpayment) || 0)}{' '}
                            USD
                        </span>
                    </h3>}
                    {product?.debt?.debtuzs && product?.debt?.debtuzs && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        Qarz UZS:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {product?.debt?.debtuzs || 0} UZS
                        </span>
                    </h3>}
                    {product?.debt && product?.debt?.debt && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        Qarz USD:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {roundUsd(product?.debt?.debt) || 0}{' '} USD
                        </span>
                    </h3>}
                    {product?.alldebtsusd && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        Umumiy qarz USD:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {product?.alldebtsusd < 0 ? 0 : roundUsd(product?.alldebtsusd) || 0}{' '} USD
                        </span>
                    </h3> || ""}
                    {product?.alldebtsuzs && <h3 style={{ fontWeight: "bolder" }} className='flex justify-between items-center mb-[1px] mt-[1px] text-[14px] font-bold text-black-900 border-none'>
                        {' '}
                        Umumiy qarz UZS:{' '}
                        <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                            {product?.alldebtsuzs || 0}{' '} UZS
                        </span>
                    </h3> || ""}

                </div>
            </div>
            {/* <div ref={ref} className={'bg-white-900 p-4 rounded-md w-[7.5cm]'}>
                <div className='flex pb-[1px] flex-col text-center justify-center border-b-[0.8px] border-black-700'>
                    <div className='flex justify-between items-center py-[1px] text-[12px] font-bold'>
                        Sana:
                        <span className='text-[12px] text-black-900 font-bold'>
                            {new Date(product?.createdAt).toLocaleDateString()} {new Date(product?.createdAt).toLocaleTimeString()}
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
                                        {item.isPackcount && <span className=' text-[12px] text-[#fff] px-1 font-bold bg-[#000]'>
                                            {item?.packcountpieces}
                                        </span>} {item?.pieces} * {item?.product?.isUsd ? item?.unitprice.toLocaleString('ru-Ru') : item?.unitpriceuzs.toLocaleString('ru-Ru')} = {item?.product?.isUsd ? item?.totalprice.toLocaleString('ru-Ru') : item?.totalpriceuzs.toLocaleString('ru-Ru')}{' '}{item?.product?.isUsd ? "USD" : "UZS"}
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
                        {roundUzs(product?.debtuzs)} UZS
                    </span>
                </div>
                <div className='flex justify-between items-center mb-[1px] mt-[1px] text-black-900 text-[14px] font-bold border-none'>
                    {' '}
                    Qarz:{' '}
                    <span className='text-black-900 text-[12px] text-right font-bold'>
                        {roundUsd(product?.debtusd)} USD
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
            </div> */}
        </>
    )
})