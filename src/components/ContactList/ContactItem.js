import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact({ id }));
  };
  return (
    <li>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3"></input>
          {name} : {number}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
