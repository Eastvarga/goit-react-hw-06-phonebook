import actionTypes from "./contacts-types";
export const addContact = ({ id, name, number }) => ({
  type: actionTypes.ADD_CONTACT,
  payload: { id, name, number },
});
export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
});
export const filterChange = (filter) => ({
  type: actionTypes.FILTER_CONTACT,
  payload: filter,
});
