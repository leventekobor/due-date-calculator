import dueDateCalculator from './dueDateCalculator.js'

const submitTime = new Date("2020-11-16T10:30:31Z")
const hoursBeforeWeekend = new Date("2020-11-20T16:30:31Z")
const submitTimeBeforWeekend = new Date("2020-11-20T10:30:31Z")
const submitTimeString = "2020-11-16T10:30:31Z"

test('Testing if only hours before weekend works fine', () => {
    expect(dueDateCalculator(hoursBeforeWeekend, 3).valueOf()).toBe(new Date("2020-11-23T11:30:31Z").valueOf())
})

test.each`
  hours | expectedDate
  ${0}  | ${new Date("2020-11-20T10:30:31Z")}
  ${8}  | ${new Date("2020-11-23T10:30:31Z")}
  ${16} | ${new Date("2020-11-24T10:30:31Z")}
`('Adding $hours hours to submit time (with date type input), overshooting the weekend', ({hours, expectedDate}) => {
    expect(dueDateCalculator(submitTimeBeforWeekend, hours).valueOf()).toBe(expectedDate.valueOf())
})

test.each`
  hours | expectedDate
  ${0}  | ${new Date("2020-11-16T10:30:31Z")}
  ${0.5}| ${new Date("2020-11-16T11:00:31Z")}
  ${1.5}| ${new Date("2020-11-16T12:00:31Z")}
  ${2}  | ${new Date("2020-11-16T12:30:31Z")}
  ${8}  | ${new Date("2020-11-17T10:30:31Z")}
  ${16} | ${new Date("2020-11-18T10:30:31Z")}
`('Adding $hours hours to submit time (with date type input)', ({hours, expectedDate}) => {
    expect(dueDateCalculator(submitTime, hours).valueOf()).toBe(expectedDate.valueOf())
})

test.each`
  hours | expectedDate
  ${0}  | ${new Date("2020-11-16T10:30:31Z")}
  ${8}  | ${new Date("2020-11-17T10:30:31Z")}
  ${16} | ${new Date("2020-11-18T10:30:31Z")}
`('Adding $hours hours to submit time (with string type input)', ({hours, expectedDate}) => {
    expect(dueDateCalculator(submitTimeString, hours).valueOf()).toBe(expectedDate.valueOf())
})
