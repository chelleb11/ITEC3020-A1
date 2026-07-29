document.addEventListener("DOMContentLoaded", function () {

    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");

    if (filterInput) {
        const cards = document.querySelectorAll(".project-card");

        filterInput.addEventListener("input", function () {
            const query = this.value.toLowerCase().trim();
            let visibleCount = 0;

            cards.forEach(function (card) {
                const title = card.querySelector(".card-title").textContent.toLowerCase();
                const desc = card.querySelector(".card-desc").textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = "";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            noResults.style.display = visibleCount === 0 ? "block" : "none";
        });
    }

    const blogFilterInput = document.getElementById("blog-filter-input");
    const blogNoResults = document.getElementById("blog-no-results");

    if (blogFilterInput) {
        blogFilterInput.addEventListener("input", function () {
            const query = this.value.toLowerCase().trim();
            let visibleCount = 0;

            const blogCards = document.querySelectorAll(".post-card");

            blogCards.forEach(function (card) {
                const title = card.querySelector("h2") ? card.querySelector("h2").textContent.toLowerCase() : "";
                const meta = card.querySelector(".post-meta") ? card.querySelector(".post-meta").textContent.toLowerCase() : "";

                if (title.includes(query) || meta.includes(query)) {
                    card.style.display = "";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            blogNoResults.style.display = visibleCount === 0 ? "block" : "none";
        });
    }
});