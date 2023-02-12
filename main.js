

let scoreboard = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
console.log(scoreboard)
console.log(holes)
console.log(moles)
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    // return us a randomized time for the moles to show up
    // within the min, and max values given
    return Math.round(Math.random() * (max-min) + min)
}

function randomHole(holes) {
    let idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]

    if (hole == lastHole) {
       return randomHole(holes)
    }

    lastHole = hole

    return hole
}

function peep() {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    hole.classList.add("up")
    setTimeout(()=>{
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time)
}

function startGame() {
    console.log('game started')
    scoreboard= 0;
    timeUp = false;
    peep();
    setTimeout(()=> timeUp = true, 10000)
    
}
// randomize time between 15 sec to 200secs
