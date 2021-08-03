import { Logo, Text } from 'components'
import { BACKGROUND, WHITE, PRIMARY } from 'config/colors'
import { Pane, Card, majorScale, Button, ChevronForwardIcon, ArrowRightIcon, ArrowLeftIcon, TickIcon } from 'evergreen-ui'
import useSteps from 'hooks'



const Page = () => {
    const { Steps, back, forward, currentPage, } = useSteps()
    const Next = () => <Button onClick={forward} appearance="primary" background={PRIMARY} width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={ArrowRightIcon}>Next</Button>
    const Back = () => <Button onClick={back} appearance="minimal" width='100%' marginTop={majorScale(1)} size={'large'} iconBefore={ArrowLeftIcon}>Back</Button>
    const Continue = () => <Button onClick={() => { }} appearance="primary" intent='success' width='100%' marginTop={majorScale(3)} size={'large'} iconAfter={TickIcon}>Continue</Button>

    return <>
        <Pane display='flex' alignItems='center' minHeight='100vh' flexDirection='column'>
            <Pane margin={'2vw'} maxWidth={500} textAlign='center'>

                <Text.Su>Welcome to Shaplist Storefront, here's some things you can do:</Text.Su>
                <Card background={WHITE} padding={majorScale(3)} marginTop={majorScale(3)}>

                    <Steps>
                        <Pane>
                            <Pane > <Text.PaStr>#1. Orders made from your Shaplist Storefront website are sent directly to your WhatsApp or Phone SMS</Text.PaStr></Pane>
                            <Next />
                        </Pane>
                        <Pane>
                            <Pane > <Text.PaStr>#2. Link your Shaplist page on your instagram, twitter and facebook profiles.</Text.PaStr></Pane>
                            <Next />
                            <Back />
                        </Pane>
                        <Pane>
                            <Pane> <Text.PaStr>#3. Schedule the time and day an item should be available.</Text.PaStr></Pane>
                            <Next />
                            <Back />
                        </Pane>
                        <Pane>
                            <Pane > <Text.PaStr>#4. Organize a group buy</Text.PaStr></Pane>
                            <Next />
                            <Back />
                        </Pane>
                        <Pane>
                            <Pane > <Text.PaStr>#5. Schedule product availability and open time windows when a product can be ordered.</Text.PaStr></Pane>
                            <Continue />
                        </Pane>

                    </Steps>

                </Card>
            </Pane>
        </Pane>

        <style jsx global>
            {`
            body {
                background: ${'#FFDDC7'}
            }
            `}
        </style>
    </>
}

export default Page