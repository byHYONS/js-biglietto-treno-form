// reset
'use strict'

// dichiarare delle var per Nome, età e km, recuperando il valore dal campo input:
const userName = document.getElementById('nome-user');
console.log({userName});
const kmUser = document.getElementById('km-user');
console.log({kmUser});
const etaUser = document.querySelector('option[value]');
console.log({etaUser});

// applicare costanti per prezzo km e sconti:
const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;

// andare in ascolto dei campi input quando premiamo su submit:
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(etaUser.value);
});

// Predisprre condizioni in base ai possibili sconti da appliccare in base all'età:
// 
//     IF .eta ≤ 18 
//         prezzoTotale = (kilometri * prezzoKilometr) - prezzoMinorenni;
//     IF ELSE eta ≥ 65
//         prezzoTotale = (kilometri * prezzoKilometr) - prezzoOver65;
//     ELSE
//        prezzoTotale = (kilometri * prezzoKilometr) 


// trasformare `prezzoTotale` con un numero che restituisca solo due cifre dopo la virgola utilizzando il metodo:
// 
//     prezzoTotale.toFixed(2)
// 
// stampo in console il risultato finale.