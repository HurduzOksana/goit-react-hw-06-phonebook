import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import style from './App.module.css';

function App() {
  return (
    <div className={style['App']}>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
