import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import { useEffect } from 'react';

const App = () => {

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState (JSON.parse (localStorage.getItem('contacts')) || [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContacts = ({ name, number }) => {
    const checkedName = checkingNameInState(name);
    if (checkedName) {
      alert('this name is already available');
      return;
    }
    setContacts(prevState =>
      [{ id: nanoid(), name, number }, ...prevState],
    );
}

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(el => el.id!== contactId)
     });
  };

  const checkingNameInState = e => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === e.toLowerCase()
    );
  }

  const handleFilterChange = e => {
   setFilter(e.target.value);
  }

  const getFilterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const filterContacts = getFilterContacts(); 
  
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addContacts={addContacts} />
        <h2>Contacts</h2>
        <Filter
          handleChange={handleFilterChange}
          filterStateData={filter}
        />
        <ContactList
          filterContacts={filterContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
};


export default App;
