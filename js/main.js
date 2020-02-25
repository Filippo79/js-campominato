/*SCOPO DEL GIOCO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile
di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50*/


// 1 creare un ciclo con generatore di numeri tra 1 e 100 per 16 volte
// 2 crearea un ciclo con un prompt per chiedere all'utente il numero




//ciclo per generare 16 volte un numero random
var numeriArray = [];
while (numeriArray.length < 16) { //ciclo while per generare in ogni caso 16 numeri senza doppioni
    var numeroRandom = generaRandomMinMax(1, 100);//genera un numero da 1 a 100
    if (numeriArray.includes(numeroRandom) == false ) {//se nel numerArray è incluso un numeroRandom è falsa
    numeriArray.push(numeroRandom);//pusha ancora un numeroRandom in numeri Array
    }
}
var numero = [];
console.log(numeriArray);


// 2 crearea un ciclo con un prompt per chiedere all'utente il numero in questo coso è 5 per prova,
//ma va cambiato a 84
while (numero.length  < 5 && (controllo(numeriArray, numeroUtente)) != true) {
    var numeroUtente = parseInt(prompt('inserisci un numero'));
    if (controllo(numeriArray, numeroUtente) == true) {
        alert('GAME OVER');

    }else if (numero.includes(numeroUtente) == false) {
        numero.push(numeroUtente);


    }else if (numero.includes(numeroUtente) == true) {
        alert('Hai già inserito questo numero');
// il numero 5 poi v a cambiato a 84 come sopra
    }else if (numero.length == 5 ) {
        alert('Hai vinto');

    }
}




// funzione controllo numero vero o falso
function controllo( listaRandom, num ){
    var numeroTrovato = false;// variabile sentinella !!!
    for (var i = 0; i < listaRandom.length; i++) {//ciclo di controllo
        if (listaRandom[i] == num )  {// condizione se listaRandom uguale a num
            numeroTrovato == true;
        }
    }
    return numeroTrovato;
}

//funzione per generare numero random
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
