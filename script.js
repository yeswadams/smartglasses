// Product buttons
document.addEventListener("DOMContentLoaded", function() {
    const productsRow = document.querySelector(".products_row");
    const leftButton = document.querySelector(".scroll_btn .products-nav:first-child");
    const rightButton = document.querySelector(".scroll_btn .products-nav:last-child");

    const scrollAmount = 300; // Amount to scroll on each button click

    leftButton.addEventListener("click", () => {
        productsRow.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightButton.addEventListener("click", () => {
        productsRow.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

// vari
// const button = document.getElementById('selected-color');
// const menu = document.getElementById('color-options');

// button.addEventListener('click', () => {
//     menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
// });

// menu.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         button.textContent = event.target.dataset.color;
//         menu.style.display = 'none';
//     }
// });

// Close menu if clicked outside
document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});


// Tabs Section
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();

        // Deactivate all tabs
        document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', 'false'));

        // Hide all tab panels
        document.querySelectorAll('.tab_panel').forEach(panel => panel.setAttribute('hidden', true));

        // Activate clicked tab
        this.setAttribute('aria-selected', 'true');

        // Show associated panel
        const panelId = this.getAttribute('aria-controls');
        document.getElementById(panelId).removeAttribute('hidden');
    });
});
