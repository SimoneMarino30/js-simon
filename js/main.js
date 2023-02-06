// TRACCIA
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Qui trovate HTML e CSS ed alcuni esempi di stamattina (trovato l'easter egg?). cercate di analizzarli per capire come intervenire sul countdown.
//
// CONSIGLI
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

// Dichiarazione costanti globali per scrittura nel countdown
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

// Recupero la data a cui settare il countdown
let countDownDate = new Date("2023-02-07 09:30:00").getTime();

// invocazione function onload per evitare azzeramento al refresh
myCountDown();

const count = setInterval(myCountDown, 1000);

function myCountDown() {
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  daysEl.innerHTML = days;

  daysEl.innerHTML = days < 10 ? "0" + days : days;

  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hoursEl.innerHTML = hours;

  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;

  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  minutesEl.innerHTML = minutes;

  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;

  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  secondsEl.innerHTML = seconds;

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  if (timeLeft < 0) {
    clearInterval(count);
    document.getElementById("title").innerHTML = "TIME'S UP!!!";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("days").innerHTML = "00";
  }
}
