let scoreboard = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
console.log(scoreboard)
console.log(holes)
console.log("MOLES HERE!! " , moles)
let lastHole;
let timeUp = false;
let score = 0;

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
    const time = randomTime(300, 1000)
    const hole = randomHole(holes)
    hole.classList.add("up")
    setTimeout(()=>{
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time)
}

function startGame() {
    console.log('game started')
    scoreboard.innerHTML = 0;
    timeUp = false;
    score = 0
    peep();
    setTimeout(()=> timeUp = true, 10000)

}

function bonk(e){
    console.log(e)
    // if this element is NOT trusted, just continue
    if (!e.isTrusted) return
    score++
    console.log(score)
    this.classList.remove('up')
    scoreboard.innerHTML = String(score);
}

moles.forEach(mole => mole.addEventListener('click', bonk))
// randomize time between 15 sec to 200secs

function addTwo(a) {
    return a.toUpperCase()
}