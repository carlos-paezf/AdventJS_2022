# Challenge #06: Creating xmas decorations (English)

## Instructions

A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. The have asked us for help to achieve it.

To **create the cubes**, a number with the desired size is passed to the program and it returns a `string` with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

```js
const cube = createCube(3)

// output:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

As you can see, the cube has three faces visually. The symbols used to build the cube faces are: `/`, `\`, `_`. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character `\n`.

Other examples of cubes:

```js
const cubeOfOne = createCube(1)

// output:
/\_\
\/_/
```

```js
const cubeOfTwo = createCube(2)

// output:
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

Take into account:

- Pay attention to the spaces in the cube.
- The cube has to be symmetrical.
- Make sure you use the correct symbols.
- Each line must be separated by a new line character \n except for the last one.

## Results

All test passed!

### Test #01 return type

Expected: `string`

### Test #02

Test: `createCube(3)`

Expected:

```js
   /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/
```

### Test #03

Test: `createCube(1)`

Expected:

```js
/\\_\\\n\\/_/
```

### Test #04

Test: `createCube(2)`

Expected:

```js
 /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/
```

### Test #05

Test: `createCube(10)`

Expected:

```js
         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n        \\/\\/_/_/_/_/_/_/_/_/_/_/\n         \\/_/_/_/_/_/_/_/_/_/_/
```

## Score: 120

- **338** ops/s (Higher is better)
- Cyclomatic complexity: **2** (Lower is better)
