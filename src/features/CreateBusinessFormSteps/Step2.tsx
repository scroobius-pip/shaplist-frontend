import { Pane, majorScale, TextInput, TextInputField, TextareaField, Label, Text, Paragraph, Small } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StepProps } from '.'
import { CheckBoxGroup } from 'components/Inputs'
import { PaStr, Pa, No, Su } from 'components/Text'
import CustomLabel from 'components/Inputs/Label'
import { Icon } from 'components'

interface Step2FormData {
    business_name: string
    description: string
    extras: string[]
    twitter?: string
    facebook?: string
    instagram?: string
}


const Step2 = ({ onForward, NextButton, BackButton, onBackward, value }: StepProps<Step2FormData>) => {
    const { register, formState: { isValid }, getValues, control } = useForm<Step2FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: value ?? null
    })



    return <Pane>
        <Pane textAlign='center' marginBottom={majorScale(4)}>
            <Su>Business Details</Su>
            <Pa marginTop={majorScale(1)}>This information would be shown to customers that visit your page.</Pa>
        </Pane>
        <TextInputField
            label='Business Name'
            description='Please enter the name of your business'
            {...register('business_name', { required: true })}
        />
        <TextareaField
            label='Business Description'
            description='Please enter the name of your business'
            {...register('description', { required: true })}
        />
        <Pane>
            <Pane marginBottom={majorScale(1)}>
                <CustomLabel
                    description='Show customers the extra services you offer'
                    label='Extras (Optional)'
                />
            </Pane>
            <Controller
                control={control}
                name='extras'
                render={({ field: { value, onChange } }) => {
                    return <CheckBoxGroup
                        options={['Free Returns', 'Free Delivery']}
                        onChange={onChange}
                        value={value}
                    />
                }}
            />
        </Pane>
        <Pane>
            <CustomLabel
                label='Social Handles (Optional)'
                description='Allow your customers visit your social media profiles'
            />
            <Pane display='flex' alignItems='flex-end' justifyItems='center'>
                <Pane paddingRight={majorScale(1)}>
                    <Icon.Facebook size={majorScale(3)} />
                </Pane>
                <TextInputField
                    placeholder={'@facebookhandle'}
                    marginBottom={0}
                    flex={1}
                    {...register('facebook')}
                />
            </Pane>
            <Pane display='flex' alignItems='flex-end' justifyItems='center'>
                <Pane paddingRight={majorScale(1)}>
                    <Icon.Twitter size={majorScale(3)} />
                </Pane>
                <TextInputField
                    placeholder={'@twitterhandle'}
                    marginBottom={0}
                    flex={1}
                    {...register('twitter')}
                />
            </Pane>
            <Pane display='flex' alignItems='flex-end' justifyItems='center'>
                <Pane paddingRight={majorScale(1)}>
                    <Icon.Instagram size={majorScale(3)} />
                </Pane>
                <TextInputField
                    placeholder={'@instagramhandle'}
                    marginBottom={0}
                    flex={1}
                    {...register('instagram')}
                />
            </Pane>
        </Pane>
        <NextButton
            disabled={!isValid}
            onClick={() => {
                onForward(getValues())
            }}
        />
        <BackButton
            disabled={false}
            onClick={() => {
                onBackward(getValues())
            }}
        />
    </Pane>
}

export default Step2