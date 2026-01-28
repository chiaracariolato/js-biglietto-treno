console.log("Inserisci la tua età e i km che vuoi percorrere");

let eta = parseInt(prompt("Inserisci l'età"));

let km = parseInt(prompt("Inserisci i km che vuoi percorrere"));

if(eta < 18) {
    let prezzo = ((km * 0.21) * 0.80);
    console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
} else if(eta >= 65) {
    let prezzo = ((km * 0.21) * 0.60);
    console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
} else {
    let prezzo = (km * 0.21);
    console.log("Il prezzo del biglietto è " + prezzo.toFixed(2) + "€");
}