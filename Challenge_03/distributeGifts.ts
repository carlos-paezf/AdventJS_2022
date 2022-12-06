function distributeGifts ( packOfGifts: string[], reindeers: string[] ) {
    let packWeights = 0, reindeersCanCarry = 0

    for ( const gift of packOfGifts ) {
        packWeights += gift.length
    }
    for ( const reindeer of reindeers ) {
        reindeersCanCarry += ( reindeer.length * 2 )
    }

    return Math.floor( reindeersCanCarry / packWeights )
}