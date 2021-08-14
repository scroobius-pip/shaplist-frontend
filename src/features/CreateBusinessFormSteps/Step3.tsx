import { Su, Pa } from 'components/Text'
import { WHITE } from 'config/colors'
import { majorScale, Pane, Select, SelectField, TextInputField } from 'evergreen-ui'
import React from 'react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StepProps } from '.'

interface FormData {
    contact_type: 'phone' | 'whatsapp'
    phone_no: string
}

const Step3 = ({ value, BackButton, NextButton, onForward, onBackward }: StepProps<FormData>) => {
    const { register, formState, getValues, control } = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: value ?? undefined
    })

    const { isValid } = formState

    return <Pane>
        <Pane textAlign='center' marginBottom={majorScale(4)}>
            <Su>How Do You Want To Be Contacted ?</Su>
            <Pa marginTop={majorScale(1)}>Enter the phone number customers will message
                or call, we will also forward your orders to this
                number.</Pa>
        </Pane>
        <Pane>
            <Controller
                control={control}
                name='contact_type'
                render={({ field: { value, onChange } }) => {
                    return <SelectField
                        label="How do you want to be contacted by your
customers ?"
                        description="Via Phone or WhatsApp ?"
                        value={value}
                        onChange={e => onChange(e.target.value)}
                        // background={WHITE} 
                        width='100%' >
                        <option value="phone" selected>
                            Phone
                        </option>
                        <option value="whatsapp">WhatsApp</option>
                    </SelectField>
                }}
            />
            <TextInputField
                label='Phone Number'
                description='Enter the phone number that customers will message or
                call. We will also forward orders to this number.'
                placeholder={'+2340000000000'}
                marginBottom={0}
                flex={1}

                {...register('phone_no', { required: true })}
            />
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

export default Step3