import { Button, Pane,majorScale } from 'evergreen-ui'
import React from 'react'
import { Facebook, Google, Twitter } from './Icon/index'


const SocialLoginButton = () => {
    return < Pane display='grid' gap={majorScale(1)}>
    <Button backgroundColor='#F3F5F8' onClick={()=>{}} iconBefore={<Twitter size={majorScale(3)} />} size='large'>Login with Twitter</Button>
    <Button onClick={()=>{}} iconBefore={<Facebook size={majorScale(3)}/>} size='large'>Login with Facebook</Button>
    <Button   onClick={()=>{}} iconBefore={<Google size={majorScale(3)}/>} size='large'>Login with Google</Button>
  
    </Pane>
}

export default SocialLoginButton 