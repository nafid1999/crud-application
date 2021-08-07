import React from 'react'
import {useEffect} from 'react'

import { Link,useHistory,useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const EditContact = (props) => {
  
    /**
     * data state 
     */
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const history = useHistory();
    const {id} =useParams();

    /****
     * didMounte lifecycle
    */
    useEffect(() => {
        //const { id } = props.match.params;
      axios.get(`/api/contact/${id}/edit`).then(res=>{
        setName(res.data.name);
        setPhone(res.data.tel);
      }).catch(err=>{
          console.error(arr)
      })
       
    }, [])
    
/**
 * EVENET HANDLER
*/

const onSubmit=(e) =>{
  
    e.preventDefault()

    if(!name || !phone  ) {

         alert('pleas fill in all the fields !');
         return
    }
    if( phone.length<9 || phone.length>10  ) {
        
        alert('invalide phone number');
        return ;
    }
    const data = { name: name, tel: phone };
    //persist  modification in data base
    axios.put(`/api/contact/${id}/edit`,data ).then(res=>{
        console.log(res.data)
        history.push('/')
        })

}


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card ">
                        <div className="card-header"><h3> Edit contact of: <strong> {name} </strong>  </h3>
                        <Link to="/" className="btn btn-dark float-right mt-0">BACK</Link>

                        </div>

                        <div className="card-body">
                            <form onSubmit={onSubmit} >                               
                                <div className="form-group">
                                    <label htmlFor="name">Full Name :</label>
                                    <input id="name" className="form-control" type="text" placeholder="Name ..."  onChange={(e)=>{setName(e.target.value)}} value={name} name="name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tel"> number Phone :</label>
                                    <input id="tel" className="form-control" type="text" placeholder="Phone Number..." onChange={(e)=>{setPhone(e.target.value)}} value={phone} name="phone"/>
                                </div>

                                <div className="form-group">
                                         <button type="submit" className="btn btn-primary btn-block form-control">Edit Contact</button>
                                </div>

                            </form>   
                        </div>
                    </div>
                </div>
            </div>
    </div>
);
    
}
