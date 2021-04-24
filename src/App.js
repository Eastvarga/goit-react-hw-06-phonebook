import { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
// import { v4 as uuidv4 } from "uuid";
import FindInput from "./components/FindInput";
import "./styles.css";
// import store from "./redux/store";
// import { connect } from "react-redux";
// import { addContact } from "./redux/actions";

// import store from "./redux/store";
// import { addContact } from "./redux/actions";

// console.log("store.contacts", store.contacts);

class App extends Component {
  state = {
    // contacts: [
    //   // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    // filter: "",
    // name: "",
    // number: "",
  };
  //----- read data from local storage--------
  // componentDidMount() {
  //   const items = JSON.parse(localStorage.getItem("contacts"));
  //   // console.log(contacts === null);
  //   if (items !== null) {
  //     // console.log(contacts);
  //     store.dispatch(addContact([...items]));
  //     // this.setState({ contacts: [...items] });
  //   }
  // }
  // //----- write data to local storage ---------
  // componentDidUpdate(prevProp) {
  //   if (
  //     this.props.contacts !== undefined &&
  //     this.props.contacts.items.length !== prevProp.contacts.items.length
  //   ) {
  //     // console.log(this.state.contacts === prevState.contacts);
  //     // console.log(prevState.contacts);
  //     console.log("this.props.contacts ", this.props.contacts);
  //     localStorage.setItem(
  //       "contacts",
  //       JSON.stringify(this.props.contacts.items)
  //     );
  //   }
  // }
  // filterHendler = ({ filter }) => {
  //   this.setState({ filter: filter });
  // };
  // formSubmitHandler = ({ name, number }) => {
  //   if (this.props.contacts.items.some((elem) => elem.name === name)) {
  //     // console.log(
  //     //   this.state.contacts.some((elem) => elem.name === name)
  //     // );
  //     window.alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   store.dispatch(addContact({ id: uuidv4(), name, number }));

  // this.setState((prevState) => {
  //   return {
  //     contacts: [
  //       { id: uuidv4(), name: name, number: number },
  //       ...prevState.contacts,
  //     ],
  //   };
  // });
  // };

  // deleteButtonHandler = (event) => {
  //   // console.log(event.target.id);
  //   store.dispatch(deleteContact(event.target.id));
  // const newArr = this.state.contacts.filter(
  //   (elem) => elem.id !== event.target.id
  // );
  // this.setState({ contacts: [...newArr] });
  // };

  render() {
    // const filter = this.state.filter.toLowerCase();
    // const filteredContacts = this.state.contacts.filter(({ name }) => {
    //   return name.toLowerCase().includes(filter);
    // });
    return (
      <div className="container">
        <h1 className="main_title">Phonebook</h1>
        <Form
        // onSubmit={this.formSubmitHandler}
        />
        <h2 className="sub_title">Contacts</h2>
        <FindInput
        // onChange={this.filterHendler}
        />
        <ContactList
        // onClick={this.deleteButtonHandler}
        // contacts={filteredContacts}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   };
// };
export default App;
