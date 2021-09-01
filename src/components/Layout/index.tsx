import { Logo } from 'components'
import NavBar from 'components/NavBar'
import { BACKGROUND } from 'config/colors'
import { defaultTheme, Pane, Theme, ThemeProvider, majorScale } from 'evergreen-ui'
import React, { useState } from 'react'
import CartVisibilityContext from 'context/CartVisibilityContext'
import { useSideSheet } from 'hooks'
import Cart from 'components/Cart/Cart'
import Footer from 'components/Footer'
interface Props {
    children: React.ReactElement
    showNav: boolean
    showFooter: boolean
}

const theme = {
    ...defaultTheme,
    fontFamilies: {
        display: 'Poppins, sans-serif',
        ui: 'Poppins, sans-serif',
        mono: 'Poppins, sans-serif'
    },


}

const Layout = ({ children, showNav = true, showFooter = true }: Props) => {

    const { WrappedComponent: CartSideSheet, toggleVisible, isVisible } = useSideSheet(Cart)
    const cartContextValue = { setCartVisibility: (visible: boolean) => toggleVisible(visible, {}), value: isVisible }

    return <ThemeProvider value={theme}>
        <CartSideSheet />
        <CartVisibilityContext.Provider value={cartContextValue}>
            <Pane display='flex' flexDirection='column' height='100%' maxWidth={1200} margin='auto'>
                {showNav && <Pane marginBottom={majorScale(6)}>
                    <NavBar user={{ name: 'Shaplist Official' }} />
                </Pane>
                }
                <Pane
                    flex='1 0 auto'
                    paddingX={'2vw'}
                >
                    {children}
                </Pane>
                <Pane flexShrink={0}>
                    {showFooter && <Footer />}
                </Pane>
            </Pane>
        </CartVisibilityContext.Provider>

    </ThemeProvider>
}

export default Layout