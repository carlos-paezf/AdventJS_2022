# Reto #03: ¿Cuántas cajas de regalos puede llevar Papá Noel? (Español)

## Instrucciones

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. **Cada regalo está representado por una cadena**. Santa Claus tiene un trineo que puede llevar un **peso limitado**, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada renos tiene un **límite de peso máximo** que puede llevar. El límite de peso máximo de cada reno es **igual a dos veces el número de letras en su nombre**.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. **Las cajas de regalos no se pueden dividir**.

```js
const packOfGifts = [ "book", "doll", "ball" ]
const reindeers = [ "dasher", "dancer" ]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts( packOfGifts, reindeers ) // 2
```

Cosas a tener en cuenta:

- Las cajas de regalos no se pueden dividir.
- Los nombres de los regalos y los renos siempre serán mayores que `0`.

## Resultados

¡Todos los test pasaron!

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

## Puntaje: 149

- **3459** ops/s (Más alto es mejor)
- Complejidad ciclomática: **1** (Más bajo es mejor)
- Mantenibilidad: **34%** (Más alto es mejor)

> Los retos son puntuados dependiendo de la calidad de tu solución. Utilizamos diferentes factores como la complejidad ciclomática y la velocidad de ejecución. El número de líneas no es un factor determinante.
