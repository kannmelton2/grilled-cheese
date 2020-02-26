const breads = [
    {
        type: 'White',
        color: 'White',
        price: 10,
        id: 'bread1'
    },
    {
        type: 'Wheat',
        color: 'Brown',
        price: 10,
        id: 'bread2'
    },
    {
        type: 'Rye',
        color: 'White',
        price: 10,
        id: 'bread3'
    }
];

let selectedBread = '';

const setSelectedBread = (breadId) => {
    selectedBread = breadId;
    console.log('selectedBread', selectedBread);
  };

const getBreads = () => {
    return breads;
};

export default { setSelectedBread, getBreads };