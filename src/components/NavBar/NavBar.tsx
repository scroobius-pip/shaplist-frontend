import Logo, { SmallLogo } from 'components/Logo'
import { PaStr } from 'components/Text'
import { SHADOW, WHITE } from 'config/colors'
import CartVisibiltyContext from 'context/CartVisibilityContext'
import { Pane, majorScale, Link, Button, LogInIcon, ShoppingCartIcon } from 'evergreen-ui'
import React from 'react'
import { useContext } from 'react'

const NavBar = () => {
    const { setCartVisibility, value } = useContext(CartVisibiltyContext)
    return <Pane
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        background={WHITE}
        padding={majorScale(2)}
        boxShadow={SHADOW}
        borderBottomLeftRadius={majorScale(2)}
        borderBottomRightRadius={majorScale(2)}
    >
        {/* <Logo /> */}
        <Pane display='flex' alignItems='center' gap={majorScale(2)}>
            <SmallLogo />
            <PaStr>
                Shaplist Official
            </PaStr>
        </Pane>

        <Button
            onClick={() => setCartVisibility(!value)}
            size={'large'}
            iconBefore={ShoppingCartIcon}
        >Cart</Button>

    </Pane>
}

export default NavBar