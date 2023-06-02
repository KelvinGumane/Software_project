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
    // Getting the main form
    let form = document.getElementById('myform');
  
    // Getting the input elements
    let name = document.getElementById('username');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
  
    // Get the values of the input fields
    let nameInput = name.value;
    let surnameInput = surname.value;
    let emailInput = email.value;
    let passwordInput = password.value;
  
    if (nameInput.trim() === '' || surnameInput.trim() === '' || emailInput.trim() === '' || passwordInput.trim() === '') {
      alert('Please fill all the requirements.');
      return false;
    } else {
      alert('Your form has been submitted.');
      location.href='main.html'
      return true;
      // You can uncomment the following line to submit the form programmatically:
       form.submit();
    }
  }
  

//function  for the login
function login() {
    let name = document.getElementById('username').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(name.trim() == 'name' && surname.trim() == 'surname' && email.trim() == 'email' && password.trim() == 'password'){
        //Sucessful login
        alert('Login sucessful');
        location.href='main.html';
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


//sign in( from  first page to sign in page)
function newuser() {
    let newuser=document.querySelector('newuser')
    location.href='signin.html'
}

//log in (from first page to log in page)
function olduser(){
    let olduser=document.querySelector('olduser')
    location.href='login.html'
}

//Dark mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
