if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
} else {
    ready();
}

function ready () {

const flecheGauche = document.querySelector('.fleche-gauche'); 
const flecheDroite = document.querySelector('.fleche-droite');

flecheDroite.addEventListener('click', tourneDroite);
flecheGauche.addEventListener('click', tourneGauche);

}



function tourneDroite () {
    const gauche = document.querySelector('.carre1');
    const milieu = document.querySelector('.carre2');
    const droite = document.querySelector('.carre3');

    droite.classList.remove('carre3');
    droite.classList.add('carre2');

    milieu.classList.remove('carre2');
    milieu.classList.add('carre1');

    
    gauche.classList.remove('carre1');
    gauche.classList.add('carre3');

}

function tourneGauche () {
    const gauche = document.querySelector('.carre1');
    const milieu = document.querySelector('.carre2');
    const droite = document.querySelector('.carre3');

    droite.classList.remove('carre3');
    droite.classList.add('carre1');

    milieu.classList.remove('carre2');
    milieu.classList.add('carre3');

    
    gauche.classList.remove('carre1');
    gauche.classList.add('carre2');

}