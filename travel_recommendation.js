document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    // Add your search logic here, e.g., filter recommendations based on query
    console.log('Search for:', query);
  });
  
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('searchInput').value = '';
    // Add logic to clear search results if applicable
    console.log('Search reset');
  });
  function createHomePageLink() {
    return '<a href="index.html">Home</a>';
  }
  function createAboutUsLink() {
    return '<a href="about.html">About Us</a>';
  }
  function createContactUsLink() {
    return '<a href="contact.html">Contact Us</a>';
  }
  fetch('path/to/api.json') 
  .then(response => response.json())
  .then(data => {
    data.tasks.forEach(task => {
        console.log(task image);
    });
  })
  .catch(error => console.error('error fetching data:', error));