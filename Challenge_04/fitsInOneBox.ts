type size = {
    l: number
    w: number
    h: number
}


function fitsInOneBox ( boxes: size[] ) {
    boxes.sort( ( a: size, b: size ): number => {
        if ( ( a.l > b.l ) && ( a.w > b.w ) && ( a.h > b.h ) ) return 1
        if ( ( a.l < b.l ) && ( a.w < b.w ) && ( a.h < b.h ) ) return -1
        return 0
    } )

    let n = boxes.length

    boxes.forEach( ( e: size, i: number ) => {
        if ( i > boxes.length - 2 ) return
        if ( ( e.l < boxes[ i + 1 ].l ) && ( e.w < boxes[ i + 1 ].w ) && ( e.h < boxes[ i + 1 ].h ) ) return
        n -= 1
    } )

    return ( n === boxes.length )
}


const boxesFalse = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]
fitsInOneBox( boxesFalse )


const boxesTrue = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]
fitsInOneBox( boxesTrue )