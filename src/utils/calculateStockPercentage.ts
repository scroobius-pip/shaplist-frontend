export default (startStock: number, remainingStock: number): number => {
    if (startStock === 0) return 0
    return Math.floor((remainingStock / startStock) * 100)
}