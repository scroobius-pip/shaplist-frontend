export { default as Step1 } from './Step1'
export { default as Step2 } from './Step2'

export interface StepProps<Value> {
    value: any
    onForward: (values: Value) => any
    onBackward: (values: Value) => any
    NextButton: React.FunctionComponent<any>
    BackButton: React.FunctionComponent<any>
}