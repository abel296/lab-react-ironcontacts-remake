import './ContactCard.css'

export function ContactCard({ id, pictureUrl, name, popularity, removeContact }) {
    return <>
        <td className='card'>
            <figure className='row-elm'>
                <img src={ pictureUrl } alt={ name }></img>
            </figure>
            <h3 className='row-elm'>{ name }</h3>
            <h3 className='row-elm'>{ popularity }</h3>
            <button className='row-elm' onClick={ () => removeContact(id)}>Delete</button>
        </td>
    </>
}