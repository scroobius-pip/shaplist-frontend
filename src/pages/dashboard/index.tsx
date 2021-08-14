import { Su, No, PaStr } from 'components/Text'
import { Button, Pane, EyeOpenIcon, CogIcon, LinkIcon, TickIcon, majorScale, Card, Pill, StatusIndicator, minorScale, PlusIcon } from 'evergreen-ui'
import React from 'react'
import { BACKGROUND, PRIMARY, WHITE } from 'config/colors';

const Page = () => {
    return <Pane>
        <Pane height={150} background={'grey'}></Pane>
        <Pane padding={'2vw'}>
            <Pane paddingY={majorScale(2)}>
                <PaStr>Good Morning,</PaStr>
                <Su>Hero Cafe</Su>
            </Pane>
            <Pane >
                <Button size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={EyeOpenIcon}>
                    View Website
                </Button>
                <Button size='large' width='100%' iconBefore={CogIcon} marginTop={majorScale(1)}>
                    Edit Profile Settings
                </Button>
                <Button size='large' width='100%' iconBefore={LinkIcon} marginTop={majorScale(1)}>
                    Copy Website Url
                </Button>
            </Pane>
            <Pane paddingY={majorScale(4)}>
                <PaStr>Tasks to complete</PaStr>
                <Card background={WHITE} marginTop={majorScale(1)} padding={majorScale(1)}>
                    <StatusIndicator padding={minorScale(1)} display='block' color="success"><PaStr color='success'>Update your business details</PaStr></StatusIndicator>
                    <StatusIndicator padding={minorScale(1)} display='block' color="warning"><PaStr color='warning'>Upload your first product</PaStr></StatusIndicator>
                </Card>
            </Pane>
            <Button size='large' appearance='primary' background={PRIMARY} width='100%' iconBefore={PlusIcon}>
                Add Product
            </Button>
            <Pane paddingY={majorScale(1)}>
                <PaStr>Products</PaStr>
            </Pane>
        </Pane>
        <style jsx global>
            {`
            body {
                background: ${BACKGROUND}
            }
            `}
        </style>
    </Pane>
}

export default Page