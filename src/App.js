import Favorite from "./pages/Favorite";
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Nav from "./Components/Nav";
import { useState } from "react";



function App() {
 const [contacts, setcontacts] = useState([])
 const formsub=(data)=>{
    console.log(data)
    setcontacts([...contacts,data])
  }
  const deleteContact=(id)=>{
    let newContact=contacts.filter((singleContact)=>{
      return singleContact.id !==id;
    })
    setcontacts(newContact)
  } 
  const favToggle=(id)=>{
    let updatedContact=contacts.map((singleContact)=>{
      return singleContact.id===id
      ?{...singleContact, fav: !singleContact.fav }
       :singleContact;
    }
    )
    setcontacts(updatedContact);
  }
  
 
  
  

  return (

  <Router>
    
    
      <Nav/>
     
      <Routes>
      
        <Route exact path="/" element={<Home formsub={formsub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>}></Route>
        <Route path="/Favorite" element={<Favorite  contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
  </Router>
    
  );
        };

export default App;
        

