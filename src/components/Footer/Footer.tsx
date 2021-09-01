import { SmallLogo } from 'components/Logo'
import { No, Pa, PaStr } from 'components/Text'
import { BACKGROUND, GREY, ORANGE, PRIMARY } from 'config/colors'
import { majorScale, Pane } from 'evergreen-ui'
import Link from 'next/link'
import React from 'react'

interface Props {

}

const Footer = () => {
    return <Pane display='flex' justifyContent='center' marginTop={majorScale(6)} padding={majorScale(2)}>
        <Link href='/'>
            <Pane background={GREY} padding={majorScale(2)} borderRadius={majorScale(3)} display='flex' cursor='pointer' flexDirection='row' gap={majorScale(2)} alignItems='center'>
                <SmallLogo />
                <PaStr color={PRIMARY}>Created with Shaplist Storefront</PaStr>
            </Pane>
        </Link>
    </Pane>
}

export default Footer