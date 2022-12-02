import React, { useState } from 'react';
import { Styled } from './Styled';
import PropTypes from 'prop-types';

const Form = ({addContacts}) => {

  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  // formSubmitHandle = e => {
  //   e.preventDefault();
  //   const add = this.props.addContacts(this.state);
  //   if (!add) {
  //     this.resetForm();
  //   }
  // };

  const formSubmitHandle = e => {
    e.preventDefault();
    const add = addContacts({name, number});
    setName('')
    setNumber('')
  };

    return (
      <Styled onSubmit={formSubmitHandle}>
        <label>
          <span>Name</span>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Styled>
    );
  
}
export default Form;

  Form.propTypes = {
    addContacts: PropTypes.func.isRequired,
  };