const btn_send =document.querySelector('#btn_send');
const allInput =document.querySelectorAll('input')

const resultat =document.querySelector('#result')
console.log(resultat);

const h =window.location.search;

const urlsearch = new URLSearchParams(h)

let leNom = urlsearch.get("nom");

let lePrenom = urlsearch.get("prenom");



resultat.innerHTML=` <div >Bonjour Madame/monsieur : ${leNom} ${lePrenom}</div>  `
