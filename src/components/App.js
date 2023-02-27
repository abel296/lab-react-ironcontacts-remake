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
    const sortedContactsList = [...contactsState].sort((a, b) => {
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
    setContactsState([...contactsState].sort((a, b) => a.popularity - b.popularity).reverse())
  }

  function removeContact(id) {
    setContactsState([...contactsState.filter(elm => elm.id !== id)])
  }

  return <>
    <section>
      <h1>IronContacts</h1>
      <section className="buttons">
        <button onClick={ () => addNewRandomContact(contacts) }>Add New Random Contact</button>
        <button onClick={ () => sortContactsByName() }>Sort by Name</button>
        <button onClick={ () => sortContactsByPopularity() }>Sort by Popularity</button>
      </section>
      { contactsState ? <ContactList contacts={ contactsState } removeContact={ (id) => removeContact(id) }></ContactList> : <i>Cargando</i> }
    </section>
  </>
}

