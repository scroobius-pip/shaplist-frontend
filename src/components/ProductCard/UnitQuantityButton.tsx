import { AddIcon, Button, Card, EditIcon, IconButton, majorScale, MinusIcon, Pane } from 'evergreen-ui'
import React from 'react'
import { Pa, PaStr } from 'components/Text'
import { GREY, WHITE } from 'config/colors'

const UnitQuantityButton = ({ value = 0 }) => {
    return <Pane background={GREY} display='flex' alignItems='center'>
        <IconButton appearance={'minimal'} icon={MinusIcon} />
        <Pane marginX={majorScale(1)}> <Pa>{value}</Pa></Pane>
        <IconButton appearance={'minimal'} icon={AddIcon} />
    </Pane>
}

export default UnitQuantityButton