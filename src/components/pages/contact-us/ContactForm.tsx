import React from "react";
import FormSubmitButton from "./FormSubmitButton";
import { handleSubmit } from "./FormHandleSubmit";

const ContactForm = () => {
  return (
    <>
      <form action={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="f-name">Full Name</label>
            <input
              type="text"
              id="f-name"
              name="name"
              className="form-control"
              placeholder="What's your name?"
              required
            />
          </div>
          <div className="col-md-6 mt-20 mt-md-0">
            <label htmlFor="email-address">Email</label>
            <input
              type="email"
              id="email-address"
              name="email"
              className="form-control"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="col-md-12 mt-20">
            <label htmlFor="form-sub">Subject</label>
            <input
              type="text"
              id="form-sub"
              name="subject"
              className="form-control"
              placeholder="Your subject"
              required
            />
          </div>
          <div className="col-md-12 mt-20">
            <label htmlFor="form-text">Messages</label>
            <textarea
              cols={30}
              rows={5}
              name="message"
              id="form-text"
              className="form-control pt-15"
              placeholder="Your message......"
              required
            ></textarea>
          </div>
          <div className="col-12 mt-3">
            <p className="policy-text">
              By submitting this form you consent to us emailing you
              occasionally about our products and services. You can unsubscribe
              from emails at any time, and we will never pass your email onto
              third parties. Privacy Policy
            </p>
          </div>
          <div className="col-12 mt-35">
            <FormSubmitButton />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
