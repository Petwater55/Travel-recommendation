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