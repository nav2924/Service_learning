import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import { Navbar, Form, Location } from "../components/index";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <Location />
    </div>
  );
};

export default Contact;
