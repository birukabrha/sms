const credentials = {
    apiKey: '7d2f0cfe3db072dee6a78bf9be3b4ad465d8bc3fbc074adf5f4356bdd51c23af',
    username: 'chewata',
}

const AfricasTalking = require('africastalking')(credentials);

const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        to: ['+251921312592'],
        message: "Test 1",
        // Set your shortCode or senderId
        from: '9651'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();