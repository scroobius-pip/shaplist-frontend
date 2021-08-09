import React from 'react'
import { Button } from 'evergreen-ui'
import { GREY } from 'config/colors'

interface Props {
    onClick: () => any
    children: [React.ReactElement, string]
}

const IconButton = ({ onClick, children }: Props) => {
    return <Button onClick={onClick} backgroundColor={GREY} appearance='minimal' iconBefore={children[0]} size='large'>{children[1]}</Button>
}

export default IconButton