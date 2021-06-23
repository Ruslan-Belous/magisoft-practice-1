
export default function sumDigits(n) {
    return n.toString().split('').reduce((sum, current) => sum + +current, 0)
}
