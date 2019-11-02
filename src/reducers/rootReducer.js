import { combineReducers } from 'redux';

const stops = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STOP':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    address: action.address
                }
            ];
        default:
            return state;
    }
};
  
export default combineReducers({
    stops
});