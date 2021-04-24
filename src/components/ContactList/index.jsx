import { connect } from "react-redux";

import { deleteContact } from "../../redux/contacts/contacts-action";
// import PropTypes from "prop-types";
import { list, item, text, button } from "./styles.module.css";

function ContactList({ onDeleteContact, items }) {
  return (
    <ul className={list}>
      {items.length > 0 &&
        items.map(({ id, name, number }) => (
          <li className={item} key={id}>
            <span className={text}>{name}:</span>
            <span className={text}>{number}</span>
            <button
              className={button}
              id={id}
              type="button"
              onClick={onDeleteContact}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

const filterContacts = ({ items, filter }) => {
  const normalizedfilter = filter.toLowerCase();
  return items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedfilter);
  });
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    items: filterContacts({ items, filter }),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (event) => dispatch(deleteContact(event.target.id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
