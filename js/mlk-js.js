/* Js pour les animations des sections et du aside */
const elements = document.querySelectorAll("#mlk section, #mlk aside");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        } else {

            entry.target.classList.remove("appear");
        }
    });
}, {
    threshold: 0 /*controle du IntersectionObserver base sur le % visible du bloc */
});

elements.forEach(el => observer.observe(el));


/* js pour le bouton retour vers le haut ( recuperé d'un autre projet )*/
const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) { 
        topButton.classList.remove('hidden');
    } else {
        topButton.classList.add('hidden');
    }
});