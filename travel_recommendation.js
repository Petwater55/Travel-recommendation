function createHomePageLink() {
    return '<a href="index.html">Home</a>';
  }
  function createAboutUsLink() {
    return '<a href="about.html">About Us</a>';
  }
  function createContactUsLink() {
    return '<a href="contact.html">Contact Us</a>';
  }
  

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
  
    keywords.forEach(keyword => {
      if (!expectedKeywords.includes(keyword)) {
        console.log(`Unexpected keyword: ${keyword}`);
      }
    });
  
    if (matches.length > 0) {

      fetch('./travelrecommendation/api.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          matches.forEach(category => {
            let items = data[category];
            if (items && items.length > 0) {

              const categoryHeader = document.createElement('h2');
              categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
              resultsDiv.appendChild(categoryHeader);
  
              items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                itemDiv.innerHTML = `
                  <h3>${item.name}</h3>
                  <img src="${item.image}" alt="${item.name}" style="width:200px;">
                  <p>${item.description}</p>
                `;
                resultsDiv.appendChild(itemDiv);
              });
            } else {
              resultsDiv.innerHTML += `<p>No data found for ${category}.</p>`;
            }
          });
        })
        .catch(error => {
          resultsDiv.innerHTML = '<p>Error loading data.</p>';
          console.error('Fetch error:', error);
        });
    } else {
      resultsDiv.innerHTML = '<p>No matches found.</p>';
    }
  
    console.log('Search for:', query);
  });
  
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
    console.log('Search reset');
  });