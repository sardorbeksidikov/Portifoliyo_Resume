import React, { useState } from "react";
import styles from "./contact.module.css";
import axios from "axios";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "", // phone maydonini string sifatida belgilash
    message: "",
  });
  const telegram_bot_id = "7189675187:AAE30yoe6fPBLlyFNRLBHw6XCy0JGawoWGs";
  const chat_id = 5250031198;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Telefon raqamini faqat raqamlar bilan cheklash
      const onlyNums = value.replace(/[^0-9]/g, "");
      setForm({
        ...form,
        [name]: onlyNums,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, message } = form;
    try {
      await axios.post(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        {
          chat_id,
          text: `New message from ${name} (${phone}):\n${message}`,
        }
      );
      // Display a success message to the user
      document.getElementById("status").textContent =
        "Message sent successfully!";
      // Formni tozalash
      setForm({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Display an error message to the user
      document.getElementById("status").textContent =
        "Error sending message. Please try again later.";
    }
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>Contact</h3>

        <div className={styles.contactphone}>
          <div className={styles.emailbtn}>
            <div>
              <MdEmail className={styles.emailicon} />
            </div>
            <div>
              <a
                className={styles.gmail}
                href="mailto:sardorbeksidikov005@gmail.com">
                : sardorbeksdikov@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.emailbtn}>
            <div>
              <FaPhoneVolume className={styles.emailicon} />
            </div>
            <div>
              <a className={styles.gmail} href="tel:+998931461602">
                : +998-93-146-16-02
              </a>
            </div>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sardorbek-sdikov-b282162a0/"
            rel="noopener noreferrer">
            <i id={styles.linkedin} className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/prabeen6260"
            rel="noopener noreferrer">
            <i id={styles.github} className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://t.me/sardorbek_sidikov1"
            rel="noopener noreferrer">
            <FaTelegram id={styles.telegram} className="telegram-icon" />
          </a>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.formBox} onSubmit={handleSubmit}>
          <input
            className={styles.name}
            type="text"
            placeholder="Your Name"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className={styles.email}
            type="text"
            placeholder="Phone number +998-"
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            className={styles.textBox}
            placeholder="Your Message...."
            required
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
        <div id="status" className={styles.status}></div>
      </div>
    </section>
  );
};
