import { SocialLogin, Logo, Text } from 'components'
import { PRIMARY, WHITE } from 'config/colors'
import { Pane, Card, majorScale } from 'evergreen-ui'
import React from 'react'

const Page = () => {
    return <>
        <Pane display='flex' marginTop={'-10vh'} justifyContent='center' alignItems='center' minHeight='100vh' flexDirection='column'>
            <Pane margin='2vw' maxWidth={400}>
                <Card background={WHITE} padding={majorScale(3)}>
                    <Pane marginBottom={majorScale(4)}> <Logo /></Pane>
                    <Pane marginBottom={majorScale(4)}>
                        <Text.Su>Log in</Text.Su>
                        <Text.Pa>Continue to Shaplist Storefront</Text.Pa>
                    </Pane>
                    <Pane>
                        <SocialLogin />
                    </Pane>

                </Card>
                <Pane marginTop={majorScale(6)}>
                    <Text.Su>
                        <i>Everyone</i> already has an Instagram. Shaplist makes your business <b style={{ color: PRIMARY }}>stand out</b> from everyone else.
                    </Text.Su>
                </Pane>
            </Pane>

        </Pane>
        <style jsx global>
            {`
body {
    background:#FFDDC7
}
`}
        </style>
        <style>
            {`
            
            `}
        </style>
    </>
}

export default Page