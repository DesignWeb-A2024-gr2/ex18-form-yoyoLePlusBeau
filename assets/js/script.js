const motDePasse = document.getElementById("password")
const motDePasseConfirme = document.getElementById("confirm-password")

const validationLongueur = document.querySelector(".validation-longueur")
const signeLongueur = document.querySelector(".validation-longueur")
const validationMajuscule = document.querySelector(".validation-majuscule")
const validationCaractere = document.querySelector(".validation-caractere")

const messageErreur = document.querySelector(".message-erreur")
const bouton = document.querySelector("bouton-soumettre")

motDePasse.addEventListener("input", validation)
motDePasseConfirme.addEventListener("input", validation)


messageErreur.style.color = "red"

function validation() {
    longueur()
    majuscule()
    caractere()
    Securite()
    
}

function pareil() {
    if (motDePasseConfirme.value == motDePasse.value) {
        messageErreur.style.display = "none"
        
        return true
    }
    else {
        messageErreur.style.display = "block"

        return false
    }
}

function longueur() {
    if (motDePasse.value.length >= 8) {
        validationLongueur.style.color = "green"
        return true
    }
    else {
        validationLongueur.style.color = "red"
        return false
    }
}

function majuscule() {
    let minuscule = /[a-z]/.test(motDePasse.value)
    let majuscule = /[A-Z]/.test(motDePasse.value)

    if (majuscule && minuscule) {
        validationMajuscule.style.color = "green"
        return true
    }
    else {
        validationMajuscule.style.color = "red"
        return false
    }
}

function caractere() {
    let caractereSpecial_regex = /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse.value)

    if (caractereSpecial_regex) {
        validationCaractere.style.color = "green"
        return true
    }
    else {
        validationCaractere.style.color = "red"
        return false
    }
}

function Securite() {
    const niveauSecurite = zxcvbn(motDePasse.value)
    let niveau = niveauSecurite.score

    const div = document.getElementsByClassName("password-meter-unit")

    for (let j = 4; j >= 0; j--) {
        div[j].style.background = "white"
    }
     
    for (let i = niveau; i >= 0; i--) {
        if (niveau < 2) {
            div[i].style.background = "red"
        }

        else if (niveau == 2) {
            div[i].style.background = "yellow"
        }

        else {
            div[i].style.background = "green"
        }
    }
}

function Verif() {
    let valide = false
    if (longueur() && majuscule() && caractere() && pareil()) {
        valide = true
    }
    return valide
}
