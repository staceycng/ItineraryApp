import { SIGN_IN, LOG_OUT } from '../constants/action-types';

const initialState = {
    credentials: 'NOT_LOGGED_IN',
    user: {}
  };
  
  function authReducer(state = initialState, action) {
    if(action.type === SIGN_IN){
        return Object.assign({}, state, {
            user: action.payload,
            credentials: 'LOGGED_IN'
          });
    }

    if (action.type === LOG_OUT) {
      return {
        ...state,
        user: {},
        credentials: 'NOT_LOGGED_IN'
      }
    }

    return state;
  };
  
  export default authReducer;