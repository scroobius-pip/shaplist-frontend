import { Logo } from 'components'
import NavBar from 'components/NavBar'
import { BACKGROUND } from 'config/colors'
import { defaultTheme, Pane, Theme, ThemeProvider, majorScale } from 'evergreen-ui'
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
    },


}

const Layout = ({ children }: Props) => {
    return <ThemeProvider value={theme}>
        <Pane maxWidth={1200} margin='auto'>

            <NavBar />
            <Pane
                marginTop={majorScale(6)} paddingX={'2vw'}
            >
                {children}
            </Pane>
        </Pane>
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