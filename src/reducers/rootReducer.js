import { combineReducers } from 'redux';

const stops = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STOP':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    address: action.address,
                    completed: action.completed
                }
            ];
        case 'TOGGLE_COMPLETED':
            return state.map(stop => (
                stop.id === action.id ? { ...stop, completed: !stop.completed } : stop
            ));
        default:
            return state;
    }
};
  
export default combineReducers({
    stops
});