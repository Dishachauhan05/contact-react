import React from "react";
import user from '../images/user.png';


const ContactCard = (props) => {
    const {id,name,email} = props.contact; //yaaha ye likhne se baar baar contact.something nhi likhna padega direct something likh sakte hai for eg line no.# 9 {contact.name} ke jagah sirf name likha hai..
     return(

        <div className="item" style={{display:"flex" , flexDirection:"row"}}>
            <img className="ui avatar image" src={user} alt="user" style={{marginTop:"5px"}}/>
                <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between",width:"100%" ,paddingLeft:"10px" , paddingRight:"10px"  ,margin:"5px"}} >
                <div className="content">
                    <div className="header">{name}</div>
                    <div >{email}</div>
                </div>
                <div><i className="trash alternate outline icon" style={{marginTop:"7px" , color:"red"}}></i>
                </div>
            </div>
            </div>
     );
};
export default ContactCard;