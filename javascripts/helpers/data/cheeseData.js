const cheeses = [
    {
        type: 'mozzorella',
        color: 'white',
        price: 200,
        id: 'cheese1'
    },
    {
        type: 'american',
        color: 'yellow',
        price: .01,
        id: 'cheese2'
    },
    {
        type: 'cheddar',
        color: 'yellow',
        price: .50,
        id: 'cheese3'
    },
    {
        type: 'goat',
        color: 'gray',
        price: 5000,
        id: 'cheese4'
    }
];

let selectedCheeses = [];

const setSelectedCheeses = (cheeseId) => {
    const foundCheese = cheeses.find((x) => x.id === cheeseId);
    selectedCheeses.push(foundCheese);
}

const getCheeses = () => {
    return cheeses;
};

const getSelectedCheeses = () => {
    return selectedCheeses;
};

export default { setSelectedCheeses, getCheeses, getSelectedCheeses };