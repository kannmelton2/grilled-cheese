import breadData from '../helpers/data/breadData.js';
import util from '../helpers/util.js';

const selectBread = (e) => {
    const breadId = e.target.id;
    breadData.setSelectedBread(breadId);
};

const radioButtonEvent = () => {
   const radioButtons = document.getElementsByClassName('breadRadio');
   for (let i = 0; i < radioButtons.length; i++) {
       radioButtons[i].addEventListener('click', selectBread);
   };
};


const makeBreadRadioButtons = () => {
    const allBreads = breadData.getBreads();
    let domString = '';
    for (let i = 0; i < allBreads.length; i++) {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input breadRadio" type="radio" name="inlineRadioOptions" id="${allBreads[i].id}">`;
    domString += `<label class="form-check-label" for="${allBreads[i].id}">${allBreads[i].type}</label>`;
    domString += '</div>';
    };
    util.printToDom('bread-container', domString);
    radioButtonEvent();
};

export default { makeBreadRadioButtons };