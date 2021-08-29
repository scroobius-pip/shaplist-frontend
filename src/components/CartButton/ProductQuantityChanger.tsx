import { He, Pa, PaStr, Su } from 'components/Text'
import { GREY } from 'config/colors'
import { majorScale, MinusIcon, AddIcon, Icon, Pane, PlusIcon, IconButton } from 'evergreen-ui'
import React from 'react'

interface Props {
    units: number
    onSubtract: () => any
    onAdd: () => any
}

const ProductQuantityChanger = ({ units, onSubtract, onAdd }: Props) => {
    return <Pane
        borderRadius={majorScale(1)}
        background={GREY}
        width='100%'
        display='flex'
        justifyContent='space-around'
        padding={majorScale(1)}
        alignItems='center'
    >
        <IconButton onClick={onSubtract} flex={1} icon={MinusIcon} />
        <Pane textAlign={'center'} flex={4}>
            <PaStr>{units} Unit{units > 1 ? 's' : ''}</PaStr>
        </Pane>
        <IconButton onClick={onAdd} flex={1} icon={PlusIcon} />
    </Pane>
}

export default ProductQuantityChanger