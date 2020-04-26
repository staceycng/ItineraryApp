import { SIGN_IN, SAVE_ITIN, SAVE_ITIN_DB, GET_ITINS, ITIN_LOADING, CLEAR_CURRENT_ITIN, GET_ITIN } from '../constants/action-types'
import axios from 'axios';

// const headers = {
	// 	'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTM2MGY1ZmFhODJjNDA5Y2M3ZTI4YSIsImlhdCI6MTU4Nzg2OTcxNDI4MiwibmFtZSI6IkxlZSBNY0hhbGUiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE1ODc4Njk4MDA2ODJ9.JEiuWRAmM0fnhRQ7DXzqpkQO5tWpcyFfSzMQ_sQq-9KpjbRgsyqqUUAAUCsWveq6nfpzAsgvb6gJdtZAQjFD3rDze6eOuJPZjEJxXGCGL1bpddartAUERzBqXoZh_UvC51fvwRLWHxoxbvpGrdjkvayPT1ol2d4_TtM2kojVwsDccFOnwtddOrqqBpmvwEZV4OpokmwwFtGwd44nDslu99pOPSVhPizdhIb7mL94Yv5J6tsgTZCITjbhzGMuUz26l7z2iQH_JFf64mFZTmI0lPOT759imCEob1CI1x8QjnensbXVMHC-byaXXtpBNtRjHPvbOShe1q23Pde93FW7B4j3ZOuURGP1oRV3nHV-cRjLcWXHgYfjx55u4-FfwDqOwwyi7BaHhx5ESBoOm6ODpmMLgLPxzv8PjyYBUZYTj5fY8srtcNW_18WuK1QSQA03reVw5JSTiNv9gOTFn_u6DeLvLmDBw4PzhzWyJh0WHVVQ18ZFPftSLpL_s_eqxw5WnvLARSj8jDL7SKDDG4HY9e0aK2txVQl50zzjlp2mgGIB727P8I84FcC6P0-3fAkm4Pm4-xKTwFTIy4ltqGwrMXULIKR5Zf78XLlmkMhsDYxTdAFzh0rUKQleyB9KnO-f30yd1O0X4dqr2uu8G0P24ZWo1HlYBoFJU1_BL0Rz6Kw'
	//   }

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


// Get itinerary by ID
export const getItineraryById = (id) => dispatch => {
	//dispatch(clearErrors());
	dispatch(setItineraryLoading());
	console.log(axios.defaults.headers.common);

	  const config = {
		headers: { Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTM2MGY1ZmFhODJjNDA5Y2M3ZTI4YSIsImlhdCI6MTU4Nzg2OTcxNDI4MiwibmFtZSI6IkxlZSBNY0hhbGUiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE1ODc4Njk4MDA2ODJ9.JEiuWRAmM0fnhRQ7DXzqpkQO5tWpcyFfSzMQ_sQq-9KpjbRgsyqqUUAAUCsWveq6nfpzAsgvb6gJdtZAQjFD3rDze6eOuJPZjEJxXGCGL1bpddartAUERzBqXoZh_UvC51fvwRLWHxoxbvpGrdjkvayPT1ol2d4_TtM2kojVwsDccFOnwtddOrqqBpmvwEZV4OpokmwwFtGwd44nDslu99pOPSVhPizdhIb7mL94Yv5J6tsgTZCITjbhzGMuUz26l7z2iQH_JFf64mFZTmI0lPOT759imCEob1CI1x8QjnensbXVMHC-byaXXtpBNtRjHPvbOShe1q23Pde93FW7B4j3ZOuURGP1oRV3nHV-cRjLcWXHgYfjx55u4-FfwDqOwwyi7BaHhx5ESBoOm6ODpmMLgLPxzv8PjyYBUZYTj5fY8srtcNW_18WuK1QSQA03reVw5JSTiNv9gOTFn_u6DeLvLmDBw4PzhzWyJh0WHVVQ18ZFPftSLpL_s_eqxw5WnvLARSj8jDL7SKDDG4HY9e0aK2txVQl50zzjlp2mgGIB727P8I84FcC6P0-3fAkm4Pm4-xKTwFTIy4ltqGwrMXULIKR5Zf78XLlmkMhsDYxTdAFzh0rUKQleyB9KnO-f30yd1O0X4dqr2uu8G0P24ZWo1HlYBoFJU1_BL0Rz6Kw' }
	};

	axios.get(`/itinerary/${id}`)
	.then(res => 
		dispatch({
			type: SAVE_ITIN,
			payload: res.data
		})
	)
	.catch(err => 
		dispatch({
			type: SAVE_ITIN,
			payload: {}
		})
	)
}


// Get logged in users itineraries
export const getItineraries = () => dispatch => {

	dispatch(setItineraryLoading());
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


// Get logged in users itineraries they are invited to
export const getInvitedItineraries = () => dispatch => {
	
	//dispatch(setItineraryLoading());
	axios.get("/itinerary/invited")
	.then(res => 
		dispatch({
			type: GET_ITINS_INVITED,
			payload: res.data
		})
	)
	.catch(err => 
		dispatch({
			type: GET_ITINS_INVITED,
			payload: {}
		})
	)
}

// Add Event
export const addEvent = (event, history) => dispatch => {
	axios.post("/itinerary/event", event)
	.then(res => alert("New Event added"))
	.catch(err => {
    alert("Event could not be added")
  });
};

// Delete Experience
export const deleteExperience = (id, event_id) => dispatch => {
	axios.delete(`/itinerary/event/${id}/${event_id}`)
	.then(res => 
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
	.catch(err => dispatch({
		type: GET_ERRORS,
		payload: err.response.data
	}));
};


//  Itinerary loading
export const setItineraryLoading = () => {
	return{
		type: ITIN_LOADING
	}
}

//  Clear Itinerary
export const clearCurrentItinerary = () => {
	return{
		type: CLEAR_CURRENT_ITIN
	}
}

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	}
};

