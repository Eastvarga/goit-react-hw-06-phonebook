import { combineReducers } from "redux";
import actionTypes from "../contacts/contacts-types";
const filterReducer = (state = "", { type, payload }) => {
  // console.log({ type, payload });
  switch (type) {
    case actionTypes.FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

const contactsItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT: {
      return [payload, ...state];
    }
    case actionTypes.DELETE_CONTACT: {
      const newArr = state.filter((elem) => elem.id !== payload);
      // console.log("action delete:", newArr);
      return [...newArr];
    }
    default:
      return state;
  }
};
export default combineReducers({
  items: contactsItemsReducer,
  filter: filterReducer,
});
