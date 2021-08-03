import { Heading, Paragraph, Strong, Text } from 'evergreen-ui'
import React from 'react'
interface Props {
    children: any
}

interface Typography {
    [name: string]: React.FunctionComponent<Props>
}

export const He = ({ children }: Props) => <Heading size={900}>{children}</Heading> //heading
export const Su = ({ children }: Props) => <Heading size={700}>{children}</Heading> //sub heading
export const Pa = ({ children }: Props) => <Paragraph size={500}>{children}</Paragraph> //paragraph
export const PaStr = ({ children }: Props) => <Strong size={500}>{children}</Strong> //paragraph
export const No = ({ children }: Props) => <Text size={400}>{children}</Text> //normal

export default {
    He,
    Su,
    Pa,
    No
} as Typography