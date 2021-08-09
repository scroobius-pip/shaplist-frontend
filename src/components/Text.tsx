import { BoxComponent, Heading, Paragraph, Strong, Text, TextOwnProps } from 'evergreen-ui'
import React from 'react'
interface Props {
    children: any
    [_: string]: any
}

interface Typography {
    [name: string]: React.FunctionComponent<Props>
}

export const He = ({ children, ...props }: Props) => <Heading {...props} size={800}>{children}</Heading> //heading
export const Su = ({ children, ...props }: Props) => <Heading  {...props} size={600}>{children}</Heading> //sub heading
export const Pa = ({ children, ...props }: Props) => <Paragraph   {...props} size={400}>{children}</Paragraph> //paragraph
export const PaStr = ({ children, ...props }: Props) => <Strong  {...props} size={400}>{children}</Strong> //paragraph strong
export const No = ({ children, ...props }: Props) => <Text  {...props} size={400}>{children}</Text> //normal

export default {
    He,
    Su,
    Pa,
    No
} as Typography