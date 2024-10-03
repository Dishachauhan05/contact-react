import react,{useState,useEffect} from "react";
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
 const [contacts,setcontacts]= useState([]);

const addcontacthandler =(contact)=>{
 console.log(contact);
 setcontacts([...contacts,contact])
};

useEffect(()=>{
  const retrivercontacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrivercontacts)setcontacts(retrivercontacts);
  },[]);
  
useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
   <div className="ui container">
    <Header />
    <Addcontact addcontacthandler={addcontacthandler} />
    <Contactlist contacts={contacts} />
   </div>
  );
}

export default App;
