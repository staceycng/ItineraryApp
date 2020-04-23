import { SIGN_IN, SAVE_ITIN } from '../constants/action-types'

export function signIn() {
  return { type: SIGN_IN }
};

export function saveItinerary(payload){
  return{
    type: SAVE_ITIN,
    payload: payload
  }
};
