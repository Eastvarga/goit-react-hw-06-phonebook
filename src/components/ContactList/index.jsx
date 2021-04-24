import { connect } from "react-redux";

import { deleteContact } from "../../redux/contacts/contacts-action";
// import PropTypes from "prop-types";
import { list, item, text, button } from "./styles.module.css";

function ContactList({ onDeleteContact, items, filter }) {
  const deleteButtonHandler = (event) => {
    onDeleteContact(event.target.id);
  };

  const filterword = filter.toLowerCase();

  const filteredArray =
    filter !== ""
      ? [
          ...items.filter(({ name }) => {
            return name.toLowerCase().includes(filterword);
          }),
        ]
      : [...items];

  return (
    <ul className={list}>
      {filteredArray.length > 0 &&
        filteredArray.map(({ id, name, number }) => (
          <li className={item} key={id}>
            <span className={text}>{name}:</span>
            <span className={text}>{number}</span>
            <button
              className={button}
              id={id}
              type="button"
              onClick={deleteButtonHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    items,
    filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
