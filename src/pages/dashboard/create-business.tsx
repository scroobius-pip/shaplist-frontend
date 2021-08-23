import { PaStr, Pa, He, Su, No } from 'components/Text';
import { PRIMARY } from 'config/colors';
import { Button, majorScale, Pane, ArrowLeftIcon, ArrowRightIcon } from 'evergreen-ui'
import { Step1, Step2, Step3 } from 'features/CreateBusinessFormSteps';
import { useSteps } from 'hooks'
import React, { useState } from 'react'
import Link from 'next/link'

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
    const { Steps, back, forward, currentPage, stepCount } = useSteps()
    const Next = ({ disabled = false, onClick }: ButtonProps) => <Button disabled={disabled} onClick={onClick} appearance="primary" background={PRIMARY} width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={ArrowRightIcon}>Next</Button>
    const Finish = ({ disabled = false, onClick }: ButtonProps) => <Button disabled={disabled} intent='success' onClick={onClick} appearance="primary" background={PRIMARY} width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={ArrowRightIcon}>Complete Registration</Button>
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
            <Step3
                value={stepsState?.step3}
                onForward={(data) => {
                    setStepsState({
                        ...stepsState,
                        step3: data
                    })
                    forward()
                }}
                onBackward={(data) => {
                    setStepsState({
                        ...stepsState,
                        step3: data
                    })
                    back()
                }}
                NextButton={Finish}
                BackButton={Back}
            />
            <>
                <Pane>
                    <Pane textAlign='center'>
                        <He>All Done! Let's Add Your First Product.</He>
                        <No color='muted'>Or skip for now and add it later.</No>
                    </Pane>
                    <Link href='/dashboard/create-product'>
                        <Button onClick={() => { }} appearance="primary" background={PRIMARY} width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={ArrowRightIcon}>Continue</Button>
                    </Link>
                    <Link href='/dashboard'>
                        <Button marginTop={majorScale(1)} appearance="default" size={'large'} width='100%'>Skip</Button>
                    </Link>
                </Pane>
            </>
        </Steps>
        <Pane textAlign='center' marginTop={majorScale(2)}>
            <Pa>Step {currentPage} of {stepCount}</Pa>
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