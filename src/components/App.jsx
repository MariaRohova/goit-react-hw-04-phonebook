import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import { useEffect } from 'react';

const App = () => {

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState (JSON.parse (localStorage.getItem('contacts')) || [])
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };


  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate( prevState) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  
  //  }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  // addContacts = ({ name, number }) => {
  //   const checkedName = this.checkingNameInState(name);
  //   if (checkedName) {
  //     alert('this name is already available');
  //     return true;
  //   }
  //   this.setState(prevState => ({
  //     contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
  //   }));
  // };

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

  // deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(el => el.id !== contactId),
  //     };
  //   });
  // };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(el => el.id!== contactId)
     });
  };

  // checkingNameInState = e => {
  //   return this.state.contacts.find(
  //     ({ name }) => name.toLowerCase() === e.toLowerCase()
  //   );
  // };

  const checkingNameInState = e => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === e.toLowerCase()
    );
  }

  // handleFilterChange = ({target:{value}}) => {
  //   this.setState({ 'filter': value });
  // };

  const handleFilterChange = ({ target: { value } }) => {
    return setFilter({ 'filter': value });
  }

  // getFilterContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

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
