import { uniqueId, map } from 'lodash'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { roundUsd, roundUzs } from '../../../App/globalFunctions'
import TableBtn from '../../Buttons/TableBtn'

export const PaymentsSellingTable = ({
    data,
    currentPage,
    countPage,
    currency,
    Print,
    type,
    sellers
}) => {

    const payDebt = data.reduce((prev, el) => {
        if (!el.totalprice && el.usdpayment) {
            prev += el.usdpayment
        }
        return prev
    }, 0)
    const payDebtUzs = data.reduce((prev, el) => {
        if (!el.totalprice) {
            prev += el.cashuzs + el.carduzs + el.transferuzs
        }
        return prev
    }, 0)
    
    const navigate = useNavigate()
    const linkToSale = (saleconnector, returnProducts) => {
        navigate(`${sellers ? '/' : '/sotuv/sotish'}`, {
            replace: true,
            state: { saleconnector, returnProducts },
        })
    }


    return (
        <>
            {map(data, (sale, index) => (
                <tr className='tr' key={uniqueId('sale')}>
                    <td className='text-left td'>
                        {currentPage * countPage + 1 + index}
                    </td>
                    <td className='text-right td'>
                        {new Date(sale.createdAt).toLocaleDateString()}
                    </td>
                    <td className='text-right td'>{sale.id}</td>
                    <td className='text-right td'>{sale?.client?.name}</td>
                    <td className='text-right td py-[0.625rem] font-bold'>
                        {sale.cashuzs + sale.carduzs + sale.transferuzs} UZS
                    </td>
                    <td className='text-right td py-[0.625rem] font-bold'>
                        {sale?.usdpayment} USD
                    </td>
                    <td className='text-success-500 text-right td py-[0.625rem] font-bold'>
                        {!sale.totalprice && sale?.usdpayment} USD
                    </td>
                    <td className='text-success-500 text-right td py-[0.625rem] font-bold'>
                        {!sale.totalprice && (sale.cashuzs + sale.carduzs + sale.transferuzs)} UZS
                    </td>
                    {/* <td className='text-right td py-[0.625rem] font-bold'>
                        {sale?.usdpayment < 0 ? sale?.usdpayment : sale.cash < 0 || sale.card < 0 || sale.transfer < 0 ? (<>
                            {currency === 'USD' ? (sale.cash + sale.card + sale.transfer) : (sale.cashuzs + sale.carduzs + sale.transferuzs)}
                        </>) : 0} {' '}
                        {currency}
                    </td> */}
                    <td className='py-[0.375rem] td border-r-0'>
                        <div className='flex items-center justify-center gap-[0.625rem]'>
                            <TableBtn
                                type={'print'}
                                bgcolor={'bg-primary-800'}
                                onClick={() => Print(sale.totalprice ? sale.saleconnector : sale)}
                            />
                            <TableBtn
                                    type={'return'}
                                    bgcolor={'bg-error-500'}
                                    onClick={() =>
                                        linkToSale(
                                            sale.saleconnector,
                                            true
                                        )
                                    }
                                />
                        </div>
                    </td>
                </tr>
            ))}
            <tr>
                <td colSpan={8}>
                </td>
                <td className='text-right p-2 font-bold text-success-500'>
                    {roundUzs(payDebtUzs).toLocaleString('ru-RU')} UZS <br/>
                    {roundUsd(payDebt).toLocaleString('ru-RU')} USD
                </td>
            </tr>
        </>
    )
}
