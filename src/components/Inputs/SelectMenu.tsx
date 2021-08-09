import React from 'react'
import { CaretDownIcon, RadioGroup, Button, majorScale, Pane, SelectMenu, IconButton, SelectMenuItem } from 'evergreen-ui'
import { UseFormRegister } from 'react-hook-form'


interface Props<IOption = any> {
    options: SelectMenuItem[]
    children?: React.ReactElement
    title: string
    heading?: React.ReactElement
    register?: UseFormRegister<I>
}

const Select = ({ options, children, title }: Props) => {
    return <>
        <SelectMenu

            width='100%'
            title={title}
            options={options}

        >
            {children}
        </SelectMenu>
    </>
}

export default Select