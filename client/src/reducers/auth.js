import { SIGN_IN } from '../constants/action-types';

const initialState = {
    credentials: 'NOT_LOGGED_IN',
    user: {}
  };
  
  function authReducer(state = initialState, action) {
    if(action.type === SIGN_IN){
        return Object.assign({}, state, {
            credentials: 'LOGGED_IN'
          });
    }
    return state;
  };
  
  export default authReducer;