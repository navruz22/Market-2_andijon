import React, { forwardRef } from 'react'
import { uniqueId, map } from 'lodash'
import { useSelector } from 'react-redux'
import { roundUsd, roundUzs } from '../../../App/globalFunctions'

export const SmallCheck2 = forwardRef((props, ref) => {
    const {
        product
    } = props
    const { products } = product
    const { market } = useSelector((state) => state.login)
    const { currencyType } = useSelector((state) => state.currency)
    const calculateDebt = (total, payment, discount = 0) => {
        return (total - payment - discount).toLocaleString('ru-Ru')
    }
    console.log(market);
    return (
        <div ref={ref} className={'bg-white-900 p-4 rounded-md w-[7.5cm]'}>
            <div className='flex pb-2 flex-col text-center justify-center border-b-[0.8px] border-black-700'>
                {/* <h2 className='text-[16px] mb-4 font-bold'>{market.name}</h2> */}
                <div className='flex justify-between items-center py-1 text-[12px] font-bold'>
                    Telefon:
                    <span className='text-[12px] text-black-900 font-bold'>
                        {market.phone1}
                    </span>
                </div>
                <div className='flex justify-between items-center py-1 text-[12px] font-bold'>
                    Sana:
                    <span className='text-[12px] text-black-900 font-bold'>
                        {new Date(product?.createdAt).toLocaleDateString()}
                        {/* <span className='ml-3 font-bold'>
                                {new Date(
                                    product?.createdAt
                                ).toLocaleTimeString()}
                            </span> */}
                    </span>
                </div>
                <div className='flex justify-between items-center py-1 text-[12px] font-bold'>
                    Mijoz:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {product?.client?.name ||
                            product?.packman?.name ||
                            ''}
                    </span>
                </div>
                <div className={'flex justify-between items-center py-1 text-[12px] font-bold'}>
                    Sotuvchi:{' '}
                    <span className='text-[12px] text-black-900 font-bold'>
                        {product?.user?.firstname}{' '}
                        {product?.user?.lastname}
                    </span>
                </div>
            </div>
            {product?.products.length > 0 && (
                <div className='mt-5'>
                    <h3 className='text-[14px] text-black-900 mb-5 font-bold'>
                        Sotilganlar :
                    </h3>
                    <div>
                        {map(product?.products, (item, index) => (
                            <div className=''>
                                <div className='text-left text-[12px] text-black-900 font-bold'>
                                    {index + 1}. {item?.product?.productdata?.name}
                                </div>
                                <div className='text-right text-[12px] text-black-900 font-bold'>
                                    {item?.pieces} * {item?.product?.isUsd ? item?.unitprice.toLocaleString('ru-Ru') : item?.unitpriceuzs.toLocaleString('ru-Ru')} = {item?.product?.isUsd ? item?.totalprice.toLocaleString('ru-Ru') : item?.totalpriceuzs.toLocaleString('ru-Ru')}{' '} {item?.product?.isUsd ? "USD" : "UZS"}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
            <div className='border-t-[0.8px] border-black-700 w-full mt-4 mb-4 text-left'>
                {[...products].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0) > 0 && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    Jami UZS:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {[...products].reduce((prev, el) => prev + (!el?.product?.isUsd && el?.totalpriceuzs || 0), 0)}{' '}
                        UZS
                    </span>
                </h3>}
                {[...products].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0) > 0 && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    Jami USD:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {[...products].reduce((prev, el) => prev + (el?.product?.isUsd && el?.totalprice || 0), 0)}{' '}
                        USD
                    </span>
                </h3>}
                {product?.payment?.paymentuzs && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    To'langan UZS:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.payment?.paymentuzs.toLocaleString('ru-Ru')}{' '}
                        UZS
                    </span>
                </h3>}
                {product?.payment?.usdpayment && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    To'langan USD:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.payment?.usdpayment && product?.payment?.usdpayment || 0}{' '}
                        USD
                    </span>
                </h3>}
                {product?.discount?.discountuzs && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    Chegirma UZS:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.discount?.discountuzs && roundUzs(product?.discount?.discountuzs) || 0}{' '}
                        UZS
                    </span>
                </h3>}
                {product?.discount?.discount > 0 && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    Chegirma USD:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.discount?.discount && roundUsd(product?.discount?.discount) || 0}{' '}
                        USD
                    </span>
                </h3>}
                {product?.debt?.debtuzs && product?.debt?.debtuzs && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    Qarz UZS:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.debt?.debtuzs || 0} UZS
                    </span>
                </h3>}
                {product?.debt && product?.debt?.debt && <h3 style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold pt-4'>
                    {' '}
                    Qarz USD:{' '}
                    <span style={{ fontWeight: "bolder" }} className='text-black-900 text-[12px] font-bold'>
                        {product?.debt?.debt || 0}{' '} USD
                    </span>
                </h3>}

            </div>
        </div>
    )
})