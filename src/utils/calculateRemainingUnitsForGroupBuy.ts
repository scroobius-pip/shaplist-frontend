
type T = Exclude<Product['groupBuying'], undefined>

function calculateRemainingUnitsForGroupBuy({ unitDescription, unitPerGroup, unitsRemainingInGroup }: T): number {
    return 3
}

export default calculateRemainingUnitsForGroupBuy