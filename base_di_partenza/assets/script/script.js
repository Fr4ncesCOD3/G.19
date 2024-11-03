//gestione scroll con effetto di colore
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const getStartedBtn = document.querySelector('.nav-links a:last-child');
    
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
        getStartedBtn.style.backgroundColor = '#1A8917';
    } else {
        nav.classList.remove('scrolled');
        getStartedBtn.style.backgroundColor = '#000';
    }
}); 

//animazione delle M della sezione artwork
//seleziona tutti gli elementi con opacity="0" all'interno della sezione artwork
const allMElements = document.querySelectorAll('.artwork g[opacity="0"]');
const allMElementsArray = Array.from(allMElements);

//funzione per animare una M
const animateM = (element) => {
    // Rende visibile la M
    element.setAttribute('opacity', '1');
    
    // Nasconde la M dopo un tempo casuale tra 500ms e 2000ms
    setTimeout(() => {
        element.setAttribute('opacity', '0');
    }, Math.random() * 1500 + 500);
};

const animateRandomM = () => {
    // Seleziona un numero casuale di M da animare (massimo metà delle M totali)
    const maxElements = Math.floor(allMElementsArray.length / 2);
    // Seleziona un numero casuale di M da animare (da 1 a maxElements)
    const numElementsToAnimate = Math.floor(Math.random() * maxElements) + 1;
    
    // Mescola l'array e prende i primi n elementi
    //sort() per mescolare l'array 
    //slice() per prendere i primi n elementi
    const shuffled = [...allMElementsArray].sort(() => 0.5 - Math.random());
    const selectedElements = shuffled.slice(0, numElementsToAnimate);
    
    // Prima nasconde tutte le M
    allMElementsArray.forEach(element => {
        element.setAttribute('opacity', '0');
    });
    
    // Anima le M selezionate una alla volta con un ritardo
    selectedElements.forEach((element, index) => {
        setTimeout(() => {
            animateM(element);
        }, index * 200); // Ritardo di 200ms tra ogni M
    });
};

// Avvia l'animazione iniziale dopo un tempo casuale
setTimeout(() => {
    animateRandomM();
    // Ripeti l'animazione ogni 2-4 secondi
    setInterval(animateRandomM, Math.random() * 2000 + 2000);
}, Math.random() * 1000 + 500);

