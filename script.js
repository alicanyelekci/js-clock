setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('.second')

function setClock() {
    const currentDate = new Date()
    // console.log(currentDate.getSeconds())
    const secondsRatio = currentDate.getSeconds() / 60 // divided by 60 to get percentage around the clock which will later be multiplied by 360 to get the angle
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60 // secondsRatio is added to have flow between minute marks
    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12 /// minuteRatio is added to have flow between hour marks
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()