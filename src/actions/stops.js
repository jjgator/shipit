let nextStopId = 0; // unique id for each stop

const addStop = (name, address) => async(dispatch) => {
    try {
        let data = await validateAddress(address);

        dispatch({
            type: 'ADD_STOP',
            id: nextStopId++,
            name,
            address: data.geocoded_address.formatted_address,
            completed: false
        });
    } catch (error) {
        alert("This address could not be validated. Please enter a valid address.")
    }
};

const toggleCompleted = (id) => ({
    type: 'TOGGLE_COMPLETED',
    id
});

const removeStop = (id) => ({
    type: 'REMOVE_STOP',
    id
});

const validateAddress = async(address) => {
    let url = "https://dev-api.shipwell.com/v2/locations/addresses/validate/";
    let data = { formatted_address: address };

    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export { addStop, toggleCompleted, removeStop };
