import React from 'react'
import Contact from '../Components/Contact'

import Form from '../Components/Form'

function Home({formsub,contacts, deleteContact,favToggle,fav}) {
  //console.log(contacts)
  
  return (
    <div className="container my-5">
    <div className="row justify-content-sm-center my-5">
      
      <Form formsub={formsub}/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5"></div>
      {contacts.map((singleContact)=>{
        return<Contact key={singleContact.id} deleteContact={deleteContact} favToggle={favToggle} contact={singleContact}/>
      })}
      <contacts/>
      
    </div>
    </div>
  )
}

export default Home