// import actionTypes from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";
const addContact = createAction("form/Add_contact", ({ id, name, number }) => ({
  payload: { id, name, number },
}));

const deleteContact = createAction("contactList/Delete_contact");

const filterChange = createAction("findInput/Filter_change");

export default { addContact, deleteContact, filterChange };
