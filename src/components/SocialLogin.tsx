import { IconButton, Icon } from 'components'
import { Pane, majorScale } from 'evergreen-ui'
import React from 'react'
import { Facebook, Google, Twitter } from 'components/Icon'



const Socials = () => {
    return < Pane display='grid' gap={majorScale(1)}>
        <IconButton onClick={() => { }}>
            <Twitter size={majorScale(3)} />
            Login with Twitter
        </IconButton>

        <IconButton onClick={() => { }}>
            <Facebook size={majorScale(3)} />
            Login with Facebook
        </IconButton>

        <IconButton onClick={() => { }}>
            <Google size={majorScale(3)} />
            Login with Google
        </IconButton>

    </Pane>
}

export default Socials