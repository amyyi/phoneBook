import * as actionType from './ActionType';
let data = [];
export const addPerson = (personInfo) => dispatch => {
  if(!personInfo) {
    return;
  }
  data = [...data, personInfo];
  dispatch({ type: 'ADD_PERSON_INFO', payload: data });
};

export const deletePerson = (id) => dispatch => {
  if(!id) {
    return;
  }
  const deleteIdx = id - 1;
  data.splice(deleteIdx, 1);
  dispatch({ type: 'DELETE_PERSON_INFO', payload: data });
};