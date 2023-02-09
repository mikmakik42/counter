let counter = 2; // initialiser le counter
const el = {
    display: document.getElementById('display'),
    add: document.getElementById('add'),
    soustract: document.getElementById('soustract'),
} // appel les éléments html concerner
el.display.textContent = counter; //affiche l'interieur du counter

el.soustract.addEventListener('click', () => updateCounter(-1)) // ajouter un ecouteur sur l'élément HTML précédent

el.add.addEventListener('click', () => updateCounter(+1)) // updateCounter = resultat obtenue abec le addEventListener

function updateCounter(value) { 
    counter += value;
    el.display.textContent = counter; //affiche l'interieur du counter
}