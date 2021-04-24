import { createStore } from "redux";

const initialState = { contacts: { items: [], filter: "" } };

const reducer = (state = { ...initialState }, action) => {
  console.log(action);
  switch (action.type) {
    case "form/Add_contact": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [action.payload, ...state.contacts.items],
        },
      };
    }
    case "contactList/Delete_contact": {
      const newArr = state.contacts.items.filter(
        (elem) => elem.id !== action.payload
      );
      console.log("action delete:", newArr);
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...newArr],
        },
      };
    }
    case "findInput/Filter_change":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
