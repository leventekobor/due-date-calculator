# Due date calculator home assigment

## Install

- required node version: `v12.18.0+`
- required npm version: `6.14.7+`

```
npm i
```

## Usage

```
import dueDateCalculator from './dueDateCalculator.js'

const submitTime = new Date("2020-11-16T10:30:31Z");
const turnaroundTime = 35;
const dueDate = dueDateCalculator(submitTime, turnaroundTime);

console.log(dueDate);
```

## Tests

```
npm test
```