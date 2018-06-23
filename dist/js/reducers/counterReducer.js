import * as actionType from '../actions/ActionType';

export const contactLists = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PERSON_INFO':
      return [...action.payload];
    case 'DELETE_PERSON_INFO':
      return [...action.payload];
    default:
      return state;
  }
};