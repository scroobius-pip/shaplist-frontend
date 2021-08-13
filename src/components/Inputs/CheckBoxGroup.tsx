import { Checkbox } from 'evergreen-ui'
import React from 'react'
interface Props {
    options: string[]
    onChange: (options: string[]) => any
    value: string[]
}


const CheckBoxGroup = ({ options, onChange, value = [] }: Props) => {
    return <>
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