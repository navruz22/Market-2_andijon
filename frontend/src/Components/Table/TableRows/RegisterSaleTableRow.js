import React, { useEffect, useState } from 'react'
import TableBtn from '../../Buttons/TableBtn'
import TableInput from '../../Inputs/TableInput'
import { filter, map } from 'lodash'
import { IoAdd, IoEye, IoEyeOff, IoRemove } from 'react-icons/io5'
import { useSelector } from 'react-redux'

export const RegisterSaleTableRow = (
    {
        data,
        Delete,
        changeHandler,
        currency,
        increment,
        decrement,
        lowUnitpriceProducts,
        wholeSale,
        selectedFilial
    }) => {
    const { market } = useSelector((state) => state.login)
    const [showIncomingPrice, setShowIncomingPrice] = useState([])
    const changeShow = (i) => {
        const price = [...showIncomingPrice]
        price[i] = !price[i]
        setShowIncomingPrice([...price])
    }
    useEffect(() => {
        setShowIncomingPrice(map(data, () => false))
    }, [data])

    return (
        <>
            {map(data, (product, index) => (
                <tr className={`tr ${filter(lowUnitpriceProducts, id => id === product.product._id).length > 0 ? 'bg-warning-200' : ''}`}
                    key={'salerow-' + index + 1}>
                    <td className='text-left td'>{index + 1}</td>
                    <td className='text-right td'>{selectedFilial?.value === market._id ? product.total : product.filialProductsTotal}</td>
                    <td className='text-left td'>{product.product.name}</td>
                    <td className='text-right td'>
                        <span className={'flex gap-[0.6rem] items-center'}>
                            <button
                                className={'rounded-[4px] duration-100 bg-error-500 hover:bg-error-600 p-[0.2rem] text-base text-white-900 active:scale-95'}
                                onClick={() => decrement(product.product._id)}><IoRemove
                                    size={'0.875rem'} /></button>
                            <TableInput
                                value={product.pieces}
                                onChange={(e) =>
                                    changeHandler(
                                        product.product._id,
                                        e.target.value,
                                        'pieces'
                                    )
                                }
                                type={'number'}
                            />
                            <button
                                className={'rounded-[4px] duration-100 bg-success-500 hover:bg-success-600 p-[0.2rem] text-base text-white-900 active:scale-95'}
                                onClick={() => increment(product.product._id)}><IoAdd
                                    size={'0.875rem'} /></button>
                        </span>
                    </td>
                    <td className='text-right td'>
                        <TableInput
                            value={product.fromFilial}
                            onChange={(e) =>
                                changeHandler(
                                    product.product._id,
                                    e.target.value,
                                    'fromFilial'
                                )
                            }
                            type={'number'}
                        />
                    </td>
                    <td className='text-right td'>
                        <TableInput
                            value={
                                currency !== 'UZS'
                                    ? wholeSale ? product.tradeprice || product.unitprice : product.unitprice
                                    : wholeSale ? product.tradepriceuzs || product.unitpriceuzs : product.unitpriceuzs
                            }
                            onChange={(e) =>
                                changeHandler(
                                    product.product._id,
                                    e.target.value,
                                    'unitprice'
                                )
                            }
                            type={'number'}
                        />
                    </td>
                    <td className='text-right td'>
                        {currency !== 'UZS'
                            ? product.totalprice.toLocaleString('ru-Ru')
                            : product.totalpriceuzs.toLocaleString(
                                'ru-Ru'
                            )}{' '}
                        {currency}
                    </td>
                    <td className='td'>
                        <div className='flex items-center justify-center'>
                            <TableBtn
                                type={'delete'}
                                bgcolor={'bg-error-500'}
                                onClick={() => Delete(index)}
                            />
                        </div>
                    </td>
                    <td className='td border-r-0 text-success-500'>
                        <div className='flex justify-between'>
                            <button onClick={() => changeShow(index)}>
                                {showIncomingPrice[index] ? (
                                    <IoEye />
                                ) : (
                                    <IoEyeOff />
                                )}
                            </button>
                            <span className='min-w-fit'>
                                {showIncomingPrice[index]
                                    ? currency === 'UZS'
                                        ? product.incomingpriceuzs.toLocaleString(
                                            'ru-Ru'
                                        ) + ' UZS'
                                        : product.incomingprice.toLocaleString(
                                            'ru-Ru'
                                        ) + ' USD'
                                    : ''}
                            </span>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
