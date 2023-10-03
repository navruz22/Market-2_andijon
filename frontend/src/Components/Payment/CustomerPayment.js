import { IoPerson } from 'react-icons/io5'
import { DiscountBtn, Payment, SaleBtn } from '../Buttons/SaleBtns.js'
import { DiscountInput } from '../Inputs/DiscountInputs.js'
import { useSelector } from 'react-redux'
import PaymentInput from './PaymentInput/PaymentInput.js'
import { t } from 'i18next'
import { useLocation } from 'react-router-dom'
import Checkbox from '../Checkbox/Checkbox.js'
import { roundUsd, UsdToUzs } from '../../App/globalFunctions.js'

function CustomerPayment({
    returned,
    active,
    togglePaymentModal,
    type = 'cash',
    cash = '',
    card = '',
    transfer = '',
    discount,
    discountUzs,
    hasDiscount,
    debt,
    allPayment,
    allPaymentUzs,
    paid = 0,
    client = '',
    onChange,
    onClose,
    changePaymentType,
    discountSelectOption,
    handleClickDiscountBtn,
    handleChangeDiscountSelectOption,
    handleChangeDiscount,
    exchangerate,
    handleClickPay,
    allMainPayment,
    saleComment,
    changeComment,
    onDoubleClick,
    paymentUsd = "",
    debtuzs,
    debtType,
    setDebtType
}) {
    const location = useLocation()
    const defineLabel = () => {
        switch (type) {
            case 'card':
                return (
                    <PaymentInput
                        value={card}
                        key={'sale-card1'}
                        keyInput={type}
                        onChange={onChange}
                        onClose={onClose}
                        label={t('Plastik')}
                    />
                )
            case 'transfer':
                return (
                    <PaymentInput
                        value={transfer}
                        key={'sale-transfer'}
                        keyInput={type}
                        onChange={onChange}
                        onClose={onClose}
                        label={t('O`tkazma')}
                    />
                )
            case 'mixed':
                return [
                    { label: t('Naqd'), key: 'cash', value: cash },
                    { label: t('Plastik'), key: 'card', value: card },
                    {
                        label: t('O`tkazma'),
                        key: 'transfer',
                        value: transfer,
                    },
                ].map((obj) => (
                    <PaymentInput
                        value={obj.value}
                        key={`sale-${obj.key}`}
                        keyInput={obj.key}
                        onChange={onChange}
                        onClose={onClose}
                        label={t(obj.label)}
                    />
                ))
            default:
                return location.pathname.includes('/kassa/debts') ?
                    (
                        debtType === 'sum' ?
                            <PaymentInput
                                key={'sale-cash'}
                                value={cash}
                                onChange={onChange}
                                keyInput={type}
                                onClose={onClose}
                                label={t('Naqd')}
                            /> :
                            <PaymentInput
                                key={'sale-usd'}
                                value={paymentUsd}
                                onChange={onChange}
                                keyInput={'usd'}
                                onClose={onClose}
                                label={t('USD')}
                            />
                    )
                    :
                    <>
                        {type !== 'mixed' && <PaymentInput
                            key={'sale-usd'}
                            value={paymentUsd}
                            onChange={onChange}
                            keyInput={'usd'}
                            onClose={onClose}
                            label={t('USD')}
                        />}
                        <PaymentInput
                            key={'sale-cash'}
                            value={cash}
                            onChange={onChange}
                            keyInput={type}
                            onClose={onClose}
                            label={t('Naqd')}
                        />
                    </>
        }
    }
    const { currencyType, currency } = useSelector((state) => state.currency)
    return (
        <section
            className={`absolute transition-all left-0 top-0 right-0 bottom-0 overflow-hidden duration-200 ease-out bg-black-300 backdrop-blur-[3px] z-20 ${active
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
                }`}
            onClick={togglePaymentModal}
        >
            <h3
                className={
                    'text-white-900 text-lg leading-[1.875rem absolute top-[50%] left-[35%] -translate-x-[50%]'
                }
            >
                {t('Oynani yopish uchun bu yerga bosing !')}
            </h3>
            <div
                className={`customerPay-head-style transition-all duration-200 ease-linear h-full overflow-auto absolute top-0 bottom-0 right-0 ${active ? 'translate-x-0' : 'translate-x-full'
                    }`}
                onClick={(e) => e.stopPropagation()}
                autoFocus
            >
                <div className='top-payment w-full'>
                    {client && (
                        <div className='customer-head-icon'>
                            <div className='flex items-center custom-payment-text-style'>
                                <IoPerson className='mr-[0.75rem]' />
                                <span>{t('Mijoz')} : </span>
                            </div>
                            <h3 className='text-[0.875rem]'>{client}</h3>
                        </div>
                    )}
                    <div className='mb-[1.25rem] font-medium text-[1.25rem] text-center leading-[23.44px]'>
                        {location.pathname.includes('/kassa/debts') ? (debtType === 'dollar' ? allPayment + ' USD' : allPaymentUzs + ' UZS') : Number(allMainPayment) + ' UZS'}
                    </div>
                    <ul className='w-full pb-[1.25rem]'>
                        {!returned && defineLabel()}
                        {(location.pathname.includes('/kassa/debts') || location.pathname.includes('/qarzdorlar') || location.pathname.includes('/maxsulotlar/qabul/qabulqilish') || location.pathname.includes('/maxsulotlar/qabul/qabullar')) && defineLabel()}
                        <PaymentInput
                            value={saleComment}
                            key={'sale-card'}
                            keyInput={type}
                            onChange={changeComment}
                            onClose={onClose}
                            label={t('Izoh')}
                            placeholder={t('misol: qarzga olindi')}
                            type={'text'}
                        />
                        {hasDiscount && (
                            <>
                                <DiscountInput
                                    value={discount}
                                    onChange={handleChangeDiscount}
                                    option={discountSelectOption}
                                    onSelect={handleChangeDiscountSelectOption}
                                    label={'Chegirma USD'}
                                    type={'usd'}
                                />
                                <DiscountInput
                                    value={discountUzs}
                                    onChange={handleChangeDiscount}
                                    option={discountSelectOption}
                                    onSelect={handleChangeDiscountSelectOption}
                                    label={'Chegirma UZS'}
                                    type={'uzs'}
                                />
                            </>
                        )}
                        {location.pathname.includes('/kassa/debts') ?
                            (
                                debtType === 'sum' ?
                                    <li className='custom-payment-ul-li'>
                                        <span className='custom-payment-text-style'>
                                            {t('Qarzlar')} :{' '}
                                        </span>
                                        <h3 className='text-error-500 text-[1rem]'>
                                            {debtuzs} UZS
                                        </h3>
                                    </li>
                                    :
                                    <li className='custom-payment-ul-li'>
                                        <span className='custom-payment-text-style'>
                                            {t('Qarzlar')} :{' '}
                                        </span>
                                        <h3 className='text-error-500 text-[1rem]'>
                                            {roundUsd(debt)} USD <br /><br />
                                        </h3>
                                    </li>
                            )
                            :
                            <li className='custom-payment-ul-li'>
                                <span className='custom-payment-text-style'>
                                    {t('Qarzlar')} :{' '}
                                </span>
                                <h3 className='text-error-500 text-[1rem]'>
                                    {Math.round(debt * 1000) / 1000} USD <br /><br />
                                    {debtuzs} UZS
                                </h3>
                            </li>
                        }
                        {/* <li className='custom-payment-ul-li'>
                            <span className='custom-payment-text-style'>
                                {t('Qarz')} :{' '}
                            </span>
                            <h3 className='text-error-500 text-[1rem] flex items-center gap-2'>
                                <Checkbox
                                    id={`debt`}
                                    onChange={() => setDebtType('dollar')}
                                    value={debtType === 'dollar' ? true : false}
                                    label={t('USD')}
                                />
                                <Checkbox
                                    id={`debt2`}
                                    onChange={() => setDebtType('sum')}
                                    value={debtType === 'sum' ? true : false}
                                    label={t('UZS')}
                                />
                            </h3>
                        </li> */}
                        <li className='custom-payment-ul-li'>
                            <span className='custom-payment-text-style'>
                                {allPayment < 0
                                    ? t('Qaytarilayotgan')
                                    : t('To`lanayotgan')}{' '}
                                :{' '}
                            </span>
                            <h3 className='text-[1rem] text-loginButton'>
                                {paid.toLocaleString('ru-Ru')} {currencyType}
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className='bottom-payment w-full flex flex-col gap-[1.25rem] border-t-[1px] border-black-200 pt-[1.25rem]'>
                    <div className='custom-paymet-btn'>
                        <SaleBtn
                            text={t(`Naqd`)}
                            type='cash'
                            active={type === 'cash'}
                            onClick={changePaymentType}
                        />
                        <SaleBtn
                            text={t(`Plastik`)}
                            type='card'
                            active={type === 'card'}
                            onClick={changePaymentType}
                        />
                        <SaleBtn
                            text={t(`O'tkazma`)}
                            type='transfer'
                            active={type === 'transfer'}
                            onClick={changePaymentType}
                        />
                        {!returned && <SaleBtn
                            text={t(`Aralash`)}
                            type='mixed'
                            active={type === 'mixed'}
                            onClick={changePaymentType}
                        />}
                        {/* {location.pathname.includes('/kassa/debts') && <SaleBtn
                            text={t(`Aralash`)}
                            type='mixed'
                            active={type === 'mixed'}
                            onClick={changePaymentType}
                        />} */}
                    </div>
                    {/* {!returned && (
                        <DiscountBtn
                            text={t(`Chegirma`)}
                            onClick={handleClickDiscountBtn}
                        />
                    )} */}
                    <Payment
                        text={t(`To'lash`)}
                        onClick={handleClickPay}
                        onDoubleClick={onDoubleClick}
                    />
                </div>
            </div>
        </section>
    )
}

export default CustomerPayment
