// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function createCard(cardInfo) {
    // 1- Create HTML markup

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    // 2- Define HTML structure
    card.append(headline);
    card.append(authorDiv);
    authorDiv.append(imgContainer);
    imgContainer.append(authorImg);
    authorDiv.append(authorName);
    // 3- Add some class names
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container')


    // 4- Add some content!

    // headline.textContent = data.articles.bootstrap.headline;
    // authorImg.setAttribute('href',data.articles.bootstrap.authorphoto);
    // authorName.textContent = data.articles.bootstrap.authorName;
    headline.textContent = data.articles.javascript.headline;
    authorImg.setAttribute('href', data.articles.javascript.authorPhoto);
    authorName.textContent = data.articles.javascript.authorName;

    // 5- Add functionality
    console.log(card);
    return card;
}
// const newCard = document.querySelector('.cards-container');
// newCard.append(createCard(cardInfo));
const authorArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.articles.javascript.length; i++) {
            authorArray.push(response.data.articles.javascript[i])
        }
        console.log(authorArray.length);
        console.log(authorArray);

    })
    .then((array) => {

        for (let i = 0; i < authorArray.length; i++) {
            let search = 'https://lambda-times-backend.herokuapp.com/articles/javascript/';
            search += array[i];
            axios.get(search);
            console.log(search);
            // .then((X) =>{
            //     newCard.append(createCard(X.data));
            // })
            // const newCard = document.querySelector('.cards-container');
        }

    })

    .catch(error => {
        console.log(error);
    });



// const newCard = document.querySelector('.cards-container');
// newCard.append(createCard(cardInfo));
//             });
//  console.log(response.data.articles.bootstrap);