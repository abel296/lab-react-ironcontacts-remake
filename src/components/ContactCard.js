import './ContactCard.css'

export function ContactCard({ pictureUrl, name, popularity }) {
    return <>
        <td className='card'>
            <figure>
                <img src={ pictureUrl } alt={ name }></img>
            </figure>
            <h3>{ name }</h3>
            <h3>{ popularity }</h3>
        </td>
    </>
}