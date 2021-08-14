import Text, { No } from 'components/Text'
import { Checkbox, Switch, majorScale } from 'evergreen-ui'
import React from 'react'
import CustomLabel from './Label'
interface Props {
    options: string[]
    onChange: (options: string[]) => any
    value: string[]
}


const CheckBoxGroup = ({ options, onChange, value = [] }: Props) => {
    return <>

        <CustomLabel description='Select all'  />
        <Switch
            hasCheckIcon
            height={majorScale(3)}
            checked={value.length === options.length}
            onChange={(e) => {
                switch (e.target.checked) {
                    case true:
                        onChange(options)
                        break;

                    case false:
                        onChange([])
                        break;
                }
            }}
            marginBottom={majorScale(1)}
        />
        {options.map(option => {
            return <Checkbox marginTop={0} key={option} value={option} checked={value.includes(option)} label={option} onChange={(e) => {

                switch (e.target.checked) {
                    case true:
                        onChange(Array.from(new Set([...value, option])))
                        break;
                    case false:
                        onChange(value.filter(s => s !== option))
                        break
                }
            }} />
        })}
    </>
}

export default CheckBoxGroup