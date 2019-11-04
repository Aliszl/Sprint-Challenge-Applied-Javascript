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

// Create array of relevant data from Axios

const authorArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.articles.javascript.length; i++) {
            authorArray.push(response.data.articles.javascript[i])
        }
        authorArray.forEach(args => {
            newCard.append(createCard(args.headline, args.authorPhoto, args.authorName));
        
        })
        console.log(authorArray.length);
        console.log(authorArray);
    })
    .catch(error => {
        console.log(error);
    });
console.log('Here',authorArray);


function createCard(headline, authorPhoto, authorName) {
    // 1- Create HTML markup

    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const name = document.createElement('span');

    // 2- Define HTML structure
    card.append(headLine);
    card.append(authorDiv);
    authorDiv.append(imgContainer);
    imgContainer.append(authorImg);
    authorDiv.append(name);

    // 3- Add some class names
    card.classList.add('card');
    headLine.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container')


    // 4- Add some content!
    headLine.textContent = headline;
    authorImg.setAttribute('src', authorPhoto);
    authorImg.textContent = authorPhoto;
    name.textContent = authorName;

    return card;
}

// Create cards and populate with data from authorArray
const newCard = document.querySelector('.cards-container');

// Ensure you have picked up correct div by class name toappend HTML
console.log(newCard);


