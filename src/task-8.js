
export default function getTopLetter(str) {
    let charCount = new Map()
    let maxChar = ''
    for (let char of str) {
        let value = charCount.get(char)
        if (charCount.has(char)) {
            charCount.set(char, value + 1)
        } else {
            charCount.set(char, 1)
        }
    }
    let max = Math.max(...charCount.values())
    for (let [key, value] of charCount) {
        if (value === max) {
            maxChar = key
        }
    }
    return maxChar
}