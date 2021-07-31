import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialLoginButton from '../components/SocialLoginButton'

export default {
    title: 'Social Login Button',
    component:SocialLoginButton
} as ComponentMeta<typeof SocialLoginButton>

const Template: ComponentStory<typeof SocialLoginButton> = (args) => <Button {...args} />;

export const Facebook = Template.bind({})

Facebook.args = {
    text: '',
icon:''
}