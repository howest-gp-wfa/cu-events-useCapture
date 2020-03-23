"use strict";

var divFeedback; 
var divBuiten, divMidden,divBinnen;
var slcCapture;
var teller;

window.addEventListener('load',Initieer);

function Initieer(){

  KoppelElementen();
  KoppelEvents();

  slcCapture.addEventListener('change', KoppelEvents);

}

const KoppelEvents = () => {
  
  let captureSelectie = (slcCapture.options[slcCapture.selectedIndex].value == 'true');
  
  divBuiten.removeEventListener('click',GeefKlik, !captureSelectie);
  divMidden.removeEventListener('click',GeefKlik, !captureSelectie);
  divBinnen.removeEventListener('click',GeefKlik, !captureSelectie);  
  
  divBuiten.addEventListener('click',GeefKlik,captureSelectie);
  divMidden.addEventListener('click',GeefKlik,captureSelectie);
  divBinnen.addEventListener('click',GeefKlik,captureSelectie);

  divFeedback.innerHTML = "";
}

const KoppelElementen = () => {
  divFeedback = document.getElementById("divFeedback");
  divBuiten = document.querySelector('#divBuiten');
  divMidden = document.querySelector('#divMidden');
  divBinnen = document.querySelector('#divBinnen');
  slcCapture = document.getElementById("slcCapture");
}

const KlikBuiten = () => {
  divFeedback.innerHTML += `Je klikte op Buiten <br/>`; 
}

const KlikMidden = () => {
  divFeedback.innerHTML += `Je klikte op Midden <br/>`; 
}

const KlikBinnen = () => {
  divFeedback.innerHTML += `Je klikte op Binnen <br/>`; 
}

function GeefKlik(e){
  let propagationStopped = 
    (slcPropagate.options[slcPropagate.selectedIndex].value == 'true');
    console.log(e.target);
  divFeedback.innerHTML += `Knopnr: ${e.button}<br/>`;
  divFeedback.innerHTML += `Getriggered door ${this.id} <br/>`; 
  divFeedback.innerHTML += `Je klikte op: ${e.target.id} <br/>`; 
  divFeedback.innerHTML += `Plaats: ${e.screenX} ${e.screenY} <br/>`; 
   if (propagationStopped) e.stopPropagation();
}



