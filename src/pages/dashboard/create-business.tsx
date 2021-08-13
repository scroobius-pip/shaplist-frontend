import { PaStr, Pa } from 'components/Text';
import { PRIMARY } from 'config/colors';
import { Button, majorScale, Pane, ArrowLeftIcon, ArrowRightIcon } from 'evergreen-ui'
import { Step1, Step2 } from 'features/CreateBusinessFormSteps';
import useSteps from 'hooks'
import React, { useState } from 'react'


type FormData = {
    [_: string]: any
}

interface StepStateProps {
    onSubmit: (values: any) => any
    Step: React.FunctionComponent<{ onSubmit: (data: any) => any }>
    Next?: React.FunctionComponent<{ disabled: boolean, onClick: (values: any) => any }>
    Back?: React.FunctionComponent<{ disabled: boolean, onClick: (values: any) => any }>
}

const useStepFormState = (onSubmit: StepStateProps['onSubmit'], Step: StepStateProps['Step'], Next: StepStateProps['Next'], Back: StepStateProps['Back']) => {
    const [formState, setFormState] = useState<any>()

    return <>
        <Step onSubmit={(data) => { setFormState(data) }} />
        {Next && <Next disabled onClick={onSubmit} />}
        {Back && <Back disabled onClick={() => { }} />}
    </>
}


const Page = () => {
    type ButtonProps = { disabled?: boolean, onClick?: () => any }
    const { Steps, back, forward, currentPage, } = useSteps()
    const Next = ({ disabled = false, onClick }: ButtonProps) => <Button disabled={disabled} onClick={onClick} appearance="primary" background={PRIMARY} width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={ArrowRightIcon}>Next</Button>
    const Back = ({ disabled = false, onClick }: ButtonProps) => <Button onClick={onClick} appearance="minimal" width='100%' marginTop={majorScale(1)} size={'large'} iconBefore={ArrowLeftIcon}>Back</Button>
    const [stepsState, setStepsState] = useState<FormData>()


    return <Pane padding={majorScale(2)} >
        <Steps>
            <Step1
                value={stepsState?.step1}
                onForward={(data) => {
                    console.log(data)
                    setStepsState({ ...stepsState, step1: data })
                    forward()
                }}
                onBackward={back}
                NextButton={Next}
                BackButton={Back}
            /> 

            <Step2
                value={stepsState?.step2}
                onForward={(data) => {
                    setStepsState({
                        ...stepsState,
                        step2: data
                    })
                    forward()
                }}
                onBackward={(data) => {
                    setStepsState({
                        ...stepsState,
                        step2: data
                    })
                    back()
                }}
                NextButton={Next}
                BackButton={Back}
            />
        </Steps>
        <Pane textAlign='center' marginTop={majorScale(2)}>
            <Pa>Step {currentPage} of 3</Pa>
        </Pane>
        <style jsx global>
            {`
            body {
                background: ${'#F5F5F5'}
            }
            `}
        </style>
    </Pane>
}


export default Page