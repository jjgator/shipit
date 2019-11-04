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
                stop.id === action.id 
                ? { ...stop, completed: !stop.completed } 
                : stop
            ));
        case 'EDIT_STOP':
            return state.map(stop => (
                stop.id === action.id
                ? { ...stop, 
                    name: action.name, 
                    address: action.address,
                    isValidating: false
                }
                : stop
            ));
        case 'SET_VALIDATING_STATE':
            return state.map(stop => (
                stop.id === action.id
                ? { ...stop, isValidating: action.isValidating }
                : stop
            ));
        case 'REMOVE_STOP':
            return state.filter(stop => stop.id !== action.id);
        default:
            return state;
    }
};
  
export default combineReducers({
    stops
});