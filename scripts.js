function navigateToIndex() {
    // Use window.location to navigate to index.html
    window.location.href = 'index.html';
}



document.addEventListener("DOMContentLoaded", function () {
    const navbarDiv = document.getElementById('navbar');
    
    // Use the Fetch API to load the content of nav.html
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            // Set the content of the #navbar div with the fetched HTML
            navbarDiv.innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
});
