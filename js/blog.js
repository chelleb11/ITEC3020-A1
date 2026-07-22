document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    fetch("data/posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));

            posts.forEach((post, index) => {
                const date = new Date(post.date);
                const formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });

                const postElement = document.createElement("div");
                postElement.classList.add("card", "post-card");

                postElement.innerHTML = `
                    ${index === 0 ? '<span class="latest-badge">Latest Post</span>' : ""}
                    <p class="post-meta">${formattedDate} · ${post.category}</p>
                    <h2>${post.title}</h2>
                    <p>${post.summary}</p>
                    <button class="btn read-more-btn">Read More</button>
                    <p class="full-content" style="display:none;">${post.content}</p>
                `;

                const readMoreBtn = postElement.querySelector(".read-more-btn");
                const fullContent = postElement.querySelector(".full-content");

                readMoreBtn.addEventListener("click", function () {
                    if (fullContent.style.display === "none") {
                        fullContent.style.display = "block";
                        readMoreBtn.textContent = "Show Less";
                    } else {
                        fullContent.style.display = "none";
                        readMoreBtn.textContent = "Read More";
                    }
                });

                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});