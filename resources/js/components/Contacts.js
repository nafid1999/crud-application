import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Contact } from './Contact';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Contacts() {

     //DECLARE STATES
    const [contacts,setContact] = useState([])
   
    // HAS ROL OF DidMountFunction
    useEffect( ()=>{

      axios.get('/api/contacts/').then(response=>{
        //  setContact([...response.data])
         console.log(response.data)
         setContact([...response.data])
      }).catch(err=>{
            console.log(err)}
            )
       
     },[]);

    /**
     * DELETE CONTACT FROM DOM
     * */ 
    const deletContact=(id)=>{

         let conts=contacts.filter(contact=>contact.id!==id)
         setContact(conts)

         axios.delete(`/api/contact/${id}/delete`).then(response=>{console.log(response.data)})
         }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h3>React Component in Laravel</h3>

                            <Link to="/AddContact" className="btn btn-primary float-right mt-0">AJOUTER</Link>
                        </div>

                        <div className="card-body">
                                <table className="table table-striped">
                                            <thead>
                                                    <tr>
                                                        <th>Nom</th>
                                                        <th>Phone</th>
                                                        <th>action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {contacts.map(contact=>
                                                           <Contact key={contact.id} contact={contact} onDelete={deletContact}  />
                                                        )}
                                                
                                                </tbody>
                                            
                                    </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;

// DOM element
