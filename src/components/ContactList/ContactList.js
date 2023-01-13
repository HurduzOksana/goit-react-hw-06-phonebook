import React from 'react';
import ContactItem from '../ContactList/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ul className="list-group">
      {contacts.map(contact => (
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

export default ContactList;
