let computer = ""
let vittoria_computer = 0
let vittoria_utente = 0
let utente = ""

function scelta_computer(){
    let scelte = ["sasso", "carta", "forbici"]
    computer = scelte[Math.floor(Math.random()*scelte.length)]
}


function scelta_utente(scelta){
    utente = scelta
    scelta_computer()
    stampa()
    verdetto()
}

function stampa(){
    let img_utente = document.querySelector("#scelta_utente > img")
    let img_computer = document.querySelector("#scelta_computer > img")

    img_utente.src = "img/" + utente + ".svg"
    img_computer.src = "img/" + computer + ".svg"
}

function verdetto(){
    let verdetto_stampa = document.querySelector("#immagine_verdetto > img")

    if (utente === computer){
        verdetto_stampa.innerHTML = "Pareggio"
        verdetto_stampa.src = "img/pareggio.gif"
    }

    else if((computer === "sasso" && utente === "forbici") || 
            (computer === "forbici" && utente === "carta") || 
            (computer === "carta" && utente === "sasso")){
                
        let computer_win = document.querySelector("#computer")
        verdetto_stampa.src = "img/lose.svg"

        vittoria_computer ++
        computer_win.innerHTML = vittoria_computer
    }

    else if((utente === "sasso" && computer === "forbici") || 
            (utente === "forbici" && computer === "carta") || 
            (utente === "carta" && computer === "sasso")){

        let utente_win = document.querySelector("#utente")
        verdetto_stampa.src = "img/win.svg"

        vittoria_utente ++
        utente_win.innerHTML = vittoria_utente
    }
}