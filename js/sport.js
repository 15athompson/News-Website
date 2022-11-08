const resultList = document.querySelector('#results');
const url = 'https://content.guardianapis.com/search?q=sport&api-key='; 
const apiKey = '97b62292-f6c1-4add-ae76-348175f232ed';
fetch(url + apiKey)
.then((response) => response.json())
.then((data) => {
    data.response.results.forEach(function (value) {
        console.log(value);
        const articleElement = `<div class="col-md-4"><div class="card mb-4">
        <div class="card-body">
        <h5 class="card-title">${value.webTitle}</h5>
        <p class="card-text">${value.sectionName}</p>
        <a target="_blank" href="${value.webUrl}" class="btn btn-primary">View
        Article</a>
        </div>
        </div></div>`;
         resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });

    /* The “response.results” in the last step is NOT something pre-defined as part of the JavaScript
language. Instead, it refers to the “response” and “results” components of the API result. When
you use this syntax for future API requests, these may change depending upon the structure of the
data returned from the API. Don’t assume it will always be “response.results”! */

/* Notice that we used target=”blank” in the last step. This ensures that when clicked, the URL opens
in a new browser tab. This is typically a good idea when linking to external websites. */