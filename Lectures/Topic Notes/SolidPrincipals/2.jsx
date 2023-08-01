import React from "react";

const Form = (props) => {
  return (
    <div>
      {/* common form fields and logic */}
      <form onSubmit={props.onSubmit}>
        <input type="text" name="name" value={props.name} onChange={props.onChange} />
        <input type="text" name="email" value={props.email} onChange={props.onChange} />
        {/* specific form fields */}
        {props.children}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <div>
      <h2>Login Form</h2>
      {/* specific form fields */}
      <input type="password" name="password" value={props.password} onChange={props.onChange} />
      {/* common form fields and logic */}
      <Form {...props}>{props.children}</Form>
    </div>
  );
};

const ContactForm = (props) => {
  return (
    <div>
      <h2>Contact Form</h2>
      {/* specific form fields */}
      <input type="text" name="subject" value={props.subject} onChange={props.onChange} />
      <textarea name="message" value={props.message} onChange={props.onChange}></textarea>
      {/* common form fields and logic */}
      <Form {...props}>{props.children}</Form>
    </div>
  );
};

export { LoginForm, ContactForm };