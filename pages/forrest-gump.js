document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".oeuvres-grid");
    

    grid.addEventListener("click", (e) => {
        const fleche = e.target.closest(".fleche-oeuvre");
        if (!fleche) return;

        const cardClicked = fleche.closest(".oeuvre-card");
        const cards = Array.from(grid.children);
        const index = cards.indexOf(cardClicked);


        if (index === 0) {
            grid.insertBefore(grid.lastElementChild, grid.firstElementChild);
        } 

        else if (index === cards.length - 1) {
            grid.appendChild(grid.firstElementChild);
        }

    });
});