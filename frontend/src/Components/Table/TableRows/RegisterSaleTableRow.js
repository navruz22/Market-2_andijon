import React, { useEffect, useState } from 'react'
import TableBtn from '../../Buttons/TableBtn'
import TableInput from '../../Inputs/TableInput'
import { filter, map } from 'lodash'
import { IoAdd, IoEye, IoEyeOff, IoRemove } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import SelectInput from '../../SelectInput/SelectInput'
import Select from 'react-select'
import Checkbox from '../../Checkbox/Checkbox'
import { useTranslation } from 'react-i18next'

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
    }) => {
    const {t} = useTranslation(['common'])
    const { filials } = useSelector((state) => state.registerSelling)

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
                    <td className='td w-[100px]'>
                        <Checkbox
                            id={`packcount-selling${index}`}
                            onChange={(e) => changeHandler(
                                index,
                                e.target.value,
                                'packcount'
                            )}
                            value={product?.isPackcount ? true : false}
                            label={t('Optom')}
                        />
                    </td>
                    <td className='text-right td font-bold'>{product?.isPackcount ? (product?.totalpackcount % 1 === 0 ? product?.totalpackcount.toFixed(0) : product?.totalpackcount.toFixed(2)) : product?.total}</td>
                    <td className='text-left td'>{product.product.name}</td>
                    <td className='text-right td'>
                        <span className={'flex gap-[0.6rem] items-center'}>
                            <TableInput
                                value={product?.isPackcount ? product?.packcountpieces : product.pieces}
                                onChange={(e) =>
                                    changeHandler(
                                        index,
                                        e.target.value,
                                        'pieces'
                                    )
                                }
                                type={'number'}
                            />
                        </span>
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
                                    index,
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
