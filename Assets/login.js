function logIn() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.warn('email----------------------' + email);
    console.warn('pass----------------------' + password);

    if (email == '') {
        document.getElementById('errEmail').innerHTML = 'Please Fill This File'
    }

    if (password == '') {
        document.getElementById('errPass').innerHTML = 'Please Fill This File'
    }

    let registerUser = [];
    let username = '';
    if (!localStorage.getItem('registeredUser')) {
        resisterUser = [];
    } else {
        registerUser = JSON.parse(localStorage.getItem('registeredUser'));
    }
    let exists = 0;
    for (let i = 0; i < registerUser.length; i++) {
        if (registerUser[i].email === email && registerUser[i].password === password) {
            console.warn('trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
            username = registerUser[i].userName;
            exists = 1;
        }
    }
    if (exists === 1) {
        let user = {
            name: username,
            email: email,
            password: password,
        }
        localStorage.setItem('loginuser', JSON.stringify(user))
        window.location.href = 'index.html';
    }
    else {
        alert('Invalid credential')
    }
}