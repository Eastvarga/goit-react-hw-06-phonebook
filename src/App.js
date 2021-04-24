import Form from "./components/Form";
import ContactList from "./components/ContactList";
import FindInput from "./components/FindInput";
import "./styles.css";

function App() {
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

export default App;
