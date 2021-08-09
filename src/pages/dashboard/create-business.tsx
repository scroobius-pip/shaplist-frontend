import { Text } from 'components'
import { CaretDownIcon, RadioGroup, Button, majorScale, Pane, SelectMenu, IconButton } from 'evergreen-ui'
import Step1 from 'features/CreateBusinessFormSteps';
import useSteps from 'hooks'
import React from 'react'
import { Controller, useForm } from "react-hook-form";


const Page = () => {
    const { Steps, back, forward, currentPage, } = useSteps()
    const { register, handleSubmit, control, watch, formState: { errors, touchedFields }, getValues } = useForm();

    return <>

        <Steps>
            <Step1 />
            <Step1 />
        </Steps>
        <style jsx global>
            {`
            body {
                background: ${'#F5F5F5'}
            }
            `}
        </style>
    </>
}

export default Page