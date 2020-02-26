const breads = [
    {
        type: 'White',
        color: 'white',
        price: 10,
        id: 'bread1'
    },
    {
        type: 'Wheat',
        color: 'burlywood',
        price: 10,
        id: 'bread2'
    },
    {
        type: 'Rye',
        color: 'darksalmon',
        price: 10,
        id: 'bread3'
    }
];

let selectedBread = '';

const setSelectedBread = (breadId) => {
    selectedBread = breadId;
    console.log('selectedBread', selectedBread);
  };

const getSelectedBread = () => {
    const findBread = breads.find((x) => x.id === selectedBread)
    return findBread;
  }

const getBreads = () => {
    return breads;
};

export default { setSelectedBread, getBreads, getSelectedBread };