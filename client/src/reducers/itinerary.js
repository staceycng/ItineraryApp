import { SAVE_ITIN, SAVE_ITIN_DB  } from '../constants/action-types';
import axios from 'axios';

const initialState = {
    itinerary: {},
    itineraries: null,
    loading: true
};
  
  function itineraryReducer(state = initialState, action) {
    // Add payload of current itinerary to itinerary state object
    if(action.type === SAVE_ITIN){
        // var itinerary = {};
        // for(var keys in action.payload){
        //     itinerary[keys] = action.payload[keys]
        // }
        var newItin = Object.assign(state.itinerary, action.payload);
        return Object.assign({}, state, {itinerary: newItin});
    }
    return state;
  };
  
  export default itineraryReducer;