const nome = prompt("ciao! scrivi qui il tuo nome");
const cognome = prompt("ora dimmi il tuo cognome");
const colore = prompt("colore preferito?")
const number = 21
const risultato = nome + cognome + colore + number 
/* / VAR */

document.getElementById("password").innerHTML = 
    `
        la tua password è ${risultato}
    `