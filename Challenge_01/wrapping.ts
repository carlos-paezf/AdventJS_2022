const gifts = [ 'book', 'game', 'socks' ]


function wrapping ( gifts: string[] ) {
    return gifts.map( gift => {
        const wrapX = '*'.repeat( gift.length + 2 )
        return `${ wrapX }\n*${ gift }*\n${ wrapX }`
    } )
}


const wrapped = wrapping( gifts )
console.log( wrapped )