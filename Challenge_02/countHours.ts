const year = 2022
const holidays = [ '01/06', '04/01', '12/25' ]


const countHours = ( year: number, holidays: string[] ) => {
    let counter = 0
    holidays.forEach( holiday => {
        const numberDay = new Date( `${ year }/${ holiday.split( '/' )[ 0 ] }/${ holiday.split( '/' )[ 1 ] }` ).getDay()
        return numberDay !== 0 && numberDay !== 6 && ( counter += 2 )
    } )
    return counter
}


countHours( year, holidays )