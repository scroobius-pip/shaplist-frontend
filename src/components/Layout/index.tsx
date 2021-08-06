import { Logo } from 'components'
import { defaultTheme, Theme, ThemeProvider } from 'evergreen-ui'
import React from 'react'

interface Props {
    children: React.ReactElement
}

const theme = {
    ...defaultTheme,
    fontFamilies: {
        display: 'Poppins, sans-serif',
        ui: 'Poppins, sans-serif',
        mono: 'Poppins, sans-serif'
    }

}

const Layout = ({ children }: Props) => {
    return <ThemeProvider value={theme}>
        {/* <Logo /> */}
        {children}
    </ThemeProvider>
}

export default Layout