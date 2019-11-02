let nextStopId = 0;

export const addStop = (name, address) => ({
    type: 'ADD_STOP',
    id: nextStopId++,
    name,
    address
});