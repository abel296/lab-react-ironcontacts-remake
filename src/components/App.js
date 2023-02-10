import { useState } from "react"
import { ContactList } from './ContactsList';
import contacts from '../contacts.json';
import './App.css'


export function App() {
  const [contactsState, setContactsState] = useState(contacts.filter((elm, idx) => idx <= 4))
  
  function addNewRandomContact(contacts) {
    const restContacts = contacts.filter(elm => !contactsState.includes(elm))
    const randomIndex = Math.floor(Math.random() * ((restContacts.length - 1) - 0) + 0)
    setContactsState([...contactsState, restContacts[randomIndex]])
  }

  return <>
    <section>
      <h1>IronContacts</h1>
      <button onClick={ () => addNewRandomContact(contacts) }>Add New Random Contact</button>
      { contactsState ? <ContactList contacts={ contactsState }></ContactList> : <i>Cargando</i> }
    </section>
  </>
}

