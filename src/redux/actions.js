// export const myAction = (value) => ({
//   type: "MY_ACTION",
//   payload: value,
// });
// export const myAction2 = {
//   type: "MY_ACTION2",
//   payload: "bugaga",
// };
export const addContact = ({ id, name, number }) => ({
  type: "form/Add_contact",
  payload: { id, name, number },
});
export const deleteContact = (id) => ({
  type: "contactList/Delete_contact",
  payload: id,
});
export const filterChange = (filter) => ({
  type: "findInput/Filter_change",
  payload: filter,
});
