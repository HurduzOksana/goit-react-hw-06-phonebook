import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

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
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3 d-flex">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add a todo"
        name={name}
        onChange={event => setName(event.target.value)}
      ></input>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add a todo"
        number={number}
        onChange={event => setNumber(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-secondary mb-3">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
