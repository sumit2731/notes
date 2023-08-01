import React, { Component } from 'react';

// Define the three separate interfaces as empty objects.
const EmailNotification = {};
const SMSNotification = {};
const PushNotification = {};

// Define the Notification component that implements all three interfaces.
class Notification extends Component {
  sendEmail() {
    console.log('Sending email notification');
  }

  sendSMS() {
    console.log('Sending SMS notification');
  }

  sendPush() {
    console.log('Sending push notification');
  }

  render() {
    return (
      <div>
        <h1>Notification Component</h1>
        <button onClick={() => this.sendEmail()}>Send Email</button>
        <button onClick={() => this.sendSMS()}>Send SMS</button>
        <button onClick={() => this.sendPush()}>Send Push</button>
      </div>
    );
  }
}

// Define a component that only needs to send emails and implements the EmailNotification interface.
class EmailSender extends Component {
  sendEmail() {
    console.log('Sending email notification');
  }

  render() {
    return (
      <div>
        <h1>Email Sender Component</h1>
        <button onClick={() => this.sendEmail()}>Send Email</button>
      </div>
    );
  }
}
Object.assign(EmailSender.prototype, EmailNotification);

// Define a component that only needs to send SMS notifications and implements the SMSNotification interface.
class SMSSender extends Component {
  sendSMS() {
    console.log('Sending SMS notification');
  }

  render() {
    return (
      <div>
        <h1>SMS Sender Component</h1>
        <button onClick={() => this.sendSMS()}>Send SMS</button>
      </div>
    );
  }
}
Object.assign(SMSSender.prototype, SMSNotification);

// Define a component that only needs to send push notifications and implements the PushNotification interface.
class PushSender extends Component {
  sendPush() {
    console.log('Sending push notification');
  }

  render() {
    return (
      <div>
        <h1>Push Sender Component</h1>
        <button onClick={() => this.sendPush()}>Send Push</button>
      </div>
    );
  }
}
Object.assign(PushSender.prototype, PushNotification);