import { ImageInput, TimePicker } from 'components/Inputs'
import CustomLabel from 'components/Inputs/Label'
import { Su } from 'components/Text'
import { PRIMARY, WHITE } from 'config/colors'
import { Button, Card, Label, majorScale, Pane, PlusIcon, SelectField, Switch, TextInputField } from 'evergreen-ui'
import React from 'react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ImageListType } from 'react-images-uploading'
import Categories from 'utils/categories'

export interface ProductFormProps {
    product?: Product
    onSubmit: () => any
}

type ProductFormState = Product & {
    imageUrl: ImageListType
    category: string
    subCategory: string
}


function GroupBuyFormComponent(props: any) {
    return (<Pane>
        <CustomLabel label={<Pane display='flex' alignItems='center'>
            <Label marginRight={majorScale(1)}>Group Buying</Label>
            <Switch onChange={e => props.setGroupBuy(e.target.checked)} checked={props.groupBuy} height={majorScale(3)} />
        </Pane>} description='Enable group buying to allow people share the cost of buying one unit' />
        <Pane opacity={!props.groupBuy && '30%'}>
            <TextInputField disabled={!props.groupBuy} {...props.register('groupBuying.personCount')} label='Number of people in a group' description='How many people can a unit be shared amongst ?' marginY={majorScale(1)} />
            <TextInputField disabled={!props.groupBuy} {...props.register('groupBuying.unitDescription')} description='Describe what one unit means.' label='Unit description' />
        </Pane>

    </Pane>);
}



function ScheduledAvailabilityFormComponent(props: any) {
    return (<Pane marginBottom={majorScale(3)}>
        <CustomLabel label={<Pane display='flex' alignItems='center'>
            <Label marginRight={majorScale(1)}>Scheduled Availability</Label>
            <Switch onChange={e => props.setScheduledAvailability(e.target.checked)} checked={props.scheduledAvailability} height={majorScale(3)} />
        </Pane>} description='Schedule when you want a product to be available.' />
        <Pane marginTop={majorScale(1)} pointerEvents={!props.scheduledAvailability && 'none'} opacity={!props.scheduledAvailability && '30%'}>
            <Controller control={props.control} name='limitedTime.epochStart' render={({
                field: {
                    value,
                    onChange
                }
            }) => {
                return <TimePicker disabled={!props.scheduledAvailability} value={value ?? Date.now()} onChange={onChange} label='Order Start Time' description='Orders for this product will start at this time.' />;
            }} />
            <Controller control={props.control} name='limitedTime.epochExpiring' render={({
                field: {
                    value,
                    onChange
                }
            }) => {
                return <TimePicker disabled={!props.scheduledAvailability} value={value ?? Date.now()} onChange={onChange} label='Order End Time' description='Orders for this product will start at this time.' />;
            }} />
        </Pane>
    </Pane>);
}



function ImageFormComponent(props: any) {
    return (<Pane>
        <CustomLabel label='Image (Optional)' description='Upload an image of your product - max 6MB' />
        <Controller control={props.control} name='imageUrl' render={({
            field: {
                value,
                onChange
            }
        }) => {
            return <ImageInput defaultValue={props.imageUrl} value={value} onChange={url => {
                // console.log(url);
                onChange(url);
            }} />;
        }} />
    </Pane>);
}



function CategoryFormComponent(props: any) {
    return (<Pane>
        <Controller control={props.control} name='category' render={({
            field: {
                value,
                onChange
            }
        }) => {
            return <SelectField value={value} onChange={e => {
                onChange(e.target.value);
            }} marginTop={majorScale(3)} marginBottom={majorScale(1)} label='Category (Optional)' description='Selecting a category makes it easier for customers to find your product'>
                <option value='empty'>
                    Pick a Category
                </option>
                {Object.keys(Categories).map(categoryId => {
                    return <option key={categoryId} value={categoryId}>
                        {Categories[categoryId].name}
                    </option>;
                })}
                {props.category}
            </SelectField>;
        }} />


        {props.category !== 'empty' && <Controller control={props.control} name='subCategory' render={({
            field: {
                value,
                onChange
            }
        }) => {
            return <SelectField // label='Sub Categories'
                value={value} onChange={e => onChange(e.target.value)} description='Sub Category'>
                {Object.keys(Categories?.[props.category].subcategories ?? {}).map(subCatId => {
                    return <option key={subCatId} value={subCatId}>
                        {Categories?.[props.category].subcategories[subCatId]}
                    </option>;
                })}
            </SelectField>;
        }} />}
    </Pane>);
}


const ProductForm = (props: ProductFormProps) => {
    const [groupBuy, setGroupBuy] = useState(!!props?.product?.groupBuying)
    const [scheduledAvailability, setScheduledAvailability] = useState(!!props?.product?.limitedTime)
    const { register, watch, formState: { isValid }, control } = useForm<ProductFormState>({
        mode: 'onChange', reValidateMode: 'onChange', defaultValues: {
            ...(props?.product ?? {}),
            imageUrl: [],
            category: 'empty'
        } ?? undefined
    })
    const category = watch('category')
    const title = `${!props?.product ? 'Add' : 'Update'} Product`

    return <Pane >
        <Su>{title}</Su>
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
            <ImageFormComponent imageUrl={props?.product?.imageUrl} control={control}></ImageFormComponent>
            <CategoryFormComponent control={control} category={category}></CategoryFormComponent>
            <GroupBuyFormComponent groupBuy={groupBuy} setGroupBuy={setGroupBuy} register={register}></GroupBuyFormComponent>
            <ScheduledAvailabilityFormComponent scheduledAvailability={scheduledAvailability} setScheduledAvailability={setScheduledAvailability} control={control}></ScheduledAvailabilityFormComponent>

            <Button onClick={() => {
                props.onSubmit()
            }} isLoading disabled={!isValid} size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={PlusIcon}>
                {title}
            </Button>
        </Card>
    </Pane>
}

export default ProductForm