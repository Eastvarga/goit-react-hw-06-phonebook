import { filterstyle, title } from "./styles.module.css";

import actions from "../../redux/contacts/contacts-action";
import { connect } from "react-redux";

function FindInput({ onFilterChange, filter }) {
  return (
    <label className={title}>
      Find contacts by name:
      <input
        className={filterstyle}
        // autocomplete="off"
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onFilterChange}
      />
    </label>
  );
}

const mapStateToProps = ({ contacts: { filter } }) => {
  return {
    filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (event) =>
      dispatch(actions.filterChange(event.currentTarget.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FindInput);
