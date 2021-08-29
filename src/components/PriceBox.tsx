import { DANGER, DARK_GREY, ORANGE } from 'config/colors'
import { Heading, majorScale, Pane, Strong, Text } from 'evergreen-ui'
import React from 'react'
import calculatePercentage from 'utils/calculateStockPercentage'
import { He, Pa } from './Text'
import ago from 's-ago'

type Props = Pick<Product, 'price' | 'limitedTime' | 'limitedStock' | 'groupBuying'>
type ProductTimeStatus = 'ongoing' | 'ended' | 'pending'


const ProgressBar = ({ percentage = 0 }) => {
    return <Pane background={DARK_GREY} height={6} width={'100%'} position='relative' borderRadius={6}>
        <Pane borderRadius={6} width={`${percentage}%`} height='100%' background={ORANGE} />
    </Pane>
}

const PriceBox = ({ limitedTime, limitedStock, price, groupBuying }: Props) => {
    return <Pane width='100%'>
        {price && <Pane>
            <He>{price.currency} {price.value} {groupBuying && <Strong >Per Unit</Strong>}</He>

        </Pane>}
        {groupBuying && <Pane marginBottom={majorScale(1)}>
            <Strong size={300}>1 unit = {groupBuying.unitDescription}</Strong>
            <Text size={300} display='block' color="muted">{groupBuying.unitsRemainingInGroup} of {groupBuying.unitPerGroup} units remaining to start the next group buy</Text>
        </Pane>}
        {limitedStock && <ProgressBar percentage={calculatePercentage(limitedStock.started, limitedStock.remaining)} />}
        <Pane marginTop={majorScale(1)} display='flex' width='100%' justifyContent='space-between'>
            {limitedStock && <Heading size={100} color={DANGER}>{calculatePercentage(limitedStock.started, limitedStock.remaining)}% Claimed</Heading>}
            {limitedTime && <Heading size={100} color={DANGER}>{
                displayTimeRemaining(limitedTime.epochStart, limitedTime.epochExpiring)
            }</Heading>}
        </Pane>
    </Pane >
}


const displayTimeRemaining = (msEpochStart: number, msEpochExpiring: number) => {
    const msCurrentEpoch = getCurrentEpoch()
    const timeStatus = getProductTimeStatus(msCurrentEpoch, msEpochStart, msEpochExpiring)
    const msTimeRemaining = getTimeRemaining(msCurrentEpoch, msEpochStart, msEpochExpiring, timeStatus)
    const timeString = formatRelativeTime(msCurrentEpoch, msTimeRemaining)
    return {
        ongoing: 'Ends',
        ended: 'Ended',
        pending: 'Starting'
    }[timeStatus] + ' ' + timeString
}

const getTimeRemaining = (msCurrentEpoch: number, msEpochStart: number, msEpochExpiring: number, timeStatus: ProductTimeStatus): number => {
    switch (timeStatus) {
        case 'pending':
            return msEpochStart
        case 'ongoing':
            return msEpochExpiring
        case 'ended':
            return msEpochExpiring

    }
}

const formatRelativeTime = (msCurrentEpoch: number, msTime: number): string => {
    return ago(new Date(msTime), 'hour')
}


const getCurrentEpoch = () => {
    return (new Date()).getTime()
}


const getProductTimeStatus = (msCurrentEpoch: number, msEpochStart: number, msEpochExpiring: number): ProductTimeStatus => {
    return (msCurrentEpoch > msEpochStart ?
        (msCurrentEpoch > msEpochExpiring ? 'ended' : 'ongoing')
        : 'pending')
}
export default PriceBox