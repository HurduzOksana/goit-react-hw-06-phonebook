import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  return (
    <div
      className="container"
      style={{ textAlign: 'center', marginTop: '10px' }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
