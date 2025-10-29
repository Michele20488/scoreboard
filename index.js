let home = 0
let guest = 0
let homeEl = document.getElementById("point-home")
let guestEl = document.getElementById("point-guest")

function checkWinner() {
    if(home>guest) {
        document.getElementById("point-div-home").style.setProperty("border", "4px dotted #F94F6D")
    } else if(home<guest) {
        document.getElementById("point-div-guest").style.setProperty("border", "4px dotted #F94F6D")
    } else {
        document.getElementById("point-div-home").style.setProperty("border", "4px solid #080001")
        document.getElementById("point-div-guest").style.setProperty("border", "4px solid #080001")
    }
}

function add1Home() {
    home++
    homeEl.innerText = home
    checkWinner()
}

function add2Home() {
    home+=2
    homeEl.innerText = home
    checkWinner()
}

function add3Home() {
    home+=3
    homeEl.innerText = home
    checkWinner()
}

function add1Guest() {
    guest++
    guestEl.innerText = guest
    checkWinner()
}

function add2Guest() {
    guest+=2
    guestEl.innerText = guest
    checkWinner()
}

function add3Guest() {
    guest+=3
    guestEl.innerText = guest
    checkWinner()
}

function restart() {
    home = 0
    guest = 0
    homeEl.innerText = home
    guestEl.innerText = guest
    document.getElementById("point-div-home").style.setProperty("border", "4px solid #080001")
    document.getElementById("point-div-guest").style.setProperty("border", "4px solid #080001")
}