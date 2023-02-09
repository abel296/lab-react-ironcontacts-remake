import { ContactCard } from "./ContactCard";
import './ContactList.css'

export function ContactList({ contacts }) {

    return <>
        <table>
            <thead>
                <tr>
                    <th>
                        <h2 className="picture-header">Picture</h2>
                    </th>
                    <th>
                        <h2 className="name-header">Name</h2>
                    </th>
                    <th>
                        <h2 className="popularity-header">Popularity</h2>
                    </th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    { contacts.map(elm => <ContactCard { ...elm } key={ elm.id } ></ContactCard>) }
                </tr>
            </tbody>
        </table>
    </>
}