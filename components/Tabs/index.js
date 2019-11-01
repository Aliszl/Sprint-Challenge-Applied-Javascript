// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    // Looping through the response we receive from the server
    console.log(response);
//     response.data.topics.forEach(top => {
//       // Creating new components based on the API data!
//       accordion.append(createPanel(`Doggo`, top));
//     });
  })
  .catch(error => {
    console.log(error);
  });

  function createTabComponent(topic) {
    // 1- Create HTML markup
    
    
    const tab =document.createElement('div');
     // 2- Define HTML structure
    
    //  .append();
    // 3- Add some class names
  
    // tab.classList.add('tab');
     // 4- Add some content!
    
    tab.textContent = topic;
    // 5- Add functionality
    console.log(tab);
        return tab;
    }
    const newTab = document.querySelector('.topics');
    newTab.append(createTabComponent(`dummy tab`));
    // const header = document.querySelector('.');