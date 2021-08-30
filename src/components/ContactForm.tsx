import { PRIMARY } from 'config/colors'
import { Button, CreditCardIcon, TextareaField, TextInput, TextInputField } from 'evergreen-ui'
import React from 'react'
import { useForm } from 'react-hook-form'

interface FormState {
    email: string
    phone_no: string
    name: string
    address: string
}

interface Props {
    initialState?: FormState
    onSubmit: (state: FormState) => any
}

const ContactForm = (props: Props) => {
    const { register, watch, formState: { isValid }, getValues } = useForm<FormState>({
        defaultValues: props?.initialState ?? undefined,
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    return <>
        <TextInputField
            label='Full Name'
            description='Please enter your full name'
            {...register('name', { required: true })}
        />
        <TextInputField
            label='Phone Number'
            description='Please enter your phone number'
            {...register('phone_no', { required: true })}
        />
        <TextareaField
            label='Address'
            description='Please enter the delivery address'
            {...register('address', { required: true })}
        />
        <TextInputField
            label='Email (Optional)'
            description='Please enter your email'
            type='email'
            {...register('email')}
        />
        <Button onClick={() => {
            props.onSubmit(getValues())
        }} disabled={!isValid} size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={CreditCardIcon}>
            Submit & Pay
        </Button>
    </>
}

export default ContactForm