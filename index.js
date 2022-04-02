let submitButton = document.querySelector('#submit-button');
function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    }else {
        return false
    }
}
function validateNSFW(messageText) {
    if (messageText.includes('crap')) {
        return false
    }else {
        return true
    }
}


function clickListener(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if(emailValidate(emailText) !== true) {
        console.log("The email address must contain @");
        return false;
    }
    if (validateNSFW(messageText)  !== true) {
        console.log('Not safe for work' )
        return false
    }
    console.log('Thanks for your message')
    
}
submitButton.addEventListener('click', clickListener);

