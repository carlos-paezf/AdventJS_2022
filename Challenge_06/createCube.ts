function createCube ( size: number ) {
    const realSize = size * 2
    let cube = new Array( realSize )

    for ( let i = 1; i <= size; i++ ) {
        let temArr = [ ' '.repeat( size - i ) + "/\\".repeat( i ) + "_\\".repeat( size ) ]
        cube[ i - 1 ] = temArr
    }

    for ( let i = realSize, j = 0; i > size; i-- ) {
        let temArr = [ ' '.repeat( j ) + "\\/".repeat( i - size ) + "_/".repeat( size ) ]
        cube[ j + size ] = temArr
        j++
    }

    return cube.join( '\n' )
}