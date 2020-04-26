import { CLEAR_ERRORS, GET_ERRORS } from '../constants/action-types';

const initialState = {};
  
  function errorsReducer(state = initialState, action) {

    if (action.type === CLEAR_ERRORS) {
      return {}
    }
 
    if (action.type === GET_ERRORS) {
      return {}
    }
    return state;
  };
  
  export default errorsReducer;