const { BlockList } = require('net')

function validateEmail(){
    let email = document.getElementById('email')

    //Get the value of the email inputt
    const emailInput = email.value
    
    //Regular expression pattern for validating an email
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //Check if email is valid
    if(emailPattern.test(email)) {
        // Email is valid
        console.log('Email is valid')
    }else {
        //Email is invalid
        console.log('Email is invalid')
    }

}

//function that submites the sign up
function submit() {
    //Getting to the main form
    let form = document.getElementById('myfornm')

    // Getting the access to the input form
    let name = document.getElementById('username')
    let surname = document.getElementById('surname')
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    //Get the values of the input values
    let nameinput = name.value
    let surnameinput = surname.value
    let emailinput = email.value
    let passwordinput = password.value 

    if(name == '' || surname == '' || email == '' || password == '' ) {
        console.log('Please fill all the requiremnts')
    }else{
        console.log('Your fornm has been submited')
    }

    myform.submit()
}

//function  for the login
function login() {
    let name = document.getElementById('username').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(name == 'name' && surname == 'surname' && email == 'email' && password == 'password'){
        //Sucessful login
        alert('Login sucessful')
    } else{
        //failed login
        alert('One of the  inputs is incorrect! Please try again. ')
    }
}

//Password recovery

//GEnerate random token
function generatetoken() {
    let token = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let tokenLength = 30;

    for (var i = 0; i < tokenLength; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      return token
}

//Password recovery code
function recoverPassword() {
    var email = document.getElementById("email").value;
    
    // Check if email is valid and exists in your system
    // .
    // server.js

const express = require('express');
const app = express();

// Endpoint for email verification
app.get('/verify-email', (req, res) => {
  const email = req.query.email;

  // Perform email verification logic here
  // ...

  // Example: Simulating email existence check
  const emailExists = simulateEmailCheck(email);

  res.json({ exists: emailExists });
});

// Simulated email existence check
function simulateEmailCheck(email) {
  // Place your email verification logic here
  // This is just a placeholder example
  const existingEmails = ['example@gmail.com', 'test@yahoo.com'];
  return existingEmails.includes(email);
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

    
    if (emailIsValid && emailExists) {
      var token = generateToken();
      
      // Store the token in the browser's local storage
      localStorage.setItem("passwordResetToken", token);
      
      // Redirect the user to the password reset page
      window.location.href = "password-reset.html";
    } else {
      alert("Invalid email address. Please try again.")
 }
}



//main page

//shopbutton
function shopbutton(){
    let shopb = document.querySelector('shopb')
    location.href ='shop.html'   
}
