import React from 'react'
import logo from 'public/storefront_shaplist_logo.svg'
import Image from 'next/image'
import { majorScale } from 'evergreen-ui';

const Logo = () => {
    return (<Image alt='shaplist logo' src={logo} />);
}

export default Logo