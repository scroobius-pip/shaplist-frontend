import { Text } from 'components'
import { GREY } from 'config/colors'
import { majorScale, Pane, TextInputField, Button, ArrowRightIcon, TextInput, Alert } from "evergreen-ui"
import React, { useState } from "react"
const SteinStore = require("stein-js-client");
const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/610cffc547873c2b7328ebfc"
)
const ComingSoonForm = () => {
    const [email, setEmail] = useState('')
    const [isComplete, setIsComplete] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [valid, setValid] = useState({ valid: true, message: '' })

    const submit = async () => {
        setLoading(true)
        const result = await store.append("Sheet1", [{ email }])
        console.log(result)
        setLoading(false)
        setIsComplete(true)
    }
    return <Pane background={GREY} padding={majorScale(2)} >
        <Text.Su>We're launching soon!</Text.Su>
        <Pane marginTop={majorScale(2)}>
            <Text.Pa>Enter your email below to get a reminder once we launch.</Text.Pa>
        </Pane>
        {!isComplete && <TextInputField value={email} onChange={(e: any) => setEmail(e.target.value)} marginTop={majorScale(2)} marginBottom={majorScale(1)} inputHeight={majorScale(5)} placeholder='Email' label='' />}
        {!isComplete ? <Button size={'large'} onClick={submit} width={'100%'} isLoading={isLoading} appearance='primary' >Remind Me</Button> :
            <Alert intent='success' marginTop={majorScale(2)} title="Great! we'll remind you once we're up and running." />}
    </Pane>
}

export default ComingSoonForm