import React from 'react'
import ReactDOM from 'react-dom';


class Phone extends React.Component {
    

    constructor(props){
        super(props)
        this.state={
           contacts:[ {
            id:1,
            name:"amine",
            phone:"0657421844"
        },
        {
            id:2,
            name:"amine",
            phone:"0657421844"
        }, 
        {
            id:3,
            name:"amine",
            phone:"0657421844"
        }]
        }
    }
    
render(){
    return (
       
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">LIST OF CONTACTS</div>
        
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

                                            {this.state.contacts.map(contact=>
                                                    <tr key={contact.id}>
                                                        <td>{contact.name}</td>
                                                        <td>{contact.phone}</td>
                                                        <td>
                                                            <a className="btn btn-danger ">delete</a>
                                                            <a href="" className="btn btn-warning ml-2">edit</a>
                                                        </td>
                                                    </tr>
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
}

export default Phone;

if (document.getElementById('root')) {
    ReactDOM.render(<Phone />, document.getElementById('root'));
}
