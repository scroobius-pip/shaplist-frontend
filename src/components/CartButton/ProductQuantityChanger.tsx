import { Pa } from 'components/Text'
import { GREY } from 'config/colors'
import { majorScale, MinusIcon, AddIcon, Icon, Pane, PlusIcon, IconButton } from 'evergreen-ui'
import React from 'react'

interface Props {
    units: number

}

const ProductQuantityChanger = ({ units }: Props) => {
    return <Pane
        background={GREY}
        width='100%'
        display='flex'
        justifyContent='space-around'
        padding={majorScale(1)}
        alignItems='center'
    >
        <IconButton flex={1} icon={MinusIcon} />
        <Pa>{units} Units</Pa>
        <IconButton icon={PlusIcon} />
    </Pane>
}

export default ProductQuantityChanger