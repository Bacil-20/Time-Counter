const myDatePicker = MCDatepicker.create({
    el: '#Target-date'
})
const targetDate = document.getElementById('Target-date')
function x() {
    const dates = new Date(targetDate.value)
    const nor = new Date()
    const TotalSec = (dates - nor) / 1000

    const Days = Math.floor(TotalSec / 3600 / 24)
    const Hours = Math.floor(TotalSec / 3600) % 24
    const Mins = Math.floor(TotalSec / 60) % 24
    const Seconds = Math.floor(TotalSec) % 60

    document.getElementById('Days').innerHTML = targetDate.value ? Formate(Days) : 0
    document.getElementById('Hours').innerHTML = targetDate.value ? Formate(Hours) : 0
    document.getElementById('Mins').innerHTML = targetDate.value ? Formate(Mins) : 0
    document.getElementById('Seconds').innerHTML = targetDate.value ? Formate(Seconds) : 0
}
function Formate(time) {
    if (time < 0) {
        return -time < 10 ? `0${-time}` : -time
    } else if (time < 10) {
        return `0${time}`
    } else {
        return time
    }

    // time <10 ?  : time
}
x()
setInterval(x, 1000)
