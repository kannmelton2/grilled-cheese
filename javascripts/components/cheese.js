import util from '../helpers/util.js';
import cheeseData from '../helpers/data/cheeseData.js';

const selectCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setSelectedCheeses(cheeseId);
    console.log(cheeseData.getSelectedCheeses());
};

const cheeseButtonEvent = () => {
   const cheeseButtons = document.getElementsByClassName('cheeseButtons');
   for (let i = 0; i < cheeseButtons.length; i++) {
       cheeseButtons[i].addEventListener('click', selectCheese);
   };
};


const makeCheeseButtons = () => {
    const allCheeses = cheeseData.getCheeses();
    let domString = '';
    for (let i = 0; i < allCheeses.length; i++) {
        domString += '<div class="btn-group m-1">'
        domString += `<button type="button" class="btn btn-dark cheeseButtons" id="${allCheeses[i].id}">${allCheeses[i].type}</button>`;
        domString += '</div>';
    };
    util.printToDom('cheese-container', domString);
    cheeseButtonEvent();
};

export default { makeCheeseButtons };

//need to push cheese to a new array -  array should live in cheeseData
