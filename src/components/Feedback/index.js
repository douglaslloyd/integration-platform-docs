import React from 'react';
 
export default function Feedback({ resource }) {
  return <div>
    <form name="feedback-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="feedback-form" />
      <label>Your feedback helps us improve our docs.</label><textarea rows={5} cols={30}/>
      <button type="submit">Send</button>
    </form>
  </div>;
}