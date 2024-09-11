// EmailButton.js

import React from 'react';

class EmailButton extends React.Component {
  sendEmail() {
    const recipient = 'example@example.com';
    const subject = 'Terveisiä!';
    const body = 'Hei, tässä terveisiä!';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  }

  render() {
    return (
      <button onClick={this.sendEmail}>Lähetä Sähköposti</button>
    );
  }
}

export default EmailButton;
