document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully.");
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Search functionality
    const searchInput = document.getElementById("search");
    const searchResults = document.createElement("div");
    searchResults.id = "search-results";
    searchInput.parentNode.appendChild(searchResults);

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        if (query.includes("beach")) {
            searchResults.innerHTML = "<p>Top Beach Recommendations: Maldives, Bora Bora, Maui</p>";
        } else if (query.includes("temple")) {
            searchResults.innerHTML = "<p>Famous Temples: Angkor Wat, Meenakshi Temple, Shwedagon Pagoda</p>";
        } else if (query) {
            searchResults.innerHTML = `<p>Searching recommendations for: ${query}</p>`;
        }
    });
});
