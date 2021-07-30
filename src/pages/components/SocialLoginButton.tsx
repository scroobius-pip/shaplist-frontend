import { Button } from 'evergreen-ui'
import React from 'react'

interface Props {
    onClick: () => any
    icon: React.ReactElement
    text: string
}

const SocialLoginButton = ({ onClick, icon, text }: Props) => {
    return <Button onClick={onClick} iconBefore={icon} size='large'>{text}</Button>
}

export default SocialLoginButton