// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header(date, title, temp) {
// 1- Create HTML markup

const pageHeader = document.createElement('div');
const todaysDate = document.createElement('span');
const LambdaTimesTitle  =document.createElement('h1');
const temperature =document.createElement('span');
// const  =document.createElement('');
 // 2- Define HTML structure
 pageHeader.append(todaysDate);
 pageHeader.append(LambdaTimesTitle);
 pageHeader.append(temperature);
//  .append();
// 3- Add some class names
pageHeader.classList.add('header');
todaysDate.classList.add('date');
temperature.classList.add('temp');
// .classList.add('');
 // 4- Add some content!
 todaysDate .textContent = date;
 LambdaTimesTitle.textContent = title;
 temperature.textContent = temp;
// 5- Add functionality
console.log(pageHeader);
    return pageHeader;
}
const lambdaTimesHeader = document.querySelector('.header-container');
lambdaTimesHeader.append(header(`MARCH 28, 2019`,`Lambda Times`,`98 deg`));
// const header = document.querySelector('.');
