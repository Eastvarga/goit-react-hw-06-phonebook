import { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import FindInput from "./components/FindInput";
import "./styles.css";

class App extends Component {
  state = {};
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

  render() {
    return (
      <div className="container">
        <h1 className="main_title">Phonebook</h1>
        <Form />
        <h2 className="sub_title">Contacts</h2>
        <FindInput />
        <ContactList />
      </div>
    );
  }
}

export default App;
