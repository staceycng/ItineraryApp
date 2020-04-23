import { SAVE_ITIN  } from '../constants/action-types';

const initialState = {
    itinerary: null,
    itineraries: null,
    loading: true
};
  
  function itineraryReducer(state = initialState, action) {
    // Add payload of current itinerary to itinerary state object
    if(action.type === SAVE_ITIN){
        var itinerary = {};
        for(var keys in action.payload){
            itinerary[keys] = action.payload[keys]
        }
        var newItin = Object.assign(itinerary, state.itinerary);
        return Object.assign({}, state, {itinerary: newItin});
    }
    return state;
  };
  
  export default itineraryReducer;