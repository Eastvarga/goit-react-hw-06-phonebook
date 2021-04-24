import { Component } from "react";
import { filter, title } from "./styles.module.css";

import { filterChange } from "../../redux/contacts/contacts-action";
import { connect } from "react-redux";
class FindInput extends Component {
  state = {
    filter: "",
  };
  onChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    this.props.onFilterChange(value);
    // store.dispatch(filterChange(value));
  };

  render() {
    return (
      <label className={title}>
        Find contacts by name:
        <input
          className={filter}
          // autocomplete="off"
          type="text"
          name="filter"
          value={this.state.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.onChange}
        />
      </label>
    );
  }
}
const mapStateToProps = ({ contacts: { filter } }) => {
  return {
    filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (filter) => dispatch(filterChange(filter)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindInput);
