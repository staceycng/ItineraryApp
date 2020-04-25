import { SIGN_IN, SAVE_ITIN, SAVE_ITIN_DB, GET_ITINS, ITIN_LOADING, CLEAR_CURRENT_ITIN } from '../constants/action-types'
import axios from 'axios';

export function signIn() {
  return { type: SIGN_IN }
};

// 'Next click', save current data to store
export function saveItinerary(payload){
  return{
    type: SAVE_ITIN,
    payload: payload
  }
};

// On first save, send store to database, send back _id to store
export const saveItineraryDB = (payload) => (dispatch, getState) => {
  var existing = getState().itinerary.itinerary;
  var combined = {...existing, ...payload};
  axios.post('/itinerary', combined)
  .then((result) => {
    var id = result.data._id;
    var updatedPayload = {...payload, _id: id};
    dispatch({
      type: SAVE_ITIN,
      payload: updatedPayload
    })
  })
  .catch((err) => {
    console.log(err);
  })
 
};

// On subsequent saves, update document in database by id
export const saveItineraryDBById = (payload) => (dispatch, getState) => {
  var existing = getState().itinerary.itinerary;
  var id = existing._id;
  console.log('in subsequent save!', id);
  console.log('payload-->', payload);
  axios.post(`/itinerary/${id}`, payload)
  .then((result) => {
    dispatch({
      type: SAVE_ITIN,
      payload: payload
    })
  })
  .catch((err) => {
    console.log(err);
  })
}


// Get logged in users itineraries
export const getItineraries = () => dispatch => {
	
	//dispatch(setItineraryLoading());
	axios.get("/itinerary")
	.then(res => 
		dispatch({
			type: GET_ITINS,
			payload: res.data
		})
	)
	.catch(err => 
		dispatch({
			type: GET_ITINS,
			payload: {}
		})
	)
}

