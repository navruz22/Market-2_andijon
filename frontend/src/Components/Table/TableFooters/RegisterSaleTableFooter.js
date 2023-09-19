import React from 'react'
import { reduce } from 'lodash'
import { roundUsd } from '../../../App/globalFunctions'

export const RegisterSaleTableFooter = ({ saleproducts, currency }) => {

    const totalprice = reduce(
        saleproducts,
        (summ, product) => summ + (product?.isUsd && product.totalprice || 0),
        0
    )

    const totalpriceuzs = reduce(
        saleproducts,
        (summ, product) => summ + (!product?.isUsd && product.totalpriceuzs || 0),
        0
    )
    return (
        <tr>
            <th colSpan={5} className='text-right py-2'>
                Jami:
            </th>
            <th colSpan={2} className="py-2">
                {totalpriceuzs.toLocaleString('ru-RU')}{' '} UZS <br/> <br/>
                {roundUsd(totalprice)}{' '} USD
            </th>
        </tr>
    )
}
