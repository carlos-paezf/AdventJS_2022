# Challenge #03: How many packs of gifts can Santa carry? (English)

## Instructions

You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. **Each gift inside the pack is represented by a string** and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a **weight limit**.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a **maximum weight limit** that it can carry. The maximum weight limit of each reindeer is **equal to twice the number of letters in its name**.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. **You can't split gifts packs**.

```js
const packOfGifts = [ "book", "doll", "ball" ]
const reindeers = [ "dasher", "dancer" ]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts( packOfGifts, reindeers ) // 2
```

Things to keep in mind:

- The gifts pack can't be splitted.
- Gifts and reindeers' names length will always be greater than 0.

## Results

All test passed!

### Test #01: return type

Expected: `number`

### Test #02: `distributeGifts(packOfGifts, reindeers)`

Expected: `2`

### Test #03: `distributeGifts(['a', 'b', 'c'], ['d', 'e'])`

Expected: `1`

### Test #04: `it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])`

Expected: `10`

### Test #05: `distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])`

Expected: `0`

### Test #06: `distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])`

Expected: `26`

## Score: 149

- **3459** ops/s (Higher is better)
- Cyclomatic complexity: **1** (Lower is better)
- Maintainability: **34%** (Higher is better)

> Challenges are scored depending on the quality of your solution. We use different factors such as cyclomatic complexity and execution speed. The number of lines is not a determining factor.
