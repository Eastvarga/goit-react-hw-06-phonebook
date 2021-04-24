// import { Component } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import { deleteContact } from "../../redux/actions";
// import PropTypes from "prop-types";
import { list, item, text, button } from "./styles.module.css";

const deleteButtonHandler = (event) => {
  // console.log(event.target.id);
  store.dispatch(deleteContact(event.target.id));
};

function ContactList({ contacts: { items, filter } }) {
  const filterword = filter.toLowerCase();
  // console.log("ContactList filterword", filterword);
  const filteredArray =
    filter !== ""
      ? [
          ...items.filter(({ name }) => {
            return name.toLowerCase().includes(filterword);
          }),
        ]
      : [...items];

  // console.log("ContactList items", items);
  // console.log("ContactList filteredArray", filteredArray);

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

// class ContactList extends Component {
//   render() {
//     return (
//       <ul className={list}>
//         {this.props.contacts.map(({ id, name, number }) => (
//           <li className={item} key={id}>
//             <span className={text}>{name}:</span>
//             <span className={text}>{number}</span>
//             <button
//               className={button}
//               id={id}
//               type="button"
//               onClick={this.props.onClick}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// ContactList.defaultProps = {
//   contacts: [],
// };
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
// };

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(ContactList);
