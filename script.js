function searchSite() {
    let query = document.getElementById('search-bar').value.toLowerCase();
    if (query) {
        window.location.href = `search.html?q=${query}`;
    } else {
        alert("Please enter a search term.");
    }
}
