// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'XXXX';
const authToken = 'XXXX';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Testing client Message!',
     from: '+XXXX',
     to: '+XXXX'
   })
  .then(message => console.log(message.sid));