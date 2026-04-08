document.getElementById('searchBtn').addEventListener('click', function() {
    const expectedKeywords = ['countries', 'temples', 'beaches'];
      let query = document.getElementById('searchInput').value;
      let keywords = query.replace(/[()]/g, '')
        .split(',')
        .map(k => k.trim().toLowerCase())
        .filter(k => k.length > 0); 
    
      let matches = keywords.filter(k => expectedKeywords.includes(k));
    
      let resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
    
      if (matches.length > 0) {
        resultsDiv.innerHTML = `<p>Found matches: ${matches.join(', ')}</p>`;
      } else {
        resultsDiv.innerHTML = '<p>No matches found.</p>';
      }
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
    data.countries.forEach(country => {
        console.log(country.image);
    });
  })
  .catch(error => console.error('error fetching data:', error));
  let inputText = '(Countries,Temples,Beaches)';
  let keywords = inputText.replace(/[()]/g, '')
  .split(',')
  .map(keyword => keyword.trim().toLowerCase());
  let expectedKeywords = ['countries', 'temples', 'beaches'];
  keywords.forEach(keyword => {
    if (expectedKeywords.includes(keyword)) {
      console.log(`Input includes: ${keyword}`);
    } else {
        console.log(`Unexpected keyword: ${keyword}`);  
    }
  });