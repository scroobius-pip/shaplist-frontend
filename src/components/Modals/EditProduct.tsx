import { ImageInput } from 'components/Inputs'
import CustomLabel from 'components/Inputs/Label'
import { Su } from 'components/Text'
import { BACKGROUND, WHITE } from 'config/colors'
import { Card, FilePicker, Label, majorScale, Pane, SelectField, Switch, TextareaField, TextInput, TextInputField } from 'evergreen-ui'
import CategorySelector from 'features/CategorySelector'
import React from 'react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ImageListType, ImageType } from 'react-images-uploading'
import Categories from 'utils/categories'

export interface EditProductProps {
    product: Product
}

type EditProductState = Product & {
    imageUrl: ImageListType
    category: string
    subCategory: string
}

const EditProduct = ({ product: { imageUrl, ...product } }: EditProductProps) => {
    const [groupBuy, setGroupBuy] = useState(!!product?.groupBuying)
    const [scheduledAvailability, setScheduledAvailability] = useState(!!product?.limitedTime)
    const { register, formState: { isValid }, watch, getValues, control } = useForm<EditProductState>({
        mode: 'onChange', reValidateMode: 'onChange', defaultValues: {
            ...product,
            imageUrl: [],
            category: 'empty'
        } ?? undefined
    })
    const category = watch('category')
    // const  = ['Pick Category', ...Object.values(Categories).map(c => c.name).sort((a, b) => a >= b ? 1 : -1)]

    return <Pane >
        <Su>Update product</Su>
        <Card padding={majorScale(3)} marginTop={majorScale(2)} background={WHITE}>
            <TextInputField
                label='Name'
                description='Name of product, please keep it short'
                {...register('name', { required: true })
                }
            />
            <TextInputField
                label='Unit Price - Naira'
                description='Price of a single unit. Even if a unit can be shared amongst multiple people e.g a basket of tomatoes, please use the price of the entire unit'
                {...register('price.value', { required: true })
                }
            />
            <>
                <CustomLabel
                    label={
                        <Pane display='flex' alignItems='center'>
                            <Label marginRight={majorScale(1)}>Group Buying</Label>
                            <Switch
                                onChange={(e) => setGroupBuy(e.target.checked)}
                                checked={groupBuy}
                                height={majorScale(3)}
                            />
                        </Pane>

                    }
                    description='Enable group buying to allow people share the cost of buying one unit'
                />
                <Pane opacity={!groupBuy && '30%'}>
                    <TextInputField
                        disabled={!groupBuy}
                        {...register('groupBuying.personCount')}
                        label='Number of people in a group'
                        description='How many people can a unit be shared amongst ?'
                        marginY={majorScale(1)}
                    />
                    <TextInputField
                        disabled={!groupBuy}
                        {...register('groupBuying.unitDescription')}
                        description='Describe what one unit means.'
                        label='Unit description'
                    />
                </Pane>

            </>
            <>
                <CustomLabel
                    label={
                        <Pane display='flex' alignItems='center'>
                            <Label marginRight={majorScale(1)}>Scheduled Availability</Label>
                            <Switch
                                onChange={(e) => setScheduledAvailability(e.target.checked)}
                                checked={scheduledAvailability}
                                height={majorScale(3)}
                            />
                        </Pane>

                    }
                    description='Schedule when you want a product to be available.'
                />
                <Pane opacity={!scheduledAvailability && '30%'}>

                </Pane>
            </>
            <>
                <CustomLabel
                    label='Image (Optional)'
                    description='Upload an image of your product - max 6MB'
                />
                <Controller
                    control={control}
                    name='imageUrl'
                    render={({ field: { value, onChange } }) => {
                        return <ImageInput
                            defaultValue={imageUrl}
                            value={value}
                            onChange={(url) => {
                                console.log(url)
                                onChange(url)
                            }} />
                    }}
                />
            </>
            <>
                <Controller
                    control={control}
                    name='category'
                    render={({ field: { value, onChange } }) => {
                        return <SelectField
                            value={value}
                            onChange={(e) => {
                                onChange(e.target.value)
                            }}
                            marginTop={majorScale(3)}
                            marginBottom={majorScale(1)}
                            label='Category (Optional)'
                            description='Selecting a category makes it easier for customers to find your product'
                        >
                            <option value='empty' >
                                Pick Category
                            </option>
                            {Object.keys(Categories).map((categoryId) => {
                                return <option key={categoryId} value={categoryId}>
                                    {Categories[categoryId].name}
                                </option>
                            })}
                            {
                                category
                            }
                        </SelectField>
                    }}
                />


                {category !== 'empty' && <Controller
                    control={control}
                    name='subCategory'
                    render={({ field: { value, onChange } }) => {
                        return <SelectField
                            // label='Sub Categories'
                            value={value}
                            onChange={e => onChange(e.target.value)}
                            description='Sub Category'
                        >
                            {Object.keys(Categories?.[category].subcategories ?? {}).map(subCatId => {
                                return <option key={subCatId} value={subCatId}>
                                    {Categories[category].subcategories[subCatId]}
                                </option>
                            })}
                        </SelectField>
                    }}
                />}
            </>
        </Card>
    </Pane>
}

export default EditProduct