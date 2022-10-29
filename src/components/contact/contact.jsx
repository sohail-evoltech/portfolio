import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import {useRef, useState, useContext } from "react"
import { ThemeContext } from "../../context"
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formref = useRef ()
    const [done,setdone] = useState(false)
    const Theme = useContext(ThemeContext);
    const darkmode = Theme.state.darkmode;

    const handlesubmit = (e)=>{
        e.preventdefault();
        emailjs.sendForm(
            "service_djc0id7",
            "template_0464bc8",
             formref.current,
             "MIUAVHInPgHj1iXOi"
         )
      .then((result) => {
          setdone(true)
          (result.text);
      }, (error) => {
          console.log
          (error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"> </div>
              <div className="c-wrapper">
                <div className="c-left">
                  <h1 className="c-title"> To contact me </h1>
                   <div className="c-info"> </div>
                     <div className="c-info-item">
                      <img src={phone} alt="" className="c-icon" />
                        +91 93800 05550
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={email} alt="" />
                    mdmoosasohail8112@gmail.com
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={address} alt="" />
                    No;427/3, 11th street, South colony, ICF, Chennai-600038
                </div>
            </div>
         </div>
         <div className="c-right">
            <p className="c-desc">
                <b>
                    Lorem ipsum dolor sit amet consectetur</b> adipisicing elit. Est neque autem adipisci eveniet, corl!
            </p>
             <form ref={formref} onSubmit={handlesubmit} >
                <input style={{backgroundcolor: darkmode && "#333 "}} type="text" placeholder="Name" name="user_name" />
                <input style={{backgroundcolor: darkmode && "#333 "}} type="text" placeholder="Subject" name="user_subject" />
                <input style={{backgroundcolor: darkmode && "#333 "}} type="text" placeholder="Email" name="user_email" />
                <textarea style={{backgroundcolor: darkmode && "#333 "}} rows="5" placeholder="Message" name="message"/>
                <button> Submit </button>
                {done && "Thank you..."}
             </form>
             </div> 
          </div>


    );
};

export default Contact