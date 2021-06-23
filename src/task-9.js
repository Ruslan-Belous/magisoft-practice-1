
export default function merge(data) {
    let result = {}
    for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
            if (result[key]) {
                result[key].push(data[i][key])
            }
            else {
                result[key] = []
                result[key].push(data[i][key])
            }
        }
    }
    return result
}