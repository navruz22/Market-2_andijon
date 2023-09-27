import React from 'react'
import PaymentSelect from '../Payment/PaymentSelect/PaymentSelect.js'

export const DiscountInput = ({value, onChange, option, onSelect, type, label}) => {
    return (
        <div className='flex justify-between w-full items-center mb-[1rem]'>
            <div className='text-black-700 text-[0.875rem]'>{label}:</div>
            <PaymentSelect onChange={(e) => onChange(e, type)} onSelect={onSelect} value={value} option={option} />
        </div>
    )
}
