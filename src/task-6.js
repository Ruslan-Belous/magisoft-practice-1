
export default function getStats(data) {
    let avg = data.reduce((prev, current) => (prev + current), 0) / data.length
    let max = Math.max(...data);
    let min = Math.min(...data);
    let obj = {
        min: data.length < 1 ? null : min,
        max: data.length < 1 ? null : max,
        avg: data.length < 1 ? null : avg
    }
    return obj
}
