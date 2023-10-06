import {uniqueId, map} from 'lodash'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { roundUsd, UsdToUzs, UzsToUsd } from '../../../App/globalFunctions'
import TableBtn from '../../Buttons/TableBtn'

export const DebtsTableRow = ({data, Pay, Print, Edit}) => {
    const { currency } = useSelector((state) => state.currency)
    const [isEditComment, setIsEditComment] = useState(null)

    return (
        <>
            {map(data, (debt, index) => (
                <tr className='tr' key={uniqueId('debt')}>
                    <td className='text-left td'>{1 + index}</td>
                    <td className='text-right td'>
                        {new Date(debt.createdAt).toLocaleDateString()}
                    </td>
                    <td className='text-right td'>{debt.id}</td>
                    <td className='text-left td'>
                        {debt.client && debt.client.name}
                    </td>
                    <td
                        onMouseOver={() => setIsEditComment(debt._id)}
                        onMouseOut={() => setIsEditComment(null)}
                        className={`text-left td relative hover:bg-black-200 transition duration-300 ease-in-out`}
                    >
                        {debt.comment}
                        {isEditComment === debt._id && (
                            <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <TableBtn
                                    type={'edit'}
                                    bgcolor={'bg-warning-500'}
                                    onClick={() =>
                                        Edit(debt.comment, debt.debtid)
                                    }
                                />
                            </span>
                        )}
                    </td>
                    <td className='text-right td font-medium'>
                        {/* {debt?.debtusd || 0} USD */}
                        {
                            roundUsd(debt?.debtusd || 0)
                        } USD
                    </td>
                    <td className='text-right td py-[0.625rem] font-medium'>
                        {/* {debt?.debtuzs || 0} UZS */}
                        {
                            debt?.debtuzs || 0
                        } UZS
                    </td>
                    <td className='td border-r-0 py-[6px]'>
                        <div className='flex justify-center items-center gap-[0.625rem]'>
                            <TableBtn
                                type={'print'}
                                bgcolor={'bg-primary-800'}
                                onClick={() => Print(debt.saleconnector)}
                            />
                            <TableBtn
                                type={'pay'}
                                bgcolor={'bg-success-500'}
                                onClick={() => Pay(debt)}
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
