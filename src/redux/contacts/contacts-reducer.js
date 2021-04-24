import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actionTypes from "../contacts/contacts-types";
import actions from "./contacts-action";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) => {
    const newArr = state.filter((elem) => elem.id !== payload);
    // console.log("action delete:", newArr);
    return [...newArr];
  },
});

const filter = createReducer("", {
  [actions.filterChange]: (state, { payload }) => payload,
});
// const filterReducer = (state = "", { type, payload }) => {
//   // console.log({ type, payload });
//   switch (type) {
//     case actionTypes.FILTER_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsItemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT: {
//       return [payload, ...state];
//     }
//     case actionTypes.DELETE_CONTACT: {
//       const newArr = state.filter((elem) => elem.id !== payload);
//       // console.log("action delete:", newArr);
//       return [...newArr];
//     }
//     default:
//       return state;
//   }
// };
export default combineReducers({
  items,
  filter,
});
