
import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


export const Contact = ({contact,onDelete}) => {
    return (
        <tr >
            <td>{contact.name}</td> 
            <td>{contact.tel}</td>
            <td>
            <Link to={`/${contact.id}/edit`} className="btn btn-warning  btn-sm mr-2">Edit Contact</Link>
                <button  className="btn btn-danger ml-2 btn-sm" onClick={onDelete.bind(this,contact.id)}>supprimer</button>
            </td>
         </tr>
    )
}
