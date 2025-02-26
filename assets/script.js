document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully.");
    
    const searchInput = document.getElementById("search");
    let searchResults = document.getElementById("search-results");

    if (!searchResults) {
        searchResults = document.createElement("div");
        searchResults.id = "search-results";
        searchInput.parentNode.appendChild(searchResults);
    }

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results
        searchResults.style.display = query ? "block" : "none"; // Show results if there is input

        if (query.includes("beach")) {
            searchResults.innerHTML = "<p>Top Beach Recommendations: Maldives, Bora Bora, Maui</p>";
        } else if (query.includes("temple")) {
            searchResults.innerHTML = "<p>Famous Temples: Angkor Wat, Meenakshi Temple, Shwedagon Pagoda</p>";
        } else if (query) {
            searchResults.innerHTML = `<p>Searching recommendations for: ${query}</p>`;
        }
    });

    // Hide search results when clicking outside
    document.addEventListener("click", function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = "none";
        }
    });
});
