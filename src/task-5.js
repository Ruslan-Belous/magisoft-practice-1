
export default function trim(text, maxLength) {
    if (text.length < 0 || maxLength <= 0) {
        throw RangeError('incorect length')
    }
    else if (text.length > maxLength) {
        return text.slice(0, maxLength - 1) + "\u2026"
    }
    else if
        (text.length <= maxLength) {
        return text
    }
}
