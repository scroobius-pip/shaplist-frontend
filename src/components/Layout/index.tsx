import { Logo } from 'components'
import NavBar from 'components/NavBar'
import { BACKGROUND } from 'config/colors'
import { defaultTheme, Pane, Theme, ThemeProvider, majorScale } from 'evergreen-ui'
import React, { useState } from 'react'
import CartVisibilityContext from 'context/CartVisibilityContext'
import { useSideSheet } from 'hooks'
import Cart from 'components/Cart/Cart'
interface Props {
    children: React.ReactElement
}

const theme = {
    ...defaultTheme,
    fontFamilies: {
        display: 'Poppins, sans-serif',
        ui: 'Poppins, sans-serif',
        mono: 'Poppins, sans-serif'
    },


}

const Layout = ({ children }: Props) => {

    const { WrappedComponent, toggleVisible, isVisible } = useSideSheet(Cart)
    const cartContextValue = { setCartVisibility: (visible: boolean) => toggleVisible(visible, {}), value: isVisible }
    // useEffect(() => { })
    return <ThemeProvider value={theme}>
        <WrappedComponent />
        <CartVisibilityContext.Provider value={cartContextValue}>

            <Pane maxWidth={1200} margin='auto'>

                <NavBar />
                <Pane
                    marginTop={majorScale(6)} paddingX={'2vw'}
                >
                    {children}
                </Pane>
            </Pane>
        </CartVisibilityContext.Provider>
        <style jsx global>
            {`
            body {
                background: ${BACKGROUND}
            }
            `}
        </style>
    </ThemeProvider>
}

export default Layout