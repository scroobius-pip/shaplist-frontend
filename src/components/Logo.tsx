import React from 'react'
import logo from 'public/storefront_shaplist_logo.svg'
import smallLogo from 'public/icon_logo.svg'
import Image from 'next/image'

export const SmallLogo = () => {
    return <Image alt='shaplist logo' src={smallLogo} />
}


const Logo = () => {
    return (<Image alt='shaplist logo' src={logo} />);
}


export default Logo