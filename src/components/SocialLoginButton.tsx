import { Button, Pane, majorScale } from 'evergreen-ui'
import React from 'react'
import { Facebook, Google, Twitter } from './Icon/index'
import { GREY } from '../config/colors'

interface Props {
    onClick: () => any
    children: [React.ReactElement, string]
}

const SocialButton = ({ onClick, children }: Props) => {
    return <Button onClick={onClick} backgroundColor={GREY} appearance='minimal' iconBefore={children[0]} size='large'>{children[1]}</Button>

}

const Socials = () => {
    return < Pane display='grid' gap={majorScale(1)}>
        <SocialButton onClick={() => { }}>
            <Twitter size={majorScale(3)} />
            Login with Twitter
        </SocialButton>

        <SocialButton onClick={() => { }}>
            <Facebook size={majorScale(3)} />
            Login with Facebook
        </SocialButton>

        <SocialButton onClick={() => { }}>
            <Google size={majorScale(3)} />
            Login with Google
        </SocialButton>

    </Pane>
}

export default Socials