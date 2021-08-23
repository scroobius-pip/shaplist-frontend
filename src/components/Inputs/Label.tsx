import { Paragraph, Label } from 'evergreen-ui'
import React from 'react'

interface Props {
    label?: string | React.ReactElement
    description?: string
}

const CustomLabel = ({ label, description }: Props) => {
    return <>
        <Label>{label}</Label>
        <Paragraph size={300} color="muted">{description}</Paragraph>
    </>
}

export default CustomLabel