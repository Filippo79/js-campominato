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


/*
1 genero 16 numeri random diversi da 1   a 100
    1.1 creo un array vuoto
    1.2 inserisco i numeri della bomba nell'array
2 selezione numeroUtente
    2.1 creo un array vuoto per i tentativi
    2.2 chiediamo un numero tra 1 e 100
3 Logica del gioco
- ripetizione del numero
    -il numero inserito è incluso nell'array dei numeri inseriti
- Prendo una bomba
    -il numero inserito è incluso nell'array delle bombe
- Inserire il numero nell'array dei numeri inseriti
- Se lunghezza numeri inseriti è uguale alla lunghezza massima hai vinto

Gestine errorii
1 numero >= di 100
2 numero deve essere un numero

------------------------------>PER GLI INSEGNANTI<--------------------------------
HO RIVISTO TUTTO L'ESERCIZIO FATTO IN AULA E PASSATO PUNTO PER PUNTO PER RIVEDERE
LA LOGICA VISTO GLI ENORMI PROBLEMI CHE HO AVUTO QUESTI GIORNI
*/

// var dimensioneCampo = 100; // scelta statica
var dimensioneCampo = sceltaDifficolta(); // variabile dimensionecampo uttilizzata anche per scelta difficoltà
var totaleMine = 16;//il totale delle mine è quello generato da genera random
var bandierineMax = dimensioneCampo - totaleMine;//definisce il numero totale per posizionare le bandierine (dimensioneCampo - totaleMine 16)

var posizioneMine = minaIlCampo(dimensioneCampo, totaleMine);//richiama la funzione generaRandom per creare i numeri (mine )
console.log(posizioneMine);// vedere i numeri delle (mine)
var bandierinePiazzate = [];// array dove ci sono i numeri scelti dall'utente

var boom = false;// variabile sentinella impostata su "false"
while ((bandierinePiazzate.length < bandierineMax) && (boom === false)) {// ciclo while con && entrambi vere che restituisce "TRUE"
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numeri da 1 a ' + dimensioneCampo));// variabile con prompt per scegliere i numeri dimensione campo in base alla scelta della difficoltà dell'utente
    if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) {// 1° if condizione se bandierinaDaPiazzare (!non inclusa ) in  bandierinePiazzate continua il ciclo
        if (!posizioneMine.includes(bandierinaDaPiazzare)) {//  2° if condizione se bandierinaDaPiazzare (! non inclusa)in posizioneMine continua            bandierinePiazzate.push(bandierinaDaPiazzare);
            if (bandierinePiazzate.length == bandierineMax) {// 3° if condizione se i numeri scelti dall'utente (bandierine) sono uguali al numero bandierine max (dimensioneCampo- totaleMine) "VINTO"
                alert('Vai a giocare al Superenalotto');// il maledetto alert che ti dice che "Hai vinto"
            } else {
                alert('Hai piazzato una bandierina');//alert che riprende il 3° if e annuncia sempre quando posizioni una bandierina
            }
        } else {// alert che riprende il 2° if stringa +il numero delle bandierine piazzate dall'utente
            alert('BOOOM!! hai beccato una bomba! Hai piazzato ' + bandierinePiazzate.length + ' bandierine');
            boom = true;// boom "true" hai beccato la bomba
        }
    } else {
        alert('Hai già inserito questo numero');//alert per riprendere il 1° if
    }
}

function sceltaDifficolta() {// funzione assegnata a variabile dimensioneCampo per scegliere difficoltà
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3'));
    switch (scelta) {//switch uttilizzato per dare la possibilità all'utente di scegliere il grado di difficoltà
        case 1:
            var dimCampo = 100;// le varie dimensoni del campo
            break;
        case 2:
            var dimCampo = 80;// le varie dimensoni del campo
            break;
        case 3:
            var dimCampo = 50;// le varie dimensoni del campo
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function minaIlCampo(dimCampo, totMine) {//funzione e ciclo che richiama il generaRandom per generare i numeri (mine)
    var posizMine = [];// array per posizionare i numeri (mine) genarati da generaRandom
        while (posizMine.length < totMine) {// ciclo while con parametri per generare i mumeri (mmine)
        var minaDaPiazzare = generaRandomMinMax(1, dimCampo);// variabile che richiama il generaRandom ( da 1 alla dimensione del campo)
        if (!posizMine.includes(minaDaPiazzare)) {// condizione per  far si che i numeri generati non siano uguali attenzione (!)
            posizMine.push(minaDaPiazzare);//e se sono generati uguali pusha "aggiunge" su posizMine  da (minaDaPiazzare=generaRandom)
        }
    }
    return posizMine;// rritorna all'inizio del ciclo
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
