
export default function getNthItem(a, n) {
    let s = [0]
    for (let i = 1; i <= n; i++) {
        s[i] = a - 2 * s[i - 1]
    }
    return s[n]
}
