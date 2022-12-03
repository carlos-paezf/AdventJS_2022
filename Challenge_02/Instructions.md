# Challenge #02: Nobody wants to do extra hours at work (English)

## Instructions

A millionaire has bought a social network and it doesn´t bring goog news. He has announced that **each time a working day is lost due to a holiday**, it will have to be compensated with **tow extra hours another day of the same year**.

Obviously the people who work in the company have not made the slightest joke and are **preparing a program that tells them the number of extra hours they would do** in the year if the new rule were applied.

Since it is office work, their working hours are **from Monday to Friday**. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done that year:

```js
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
```

Things to keep in mind:

- The year can be a leap year. Make the checks you need for it, if necessary.
- Although the holiday is December 31, the extra hours will be done the same year.
- `Date.getDay()` method return the day of the week of a date, 0 is Sunday, 1 es Monday, etc.

## Results

All test passed!

### Test #01: return type

Expected: `number`

### Test #02: `countHours(2023, ['01/06', '04/01', '12/25'])`

Expected: `4`

### Test #03: `countHours(2022, ['01/06', '04/01', '12/25'])`

Expected: `4`

### Test #04: `countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])`

Expected: `10`

### Test #05: `countHours(2000, ['01/01'])`

Expected: `0`

## Score: 121

- **2198** ops/s (Higher is better)
- Cyclomatic complexity: **1** (Lower is better)
- Maintainability: **136%** (Higher is better)

> Challenges are scored depending on the quality of your solution. We use different factors such as cyclomatic complexity and execution speed. The number of lines is not a determining factor.
