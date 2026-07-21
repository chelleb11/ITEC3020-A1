function loadComponent(selector, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Could not load " + filePath);
            return response.text();
        })
        .then(html => {
            document.querySelector(selector).innerHTML = html;
            if (callback) callback();
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("#header-placeholder", "components/header.html", function() {
        const toggleBtn = document.getElementById("theme-toggle");
        if (toggleBtn) {
            const saved = localStorage.getItem("theme") || "light";
            document.body.setAttribute("data-theme", saved);
            toggleBtn.textContent = saved === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

            toggleBtn.addEventListener("click", function () {
                const current = document.body.getAttribute("data-theme");
                const next = current === "dark" ? "light" : "dark";
                document.body.setAttribute("data-theme", next);
                localStorage.setItem("theme", next);
                toggleBtn.textContent = next === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
            });
        }
    });
    loadComponent("#footer-placeholder", "components/footer.html");
});