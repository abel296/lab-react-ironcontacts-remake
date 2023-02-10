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

  function sortContactsByName() {
    const contactsListCopy = [...contactsState]
    const sortedContactsList = contactsListCopy.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    setContactsState(sortedContactsList)
  }

  function sortContactsByPopularity() {
    const contactsListCopy = [...contactsState]
    const sortedContactsList = contactsListCopy.sort((a, b) => a.popularity - b.popularity).reverse()
    setContactsState(sortedContactsList)
  }

  return <>
    <section>
      <h1>IronContacts</h1>
      <button onClick={ () => addNewRandomContact(contacts) }>Add New Random Contact</button>
      <button onClick={ () => sortContactsByName() }>Sort by Name</button>
      <button onClick={ () => sortContactsByPopularity() }>Sort by Popularity</button>
      { contactsState ? <ContactList contacts={ contactsState }></ContactList> : <i>Cargando</i> }
    </section>
  </>
}

