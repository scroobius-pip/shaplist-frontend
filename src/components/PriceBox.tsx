import { DANGER, DARK_GREY, ORANGE } from 'config/colors'
import { majorScale, Pane, Strong } from 'evergreen-ui'
import React from 'react'
import calculatePercentage from 'utils/calculateStockPercentage'
import { He } from './Text'
import ago from 's-ago'

type Props = Pick<Product, 'price' | 'limitedTime' | 'limitedStock'>
type ProductTimeStatus = 'ongoing' | 'ended' | 'pending'


const ProgressBar = ({ percentage = 0 }) => {
    return <Pane background={DARK_GREY} height={6} width={'100%'} position='relative' borderRadius={6}>
        <Pane borderRadius={6} width={`${percentage}%`} height='100%' background={ORANGE} />
    </Pane>
}

const PriceBox = ({ limitedTime, limitedStock, price }: Props) => {
    return <Pane width='100%'>
        {price && <He>{price.currency} {price.value}</He>}
        {limitedStock && <ProgressBar percentage={calculatePercentage(limitedStock.started, limitedStock.remaining)} />}
        <Pane marginTop={majorScale(1)} display='flex' justifyContent='space-between'>
            {limitedStock && <Strong size={300} color={DANGER}>{calculatePercentage(limitedStock.started, limitedStock.remaining)}% Claimed</Strong>}
            {limitedTime && <Strong size={300} color={DANGER}>{
                displayTimeRemaining(limitedTime.epochStart, limitedTime.epochExpiring)
            }</Strong>}
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