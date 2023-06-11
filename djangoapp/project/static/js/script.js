const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};


//login
const logform = form.value;
const logusername = usernameValue;
const logemail = emailValue;
const logpassword = passwordValue;

logform.addEventListener('submit', e =>{
  e.preventDefault();

   validatelogin();
});

const logsetError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const logsetSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');

}

const validatelogin = () => {
  const logusernameValue = logusername.value.trim()
  const logemailValue = logemail.value.trim();
  const logpasswordValue = logpassword.value.trim();
 

  if(usernameValue === '') {
      logsetError(username, 'Username is required');
  } else {
      setSuccess(username);
  }

  if(emailValue === '') {
      logsetError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      logsetError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }

  if(passwordValue === '') {
      logsetError(password, 'Password is required');
  } else if (passwordValue.length < 8 ) {
      logsetError(password, 'Password must be at least 8 character.')
  } else {
      logsetSuccess(password);
  }

  if(password2Value === '') {
      logsetError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
      logsetError(password2, "Passwords doesn't match");
  } else {
      logsetSuccess(password2);
  }

};


//login connection (from first page to sign in page)
function signin(){
    let signin = document.querySelector('signin')
    location.href= 'signin.html'
}

//sign in connection( from  first page to login page)
function login() {
  let newuser=document.querySelector('login')
  location.href='login.html'
}

//go shop connection (from first page to go shop)
function goshop() {
    let goshop = document.querySelector('goshop')
    location.href = 'main.html'
}




//shopbutton( how each button connects to the rights pages)
function shopbutton(){
  let shopb = document.querySelector('shopb');
  location.href ='shop.html';
}

function shopbutton1(){
    let shop1 = document.querySelector('shopb1');
    location.href = 'shop1.html';
}

function shopbutton2(){
    let shop2 = document.querySelector('shop2');
    location.href = 'shop2.html'
}

function shopbutton3(){
    let shop3 = document.querySelector('shop3');
    location.href = 'shop3.html'
}




//Dark mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');
});
