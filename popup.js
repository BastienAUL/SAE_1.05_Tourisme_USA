(function () {
    const STORAGE_KEY = "studentPopupDismissed_v2";
    const overlay = document.getElementById("studentModalOverlay");
    const closeBtn = document.getElementById("studentModalCloseBtn");
    const acceptBtn = document.getElementById("studentModalAcceptBtn");
    const checkbox = document.getElementById("studentModalDontShow");

    if (!overlay || !closeBtn || !acceptBtn) {
        console.error("Modal elements missing.");
        return;
    }

    try {
        if (localStorage.getItem(STORAGE_KEY) === "true") {
            overlay.style.display = "none";
            return;
        }
    } catch (e) {
        console.warn("localStorage inaccessible:", e);
    }

    acceptBtn.focus();

    function hideOverlay(storeChoice) {

        overlay.style.transition = "opacity 180ms";
        overlay.style.opacity = "0";
        setTimeout(() => { overlay.style.display = "none"; }, 180);

        if (storeChoice) {
            try { localStorage.setItem(STORAGE_KEY, "true"); }
            catch (e) { console.warn("Could not write to localStorage:", e); }
        }
    }

    function onCloseClick(e) {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
        hideOverlay(checkbox.checked === true);
    }

    closeBtn.addEventListener("click", onCloseClick);
    acceptBtn.addEventListener("click", onCloseClick);

    overlay.addEventListener("click", function (ev) {
        if (ev.target === overlay) hideOverlay(checkbox.checked === true);
    });

    document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") hideOverlay(checkbox.checked === true);
    });
})();