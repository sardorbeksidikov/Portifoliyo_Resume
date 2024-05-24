import React,{useState} from "react";
import styles from "./contact.module.css";
import axios from "axios";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleMessage=(e)=>{
    setMessage(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message
    }
    try{
      const response = await axios.post("https://backend-for-portfolio.uc.r.appspot.com/message",formData);
      if(response){
        setName("");
        setEmail("");
        setMessage("");
        alert("Message submitted successfully");
        console.log("working");
      }
    }
    catch(err){
      console.error(err);
    }
  }






  return (
    <section className={styles.container} id="contact">
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>Contact</h3>

        <div className={styles.contactphone}>
          <div className={styles.emailbtn}>
            <div>
              {" "}
              <MdEmail className={styles.emailicon} />
            </div>
            <div>
              <a
                className={styles.gmail}
                href="mailto:sardorbeksidikov005@gmail.com">
                : sardorbeksidikov005@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.emailbtn}>
            <div>
              <FaPhoneVolume className={styles.emailicon} />
            </div>
            <div>
              <a
                className={styles.gmail}
                href="mailto:sardorbeksidikov005@gmail.com">
                : +998-93-146-16-02
              </a>
            </div>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prabeen-giri-2a8403203/">
            <i id={styles.linkedin} className="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/prabeen6260">
            <i id={styles.github} className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://t.me/sardorbek_sidikov1">
            <FaTelegram id={styles.telegram} className="teletram-icon" />
          </a>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.formBox} action="/message" method="post">
          <input
            className={styles.name}
            type="text"
            placeholder="Your Name"
            required
            name="name"
            onChange={handleName}></input>
          <input
            className={styles.email}
            type="email"
            placeholder="Your Email"
            required
            name="email"
            onChange={handleEmail}></input>
          <textarea
            className={styles.textBox}
            placeholder="Your Message...."
            required
            name="message"
            onChange={handleMessage}></textarea>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
