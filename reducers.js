export default function dropDown(state = {}, action){
  switch(action.type){
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selectedCountryId: action.id
      };
    default:
      return state;
  }
};