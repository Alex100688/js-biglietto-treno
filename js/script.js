const numberkm=Number(prompt("Quanti kilometri volete effettuare?"));
console.log (typeof numberkm);
const agePassenger=Number(prompt("Età del passeggero"));
console.log (typeof agePassenger);
const ticket= Math.floor (numberkm * 0.21);
console.log (ticket);
const discountYoung=Math.floor (ticket * 20 / 100);
console.log (discountYoung);
const discountSenior=Math.floor (ticket * 40 / 100);
console.log (discountSenior);
const ageYoung=Number(18);
const ageSenior=Number(65);
if(agePassenger < ageYoung){document.getElementById("young-price").innerHTML="Sconto per te del 20%"}
else if(agePassenger >= ageSenior){document.querySelector("h3").innerHTML="Sconto per te del 40%"}
else {ageYoung >= 18 && ageSenior < 65 (alert("Ci dispiace ma non hai diritto allo sconto"))}


/*Il programma dovrà chiedere all'utente ilnumero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/