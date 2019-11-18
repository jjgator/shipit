let nextStopId = 0; // unique id for each stop
let invalidAddressAlertText = "This address could not be validated. Please enter a valid address.";

const addStop = (name, address) => async(dispatch) => {
    try {
        let data = await validateAddress(address);

        dispatch({
            type: 'ADD_STOP',
            id: nextStopId++,
            name,
            address: data.geocoded_address.formatted_address,
            completed: false,
            isValidating: false
        });

        return data;
    } catch (error) {
        alert(invalidAddressAlertText)
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

const editStop = (id, name, address) => async(dispatch) => {
    dispatch(setValidatingState(id, true));
    try {
        let data = await validateAddress(address);

        dispatch({
            type: 'EDIT_STOP',
            id,
            name,
            address: data.geocoded_address.formatted_address
        });
    } catch (error) {
        dispatch(setValidatingState(id, false));
        alert(invalidAddressAlertText)
    }
}

const setValidatingState = (id, isValidating) => ({
    type: 'SET_VALIDATING_STATE',
    id,
    isValidating
})

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

export { addStop, toggleCompleted, removeStop, editStop };
