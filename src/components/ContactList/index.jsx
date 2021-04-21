import { Component } from "react";
import PropTypes from "prop-types";
import { list, item, text, button } from "./styles.module.css";

class ContactList extends Component {
  render() {
    return (
      <ul className={list}>
        {this.props.contacts.map(({ id, name, number }) => (
          <li className={item} key={id}>
            <span className={text}>{name}:</span>
            <span className={text}>{number}</span>
            <button
              className={button}
              id={id}
              type="button"
              onClick={this.props.onClick}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
export default ContactList;
