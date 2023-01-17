import React from 'react';
import ContactItem from '../ContactList/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import style from './ContactList.module.css';
import { getContactFilter } from '../../redux/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={style.list}>
      {filteredContacts.map(contact => (
        <ContactItem
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
