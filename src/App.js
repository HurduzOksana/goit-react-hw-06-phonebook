import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './App.module.css';

function App() {
  return (
    <div className={style['App']}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
