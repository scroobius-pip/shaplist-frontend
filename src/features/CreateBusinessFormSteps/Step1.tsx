import { Button, CaretDownIcon, majorScale, Pane, RadioGroup, SelectMenu, Card, ArrowRightIcon } from 'evergreen-ui';
import React, { useState } from 'react'
import { useForm, Controller, Control } from 'react-hook-form';
import { Text } from 'components'
import countries from 'utils/countries'
import { PRIMARY, WHITE } from 'config/colors';
import { CheckBoxGroup } from 'components/Inputs';
import nigerianStates from 'utils/nigerian-states';
import { StepProps } from '.';
import { PaStr } from 'components/Text';

interface Step1FormData {
    cities: string[]
}


const Step1 = ({ onForward, NextButton, BackButton, onBackward, value }: StepProps<Step1FormData>) => {
    const [formState, setFormState] = useState<Step1FormData>(value ?? { cities: [] })
    return <Pane>

        <Pane textAlign='center' marginBottom={majorScale(4)}>
            <Text.Su>What Cities Does Your Business Support ?</Text.Su>
            <Text.Pa marginTop={majorScale(1)}>This information will be used to restrict the locations customers can order from.</Text.Pa>
        </Pane>
        <Pane>
            <Pane marginBottom={majorScale(1)}>
                <Text.PaStr >What cities in <span style={{ color: PRIMARY }}>{'Nigeria'}</span> do you support shipping ?</Text.PaStr>
            </Pane>
            <Card background={WHITE} padding={majorScale(2)} maxHeight={'70vh'} overflow='auto' boxShadow="0px 0px 10px 1px rgba(0,0,0,0.1)">
                <Pane marginBottom={majorScale(1)}>
                    <PaStr>Cities</PaStr>
                </Pane>
                <CheckBoxGroup
                    options={nigerianStates}
                    onChange={(value) => setFormState({ ...formState, cities: value })}
                    value={formState.cities}
                />

            </Card>
        </Pane>
        <NextButton disabled={formState.cities.length < 1} onClick={() => {
            onForward(formState)
        }} />
        {/* <BackButton
            onClick={onBackward}
        /> */}
    </Pane>


}

export default Step1