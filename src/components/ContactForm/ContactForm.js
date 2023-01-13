import React, { useState } from 'react';
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
          name={name}
          onChange={event => setName(event.target.value)}
        ></input>
      </label>
      <input
        type="text"
        className={style.input}
        placeholder="Add a number"
        number={number}
        onChange={event => setNumber(event.target.value)}
      ></input>

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
