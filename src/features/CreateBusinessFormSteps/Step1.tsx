import { Button, CaretDownIcon, majorScale, Pane, RadioGroup, SelectMenu, Card } from 'evergreen-ui';
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Text } from 'components'
import countries from 'utils/countries'
import { PRIMARY, WHITE } from 'config/colors';
import { CheckBoxGroup } from 'components/Inputs';
import nigerianStates from 'utils/nigerian-states';

const countryNames = countries.map(country => country.value)
const Step1 = () => {
    const { register, handleSubmit, control, watch, formState: { errors, touchedFields }, getValues } = useForm();

    return <>
        <form onSubmit={handleSubmit((fields) => { console.log(fields) })}>
            <Pane padding={majorScale(2)}>

                <Pane textAlign='center' marginBottom={majorScale(4)}>
                    <Text.Su>What Locations Does Your Business Support ?</Text.Su>
                    <Text.Pa marginTop={majorScale(1)}>This information will be used to restrict the locations customers can order from.</Text.Pa>
                </Pane>
                {/* <Pane marginBottom={majorScale(3)}>
                    <Pane marginBottom={majorScale(1)}>
                        <Text.PaStr >What Country is Your Business Located In ?</Text.PaStr>
                    </Pane>
                    <Controller
                        name='country'

                        control={control}
                        // defaultValue='Nigeria'
                        rules={{ required: true, }}
                        render={({ field: { onChange, ref, name, value } }) => {
                            return <SelectMenu
                                selected={value}
                                closeOnSelect
                                onSelect={(item) => onChange(item.value)}
                                width='100%'
                                title="Select country"
                                options={countryNames.map(c => ({ label: c, value: c }))}
                            >
                                <Button width='100%' iconAfter={<CaretDownIcon marginLeft={'auto'} />}>
                                    {getValues()?.country ?? 'Select Country'}
                                </Button>
                            </SelectMenu>
                        }}
                    />


                </Pane> */}
                {/* <Pane marginBottom={majorScale(3)}>
                    <Pane marginBottom={majorScale(1)}>
                        <Text.PaStr >Do you fulfill domestic and/or international orders ?</Text.PaStr>
                    </Pane>
                    <Controller
                        name='shipping_type'
                        control={control}
                        defaultValue='Domestic'
                        rules={{ required: true, }}
                        render={({ field: { onChange, ref, name, value } }) => {
                            return <RadioGroup
                                label="Supported Country"
                                size={16}
                                onChange={e => onChange(e.target.value)}
                                value={value}
                                options={['Domestic', 'International', 'Both'].map(o => ({ label: o, value: o }))}
                            />
                        }}
                    />
                </Pane> */}

                <Pane marginBottom={majorScale(3)}>
                    <Pane marginBottom={majorScale(1)}>
                        <Text.PaStr >What cities in <span style={{ color: PRIMARY }}>{'Nigeria'}</span> do you support shipping ?</Text.PaStr>
                    </Pane>
                    <Card background={WHITE} padding={majorScale(2)} maxHeight={'70vh'} overflow='auto'>

                        <Controller
                            name='cities'
                            control={control}

                            rules={{ required: true, }}
                            render={({ field: { onChange, ref, name, value } }) => {
                                return <CheckBoxGroup
                                    options={nigerianStates}
                                    onChange={(o) => {
                                        console.log(o, value)
                                        onChange(o)
                                    }}
                                    value={value}
                                />
                            }}
                        />
                    </Card>
                </Pane>
            </Pane>
        </form>
    </>
}

export default Step1