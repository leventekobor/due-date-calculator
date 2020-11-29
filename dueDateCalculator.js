export default function dueDateCalculator(submitTime, turnaroundTime) {
    if(turnaroundTime === 0) {
        return new Date(submitTime)
    }

    let currentDate = new Date(submitTime)

    if (turnaroundTime % 1 !== 0) {
        currentDate.setMinutes(currentDate.getMinutes() + (turnaroundTime % 1 * 60))
        turnaroundTime -= turnaroundTime % 1
    }
    
    let turnaroundTimeIndex = turnaroundTime / 8

    for(let j = 0; j < (8 * (turnaroundTimeIndex % 1)); j++) {
        currentDate = addHours(currentDate, 1)
        if (!checkIsWorkingHour(currentDate, 9, 17)) {
            currentDate = addHours(currentDate, 16)
            turnaroundTimeIndex++
        }
    }

    for(let i = 0; i < (Math.floor(turnaroundTimeIndex)); i++) {
        currentDate = addDays(currentDate, 1)
        if (!checkIsWorkingDay(currentDate)) {
            if(currentDate.getDay() === 0 ) {
                currentDate = addDays(currentDate, 1)                
            } 
            if(currentDate.getDay() == 6) {
                currentDate = addDays(currentDate, 2)
            }
        }
    }

    return currentDate
}

function checkIsWorkingHour(date, startHour, endHour) {
    let hour = new Date(date).getHours()
    return hour >= startHour && hour <= endHour
}

function checkIsWorkingDay(date) {
    let day = new Date(date).getDay()
    let openingDays = [1, 2, 3, 4, 5]
    return openingDays.includes( day )
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function addHours(date, hours) {
    let result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
}
