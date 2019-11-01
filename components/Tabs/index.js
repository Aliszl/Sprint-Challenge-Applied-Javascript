// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function createTabComponent(topic) {
    // 1- Create HTML markup
    const tab = document.createElement('div');

    // 2- Define HTML structure

    // 3- Add some class names
    tab.classList.add('tab');

    // 4- Add some content!
    tab.textContent = topic;
    
    return tab;
};
const topicsArray = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        // console.log(response);

        response.data.topics.forEach(topic => {

            const newTab = document.querySelector('.topics');
            newTab.append(createTabComponent(topic));
        });
        // console.log(response.data.topics);

    })


    .catch(error => {
        console.log(error);
    });