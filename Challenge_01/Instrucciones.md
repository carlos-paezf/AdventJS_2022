# Reto #01: ¡Automatizando envolver regalos de navidad! (English)

## Instrucciones

Este año los elfos han comprado una máquina que envuelve regalos. Pero... ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo `*` y para envolver un regalo se coloca el símbolo `*` de forma que rodee totalmente al string por todos los lados. Por ejemplo:

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

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

**Nota:** El carácter `\n` representa un salto de línea.

**¡Ojo!** Asegúrate que pones el número correcto de `*` para envolver completamente el string.

¡Suerte!

## Resultados

¡Todos los test pasaron!

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

## Puntaje: 131

- **3034** ops/s (Más alto es mejor)
- Complejidad ciclomática: **1** (Más bajo es mejor)
- Mantenibilidad: **159%** (Más alto es mejor)

> Los retos son puntuados dependiendo de la calidad de tu solución. Utilizamos diferentes factores como la complejidad ciclomática y la velocidad de ejecución. El número de líneas no es un factor determinante.
