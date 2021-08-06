import { Text } from 'components'
import useSteps from 'hooks'
import React from 'react'


const Page = () => {
    const { Steps, back, forward, currentPage, } = useSteps()

    return <>
        <Text.He>What Locations Does Your Business Support ?</Text.He>
        <Text.Su>This information will be used to restrict the locations customers can order from.</Text.Su>


    </>
}

export default Page