import { useEffect, useState } from "react"
import { ContactList } from './ContactsList';
import contacts from '../contacts.json';
import './App.css'


export function App() {
  const [contactsState, setContactsState] = useState()
  
  const firstFiveContacts = contacts.filter((elm, idx) => idx <= 4)
  useEffect(() => setTimeout(() => setContactsState(firstFiveContacts), 1000), [firstFiveContacts])

  return <>
    <section>
      <h1>IronContacts</h1>
      { contactsState ? <ContactList contacts={ contactsState }></ContactList> : <i>Cargando</i> }
    </section>
  </>
}

