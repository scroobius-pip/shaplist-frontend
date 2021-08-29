import calculateRemainingUnitsForGroupBuy from './calculateRemainingUnitsForGroupBuy'

test('calculateRemainingUnitsForGroupBuy()', () => {
    expect(calculateRemainingUnitsForGroupBuy({ unitsRemainingInGroup: 3, unitPerGroup: 5, unitDescription: '1kg' }))
        .toBe(3)
})