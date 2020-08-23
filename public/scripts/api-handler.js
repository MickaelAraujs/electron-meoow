const root = document.getElementById('root');

const catImgApiUrl = 'https://aws.random.cat/meow';
const catFactsApiUrl = 'https://cat-fact.herokuapp.com/facts';

fetch(catImgApiUrl)
.then(apiResponse => apiResponse.json())
.then(catResponse => {
    const { file } = catResponse;

    const catImgElement = document.createElement('img');
    catImgElement.setAttribute('src', file);
    catImgElement.setAttribute('alt', 'cat image');

    root.appendChild(catImgElement);
});

fetch(catFactsApiUrl)
.then(apiResponse => apiResponse.json())
.then(factsResponse => {
    const { all } = factsResponse;

    const randomIndex = Math.floor( Math.random() * 235);

    const { text: fact } = all[randomIndex];

    const factTextElement = document.createElement('p');
    const factTextElementValue = document.createTextNode(fact);
    factTextElement.appendChild(factTextElementValue);

    root.appendChild(factTextElement);
});

