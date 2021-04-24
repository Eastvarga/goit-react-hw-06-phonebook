import { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import store from "../../redux/store";
import { addContact } from "../../redux/actions";
import { form, name, input, tel, button } from "./styles.module.css";
const INITIAL_STATE = {
  name: "",
  number: "",
};

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    if (this.props.contacts.items.some((elem) => elem.name === name)) {
      // console.log(
      //   this.state.contacts.some((elem) => elem.name === name)
      // );
      window.alert(`${name} is already in contacts`);
      this.reset();
      return;
    }
    this.props.onAddContact({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    // store.dispatch(
    //   addContact({
    //     id: uuidv4(),
    //     name: this.state.name,
    //     number: this.state.number,
    //   })
    // );
    // this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState(() => {
      return { ...INITIAL_STATE };
    });
  };
  render() {
    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={name}>
          Name
          <input
            className={input}
            // autocomplete="off"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={name}>
          📞
          <input
            className={tel}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add to contacts
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: ({ id, name, number }) =>
      dispatch(
        addContact({
          id,
          name,
          number,
        })
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
