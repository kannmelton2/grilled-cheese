// div in html - id="bread-container" - DONE
// printToDom function in utils - DONE
// breadData will have array of bread objects, export a getBreads function - DONE
// each bread object = type, color, price, id - DONE
// breads.js component - with domString builder (find something nice in bootstrap) use getBreads function - DONE
// import breads component into main - DONE
// event listener on radio button - call breadData.setSelectedBread(breadId);
// setSelectedBread = assign a variable (selectedBreadId) to the id passed in (console.log the id)

import breads from './components/breads.js';
import cheeses from './components/cheese.js';

const init = () => {
    breads.makeBreadRadioButtons();
    cheeses.makeCheeseButtons();
  };
  
  init();