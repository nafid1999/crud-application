import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Contact } from './Contact';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Contacts() {

     //DECLARE STATES
    const [contacts,setContact] = useState([])
    const [success,setSuccess]=useState('');

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
         if(window.confirm("are you sure,you want to delete this record !"))
            axios.delete(`/api/contact/${id}/delete`).then(response=>{
                if(response.data.status===200)
                   setSuccess(true)
            }).catch(err=>{
                setSuccess(false)
            })
    
         }

         const alertSuccess=()=>{

            setTimeout(()=>{
                setSuccess('')
            },4000)
           return <div className="alert alert-success">Contact deleted successfully.</div>
        
        }
        const alertDanger=()=>{
        
            setTimeout(()=>{
                setSuccess('')
            },4000)
           return <div className="alert alert-danger">Contact not deleted ,try again.</div>
        
        }
        
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-8">
                     {success===true && 
                    alertSuccess()
                    }  
                    {success===false && 
                        alertDanger()
                    } 
                    <div className="card text-center">
                        <div className="card-header"><h3>Lists of Contacts</h3>

                        </div>

                        <div className="card-body">
                        <Link to="/AddContact" className="btn btn-primary float-left mt-0 mb-4">AJOUTER</Link>

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
