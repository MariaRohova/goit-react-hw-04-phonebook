import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contacts } from './Styled';

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <Contacts>
      {filterContacts.map(({ name, number, id }) => {
        return (
          <li key={nanoid()}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};