import { SocialLogin, Logo } from '@components'
import { Pa, Su } from 'components/Text'
import { BLUE, WHITE } from 'config/colors'
import { Pane, Card, majorScale } from 'evergreen-ui'

const Page = () => {
    return <>
        <Pane display='flex' justifyContent='center' alignItems='center' minHeight='100vh' flexDirection='column'>
            <Pane margin='2vw' maxWidth={400}>
                <Card background={WHITE} padding={majorScale(3)}>
                    <Pane marginBottom={majorScale(4)}> <Logo /></Pane>
                    <Pane marginBottom={majorScale(4)}>
                        <Su>Log in</Su>
                        <Pa>Continue to Shaplist Storefront</Pa>
                    </Pane>
                    <Pane>
                        <SocialLogin />
                    </Pane>

                </Card>
                <Pane marginTop={majorScale(6)}>
                    <Su>
                        <i>Everyone</i> already has an Instagram. Shaplist makes your business <b style={{ color: BLUE }}>stand out</b> from everyone else.
                    </Su>
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