
export default function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    let sec = seconds - (hours * 3600) - (minutes * 60)
    let time = ''
    let suffix = ''
    time = (hours > 11) ? suffix += 'PM' : suffix += 'AM'
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    if (hours === 0) {
        hours = 12
    } else if (hours > 12) {
        hours = hours - 12
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    time = hours + ':' + minutes + ':' + sec + ' ' + suffix;
    return time
}

