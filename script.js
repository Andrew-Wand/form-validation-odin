const emailInput = document.getElementById('email-input');
const countryInput = document.getElementById('country-input');
const zipInput = document.getElementById('zip-input');
const passwordInput = document.getElementById('password-input');
const confirmInput = document.getElementById('confirm-input');

const formButton = document.getElementById('form-button');








// submit form function

function formSubmit() {
    
    // Email validation

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailInput.value.trim() === '') {
        console.log('there is nothing there!');
    } else if (emailInput.value.match(mailFormat)) {
        console.log('its an email!');
    } else {
        console.log('its not an email!');
    }
    
    
    // Country validation
    
    if (countryInput.value.trim() === '') {
        console.log('there is no country there!');
    } else {
        console.log('country good!');
    }
    




    // Zip validation

    let zipFormat = /^\d{5}(-\d{4})?$/;

    if (zipInput.value.trim() === '') {
        console.log('there is no zip there!');
    } else if (zipInput.value.match(zipFormat)) {
        console.log('zip good!');
    } else {
        console.log('its not a zip!');
    }





    
    // Password validation

    let passwordFormat = /^[A-Za-z]\w{4,25}$/;

    if (passwordInput.value.match(passwordFormat)) {
        console.log('password good!');
    } else {
        console.log('password no good!');
    }

        // Confirm password

     if (passwordInput.value.trim() === confirmInput.value.trim()) {
         console.log('confirm good!');
     } else {
         console.log('confirm bad!');
     }







}









// Event listeners


formButton.addEventListener('click', formSubmit);