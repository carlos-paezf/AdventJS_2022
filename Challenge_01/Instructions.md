# Challenge #1: Automating Christmas gift wrapping! (English)

## Instructions

This year the elves have bought a gift wrapping machine. But... it's not programmed! **We need to create an algorithm that helps it in the task**.

The machine receives an array with the gifts. Each gift is a `string`. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the `*` symbol and to wrap a gift the `*` symbol is placed so that it completely surrounds the string on all sides. For example:

```js
const gifts = [ 'book', 'game', 'socks' ]
const wrapped = wrapping( gifts )
console.log( wrapped )

/*
[
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
]
*/

/*
    ******  ******  *******
    *book*  *game*  *socks*
    ******  ******  *******
*/
```

AS you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

**Note:** `\n` is the character that represents a line break.

**Watch out!** Make sure you put the right number of `*` to wrap completely the string.

Good luck!

## Results

All test passed!

### Test #01: return type

Expected: `array`

### Test #02: `wrapping(gifts)`

Expected:

```js
[
 "******\n*book*\n******",
 "******\n*game*\n******",
 "*******\n*socks*\n*******"
]
```

### Test #03: `wrapping(["midu"])`

Expected:

```js
[
  "******\n*midu*\n******"
]
```

### Test #04: `wrapping(["a"])`

Expected:

```js
[
  "***\n*a*\n***"
]
```

### Test #05: wrapping an empty array should return an empty array

Expected:

```js
[]
```

## Score: 131

- **3034** ops/s (Higher is better)
- Cyclomatic complexity: **1** (Lower is better)
- Maintainability: **159%** (Higher is better)

> Challenges are scored depending on the quality of your solution. We use different factors such as cyclomatic complexity and execution speed. The number of lines is not a determining factor.
