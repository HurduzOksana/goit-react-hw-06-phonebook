import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    if (name && number) {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
    }
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          className={style.input}
          placeholder="Add a name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name={name}
          onChange={event => setName(event.target.value)}
        ></input>
      </label>
      <input
        type="text"
        className={style.input}
        placeholder="Add a number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        number={number}
        onChange={event => setNumber(event.target.value)}
      ></input>

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
