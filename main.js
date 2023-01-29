
const totalPoints = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
console.log(totalPoints)
console.log(holes)
console.log(moles)

function randomTime(min, max) {
    // return us a randomized time for the moles to show up
    // within the min, and max values given
    return Math.round(Math.random() * (max-min) + min)
}

function randomHole(holes) {
    let idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    console.log(hole)
    return idx
}

// randomize time between 15 sec to 200secs
randomTime(15, 200)

console.log('Random function returns ', randomTime(10, 100))
console.log('RAndomized index , ' + randomHole(holes))