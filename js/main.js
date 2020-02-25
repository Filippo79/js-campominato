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


// variabile che richiama la funzione generaRandom

//ciclo per generare 16 volte un numero random
var numeriArray = [];
while (numeriArray.length < 16) { //ciclo while per generare in ogni caso 16 numeri senza doppioni
    var numeroRandom = generaRandomMinMax(1, 100);//genera un numero da 1 a 100
    if (numeriArray.includes(numeroRandom) == false ) {//se nel numerArray è incluso un numeroRandom è falsa
    numeriArray.push(numeroRandom);//pusha ancora un numeroRandom in numeri Array
    }
}

//ciclo for per far chiedere 16 vote un numero
var numero = [];
for (var i = 1; i <=16; i++) {
    numero.push(prompt('Inserisci un numero :'));
    if (true) {

    }
    //console.log(numero[i]);
    else if (numero.includes(numeriArray) == false) {
        console.log('Hai perso GAME OVER ');

    }
}

//funzione per generare numero random
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
