let nextStopId = 0;

const addStop = (name, address) => ({
    type: 'ADD_STOP',
    id: nextStopId++,
    name,
    address
});

const validateAddress = (address) => dispatch => {

};

export { addStop };
