import { Button, SelectMenu } from 'evergreen-ui'
import React from 'react'

type Value = string
interface Props {
    onChange: (value: Value) => any
    value: Value
    title: string
    options: Array<{ label: string, value: Value }>
}

const _SelectMenu = ({ onChange, value, title, options }: Props) => {

    return <SelectMenu
        title={title}
        options={options}
        selected={value}
        onSelect={({ value, label }) => onChange(value.toString())}
    >
        <Button>{value || title}</Button>
    </SelectMenu>

}

export default _SelectMenu