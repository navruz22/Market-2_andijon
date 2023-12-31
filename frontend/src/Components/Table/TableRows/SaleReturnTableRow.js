import React from 'react'
import TableInput from '../../Inputs/TableInput'
import {map} from 'lodash'
export const SaleReturnTableRow = ({
                                       data,
                                       changeHandler,
                                       currency,
                                       onKeyUp
                                   }) => {
    return (
        <>
            {map(data,(salereturn, index) => (
                <tr className='tr' key={salereturn._id}>
                    <td className='text-left td'>{index + 1}</td>
                    <td className='text-right td'>
                        {salereturn.productdata.code}
                    </td>
                    <td className='text-left td'>
                        {salereturn.productdata.name}
                    </td>
                    <td className='text-right td'>
                        {salereturn.product.pieces}
                    </td>
                    <td className='text-right td'>
                        {(salereturn.product.isUsd
                                ? salereturn.product.totalprice
                                : salereturn.product.totalpriceuzs
                        ).toLocaleString('ru-RU')}{' '}
                        {salereturn.product.isUsd ? "USD" : "UZS"}
                    </td>
                    <td className='text-right td py-[5px]'>
                        <TableInput
                            onKeyUp={onKeyUp}
                            onChange={(e) =>
                                changeHandler(
                                    e.target.value,
                                    salereturn._id,
                                    index
                                )
                            }
                            value={salereturn.pieces}
                            type={'number'}
                        />
                    </td>
                    <td className='text-right td'>
                        {salereturn.product.isUsd
                            ? salereturn.totalprice
                            : salereturn.totalpriceuzs}{' '}
                        {salereturn.product.isUsd ? "USD" : "UZS"}
                    </td>
                </tr>
            ))}
        </>
    )
}
