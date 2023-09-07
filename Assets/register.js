        function registerForm() {
            let userName = document.getElementById('userName');
            let email = document.getElementById('email');
            let password = document.getElementById('password');
            let confirmPassword = document.getElementById('confirmPassword');
            if (!userName.value) {
                userName.setAttribute('class', 'form-control border border-danger');
                return;
            } else {
                userName.setAttribute('class', 'form-control')
            }
            if (!email.value) {
                email.setAttribute('class', 'form-control border border-danger')
                return;

            } else {
                email.setAttribute('class', 'form-control')
            }
            if (!password.value) {
                password.setAttribute('class', 'form-control border border-danger')
                return;

            } else {
                password.setAttribute('class', 'form-control')
            }
            if (!confirmPassword.value) {
                confirmPassword.setAttribute('class', 'form-control border border-danger')
                return;

            } else {    
                confirmPassword.setAttribute('class', 'form-control')
            }
            if (confirmPassword.value !== password.value) {
                document.getElementById('cnfrmPassErr').innerHTML = 'Confirm password does not matched width password'
                confirmPassword.setAttribute('class', 'form-control border border-danger')
                return;

            } else {
                        // window.location.href = 'login-form.html';

                document.getElementById('cnfrmPassErr').innerHTML = ''
                confirmPassword.setAttribute('class', 'form-control')
            }
            let registerUser = [];
            if (!localStorage.getItem('registeredUser')) {
                resisterUser = [];
            } else {
                registerUser = JSON.parse(localStorage.getItem('registeredUser'));
            }
            let exists = 0;
            for (let i = 0; i < registerUser.length; i++) {
                if (registerUser[i].email === email.value) {
                    exists = 1;
                }
            }
            if (exists === 0) {
                document.getElementById('emailErr').innerHTML = ''
                registerUser.push({
                    userName: userName.value,
                    email: email.value,
                    password: password.value,
                })
                localStorage.setItem('registeredUser', JSON.stringify(registerUser))
                window.location.href = 'login.html';
            } else {
                email.setAttribute('class', 'form-control border border-danger')
                document.getElementById('emailErr').innerHTML = 'Email is already exist'
            }
        };