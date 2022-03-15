



const navSlide = () => { 
    const burger = document.querySelector('.burger');
    const navbarListe = document.querySelector('.navbar-list');
    const elements = document.querySelectorAll('.navbar-list li');

    burger.addEventListener('click', () => {
        if( navbarListe.style.animation){
            navbarListe.style.animation='';
        }
        else {
            navbarListe.style.animation = 'slide 1.1s ease ';
        }
        navbarListe.classList.toggle('navbar-active');

        burger.addEventListener('click', ()  => {
            navbarListe.classList.toggle('navbar-active2');
            setTimeout(() => {navbarListe.classList.remove('navbar-active2');},600);
         });
            

        
        elements.forEach((el,index)=>{
            if (el.style.animation){
                el.style.animation='';
            }
            else{
                var nbre = (index/7 +0.7);
                el.style.animation = 'navbar-elements 0.5s ease forwards ' + nbre+ 's';
            }
        });
    });
}

const openCV = () => {
    const monCV = document.querySelector('.monCV');
    const cv = document.getElementById('cv');
    const titre = document.querySelector('.texte');


    monCV.addEventListener('click', () => {
        if( titre.style.display == ''){
            document.querySelector('.monCV p').style.display='none';
            titre.style.display='none';
            document.querySelector('.special').href='#a';
            
        } else {
            setTimeout(() => {
                titre.style.display='';},500);
            document.querySelector('.monCV p').style.display='';
            document.querySelector('.special').href='#cv';
        }
        cv.classList.toggle('cv-back');
        if (cv.id == 'cv'){
        cv.id='a';
        } else {
            cv.id ='cv';
        }
        monCV.classList.toggle('cv-actif');
    });

}

openCV();

navSlide();