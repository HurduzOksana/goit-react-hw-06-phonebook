import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import style from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact({ id }));
  };
  return (
    <li className={style.item}>
      {name} : {number}
      <button className={style.btn} onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
