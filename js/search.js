const searchNews = (event) => {
    event.preventDefault();

const keyword = document.querySelector('#keywords').value;
const url = 'https://content.guardianapis.com/search?q=' + keyword + '&api-key=';
const apiKey = '97b62292-f6c1-4add-ae76-348175f232ed';
const resultList = document.querySelector('#results');
resultList.innerHTML = '';

fetch(url + apiKey)
    .then((response) => response.json())
    .then((data) => {
        data.response.results.forEach(function (value) {
            console.log(value);
            const articleElement = `<div class="col-md-4">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <h5 class="card-title">${value.webTitle}</h5>
                                                <p class="card-text">${value.sectionName}</p>
                                                <a target="_blank" href="${value.webUrl}" class="btn btn-primary">View Article</a>
                                            </div>
                                        </div>
                                    </div>`;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
    });
}