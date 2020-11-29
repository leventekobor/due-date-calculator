import dueDateCalculator from './dueDateCalculator.js'

const submitTime = new Date("2020-11-20T16:30:31Z")
const refTime = new Date("2020-11-20T17:00:00Z")


console.log(dueDateCalculator(submitTime, 3))

