import { majorScale, Pane, TextInputField, Button, ArrowRightIcon } from "evergreen-ui"
import React from "react"

const ComingSoonForm = () => {
    return <a href='https://docs.google.com/forms/d/e/1FAIpQLSdQEZE8fE7rBpArieczsIrrciDikb04vdu69rVJWN0CdsM3pQ/viewform?usp=sf_link'>
        <Button appearance='primary' height={majorScale(6)} iconAfter={ArrowRightIcon}>
            Get Reminded Once We Launch
        </Button>
    </a>
}

export default ComingSoonForm