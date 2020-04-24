import { credentials} from  '../actions/index.js';

// const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
//     switch (action.type) {
//       case 'SET_VISIBILITY_FILTER':
//         return action.filter
//       default:
//         return state
//     }
//   }
  
//   export default visibilityFilter

export const credentialsStatus = (state = credentials.NOT_LOGGED_IN, action) => {
    return state;
}