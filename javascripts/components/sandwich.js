//write domString func that creates rectangles of color based on the colors of bread and cheese objects
// event listeners?
import util from '../helpers/util.js';
import breadData from '../helpers/data/breadData.js';
import cheeseData from '../helpers/data/cheeseData.js';

const sandwichMaker = () => {
    const bread = breadData.getSelectedBread();
    const cheeses = cheeseData.getSelectedCheeses();
    let domString = '';
    domString += `<div class="col-12" style="background-color: ${bread.color}">${bread.type} bread</div>`
    cheeses.forEach((cheese) => {
      domString += `<div class="col-12" style="background-color: ${cheese.color}">${cheese.type}</div>`
    })
    domString += `<div class="col-12" style="background-color: ${bread.color}">${bread.type} bread</div>`
    util.printToDom('sandwich-container', domString)
  }
  
  
  export default { sandwichMaker };