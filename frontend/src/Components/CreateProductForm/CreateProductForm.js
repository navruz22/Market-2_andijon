import FieldContainer from '../FieldContainer/FieldContainer'
import Button from '../Buttons/BtnAddRemove'
import { useTranslation } from 'react-i18next'
import ProductCheckbox from '../Checkbox/ProductCheckBox'
import Checkbox from '../Checkbox/Checkbox'
import { IoCheckmark } from 'react-icons/io5'

function CreateProductForm({
    searchBarcode,
    stickyForm,
    handleChangeCodeOfProduct,
    codeOfProduct,
    handleChangeNameOfProduct,
    nameOfProduct,
    numberOfProduct,
    handleChangeNumberOfProduct,
    unitOfProduct,
    handleChangeUnitOfProduct,
    handleChangePriceOfProduct,
    priceOfProduct,
    sellingPriceOfProduct,
    sellingPriceOfProductUsd,
    handleChangeSellingPriceOfProduct,
    handleEdit,
    addNewProduct,
    clearForm,
    pageName,
    unitOptions,
    categoryOfProduct,
    categoryOptions,
    handleChangeCategoryOfProduct,
    checkOfProduct,
    handleChangeCheckOfProduct,
    tradePrice,
    handleChangeTradePrice,
    minimumCount,
    handleChangeMinimumCount,
    packcount,
    handleChangePackount,
    sellingPriceOfProcient,
    handleChangeSellingPriceOfProcient,
    handleChangeTradePriceProcient,
    tradePriceProcient,
    handleChangeSellingPriceOfProductUsd,
    priceOfProductUsd,
    handleChangePriceOfProductUsd,
    isUsd,
    setIsUsd
}) {
    const { t } = useTranslation(['common'])
    return (
        <form
            className={`flex gap-[1.25rem] bg-background flex-col mainPadding transition ease-linear duration-200 ${stickyForm ? 'stickyForm' : ''
                }`}
        >
            <div className={'flex gap-[2.5rem]'}>
                {/* -- maxsulotlar checki -- */}
                <FieldContainer
                    label={t('Shtrix kodi')}
                    placeholder={`${t('misol')}: 123456789`}
                    onChange={handleChangeCheckOfProduct}
                    value={checkOfProduct}
                    maxWidth={'w-[10rem]'}
                    onKeyUp={searchBarcode}
                />

                {/* -- maxsulot kategoriyasi -- */}
                <FieldContainer
                    value={categoryOfProduct}
                    onChange={handleChangeCategoryOfProduct}
                    label={t('Kategoriya nomi')}
                    placeholder={t('tanlang...')}
                    select={true}
                    options={categoryOptions}
                    maxWidth={'w-[15rem]'}
                />

                {/* -- maxulot kodi -- */}
                <FieldContainer
                    label={t('Maxsulot kodi')}
                    placeholder={`${t('misol')}: 1234`}
                    onChange={handleChangeCodeOfProduct}
                    value={codeOfProduct}
                    type={'text'}
                    maxWidth={'w-[8.75rem]'}
                />

                {/* -- maxsulotlar nomi -- */}
                <FieldContainer
                    label={t('Maxsulot nomi')}
                    placeholder={`${t('misol')}: Acer`}
                    onChange={handleChangeNameOfProduct}
                    value={nameOfProduct}
                />
            </div>
            <div className={'flex gap-[2.5rem] items-end'}>
                {/* -- o`lchov birligi -- */}
                <FieldContainer
                    value={unitOfProduct}
                    onChange={handleChangeUnitOfProduct}
                    label={t("O'lchov birligi")}
                    placeholder={t('tanlang...')}
                    select={true}
                    options={unitOptions}
                />

                {pageName !== 'accept' && (
                    <>
                        {/* -- maxsulotlar soni -- */}
                        <FieldContainer
                            value={numberOfProduct}
                            onChange={handleChangeNumberOfProduct}
                            label={t('Maxsulot soni')}
                            placeholder={`${t('misol')}: 100`}
                            type={'text'}
                        />
                        <FieldContainer
                            value={packcount}
                            onChange={handleChangePackount}
                            label={'Optom qiymat'}
                            placeholder={`${t('misol')}: 300`}
                            type={'text'}
                        />
                    </>
                )}

                {pageName !== 'accept' && (
                    <>
                        {/* -- keltirilgan narxi -- */}
                        <FieldContainer
                            value={priceOfProduct}
                            onChange={handleChangePriceOfProduct}
                            label={t('Keltirilgan narxi')}
                            placeholder={`${t('misol')}: 100`}
                            type={'text'}
                        />
                        <FieldContainer
                            value={priceOfProductUsd}
                            onChange={handleChangePriceOfProductUsd}
                            label={t('Keltirilgan narxi USD')}
                            placeholder={`${t('misol')}: 100`}
                            type={'text'}
                        />

                    </>
                )}
            </div>
            <div className='flex flex gap-[2.5rem] items-end'>
                <FieldContainer
                    value={sellingPriceOfProduct}
                    onChange={handleChangeSellingPriceOfProduct}
                    label={t('Sotish narxi')}
                    placeholder={`${t('misol')}: 200`}
                    type={'text'}
                />
                <div className='flex gap-2'>
                    <FieldContainer
                        value={sellingPriceOfProductUsd}
                        onChange={handleChangeSellingPriceOfProductUsd}
                        label={t('Sotish narxi USD')}
                        placeholder={`${t('misol')}: 200`}
                        type={'text'}
                    />
                    <div className={'checkbox-card sale-toggle-container'}>
                        <input
                            className={'cursor-pointer'}
                            type='checkbox'
                            checked={isUsd}
                            onChange={() => setIsUsd(!isUsd)}
                        />
                    </div>
                </div>
                <FieldContainer
                    value={sellingPriceOfProcient}
                    onChange={handleChangeSellingPriceOfProcient}
                    label={t('Sotish foizi')}
                    placeholder={`${t('misol')}: 30 %`}
                    type={'text'}
                />
                {/* <FieldContainer
                    value={tradePriceProcient}
                    onChange={handleChangeTradePriceProcient}
                    label={t('Optom foizi')}
                    placeholder={`${t('misol')}: 30 %`}
                    type={'text'}
                />
                <FieldContainer
                    value={tradePrice}
                    onChange={handleChangeTradePrice}
                    label={'Optom narxi'}
                    placeholder={`${t('misol')}: 300`}
                    type={'text'}
                /> */}
                <FieldContainer
                    value={minimumCount}
                    onChange={handleChangeMinimumCount}
                    label={'Minimum qiymat'}
                    placeholder={`${t('misol')}: 300`}
                    type={'text'}
                />

                <div className={'flex gap-[1.25rem] min-w-[20rem]'}>
                    <Button
                        onClick={stickyForm ? handleEdit : addNewProduct}
                        add={!stickyForm}
                        edit={stickyForm}
                        text={
                            stickyForm
                                ? t('Saqlash')
                                : t('Yangi maxsulot qo`shish')
                        }
                    />
                    <Button onClick={clearForm} text={t('Tozalash')} />
                </div>
            </div>
        </form>
    )
}

export default CreateProductForm
