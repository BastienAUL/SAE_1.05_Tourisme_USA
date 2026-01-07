/* js pour le bouton retour vers le haut ( recuperé d'un autre projet )*/
const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) { 
        topButton.classList.remove('hidden');
    } else {
        topButton.classList.add('hidden');
    }
});
