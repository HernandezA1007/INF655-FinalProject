import React from "react";
import "./contactpage.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactIcons } from "./data";

const ContactPage = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          message: "",
        },
        
    validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required"),
        message: Yup.string().required("Message is required"),
      }),
  
      onSubmit: (values) => {
        console.log(values);
        formik.resetForm();
      },
    });


    return (
        <section id="contact">
        <h2>Want to reach out</h2>
        <p>Shoot me a message or check out my other ways of communication</p>
        <div className="container">
          <h2>Contact Me</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Please enter your name" 
                {...formik.getFieldProps('name')} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                {...formik.getFieldProps('email')} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Enter your message" 
                {...formik.getFieldProps('message')} 
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
    
        <div>
          {contactIcons.map((contact) => (
          <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
          >
              {contact.icon}
          </a>
          ))}
        </div>
      </section>
    );
};

export default ContactPage;