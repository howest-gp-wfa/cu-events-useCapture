"use strict";

var divFeedback; 
var divBuiten, divMidden,divBinnen;
var slcCapture;

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
  divFeedback.innerHTML += `Knopnr: ${e.button}<br/>`;
  divFeedback.innerHTML += `e.target: ${e.target.id} <br/>`;   
  divFeedback.innerHTML += `e.currentTarget ${e.currentTarget.id} <br/>`; 
  divFeedback.innerHTML += `Plaats: X ${e.screenX} - Y ${e.screenY} <br/>`; 
  divFeedback.innerHTML += `PlaatsDoc: X ${e.pageX} - Y ${e.pageY} <br/>`; 
  divFeedback.innerHTML += `PlaatsClient: X ${e.clientX} - Y ${e.clientY} <br/>`; 
  divFeedback.innerHTML += '--------------------------------------<br />';
   if (propagationStopped) e.stopPropagation();
}
