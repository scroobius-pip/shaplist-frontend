import { Icon } from 'components'
import { CheckBoxGroup, CustomLabel, ImageInput } from 'components/Inputs'
import { He, Pa, PaStr, Su } from 'components/Text'
import { BACKGROUND, PRIMARY, WHITE } from 'config/colors'
import { Button, Card, majorScale, Pane, SavedIcon, SelectField, TextareaField, TextInputField } from 'evergreen-ui'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ImageListType } from 'react-images-uploading'

interface Props {
    onSubmit: () => any
    initialValues: Business
}

type ProfileFormState = Business & {
    business_image_url: ImageListType
}


function SaveProfileButton({ onClick = () => { }, disabled = true, loading = false }) {
    return (<Button width='100%' size='large' disabled={disabled} isLoading={loading} appearance='primary' iconBefore={SavedIcon} backgroundColor={PRIMARY} onClick={onClick}>Save Profile</Button>);
}


const ProfileForm = (props: Props) => {
    const { register, control, formState: { isDirty, isValid } } = useForm<ProfileFormState>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            ...props.initialValues,
            business_image_url: []
        }
    })

    const initialBusinessImageUrl = props.initialValues.business_image_url

    return < Pane padding={'2vw'}>
        <PaStr>Update business details</PaStr>
        <Card padding={majorScale(3)} marginTop={majorScale(2)} background={WHITE}>
            <SaveProfileButton disabled={!isValid || (isValid && !isDirty)} />
            <TextInputField
                marginTop={majorScale(3)}

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
                <CustomLabel
                    label='Webpage Picture'
                    description='Upload a nice background image for your webpage'
                />
                <Controller
                    control={control}
                    name='business_image_url'
                    render={({ field: { value, onChange } }) => {
                        return <ImageInput

                            onChange={onChange}
                            value={value}
                            defaultValue={initialBusinessImageUrl}
                        />
                    }}
                />
            </Pane>


            <Pane marginBottom={majorScale(3)}>
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
            <Pane marginBottom={majorScale(3)}>
                <Pane >
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
            <Pane marginBottom={majorScale(3)}>

                <Pane>
                    <Controller
                        control={control}
                        name='contact_type'
                        render={({ field: { value, onChange } }) => {
                            return <SelectField
                                marginBottom={majorScale(1)}
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
                        description='Enter the phone number that customers will message or
                call. We will also forward orders to this number.'
                        placeholder={'+2340000000000'}
                        marginBottom={0}
                        flex={1}

                        {...register('phone_no', { required: true })}
                    />
                </Pane>
            </Pane>
            <SaveProfileButton disabled={!isValid || (isValid && !isDirty)} />
        </Card>

    </ Pane>

}

export default ProfileForm