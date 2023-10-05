
            var user= document.forms['form']['user'];
            var password= document.forms['form']['password'];

            var username_error= document.getElementById('username_error');
            var pass_error= document.getElementById('pass_error');

            function validated(){
                if(user.value.length < 5){
                    user.style.border="1px solid red";
                    username_error.style.display="block";
                    user.focus();
                    return false;
                }
                if(password.value.length < 5){
                    password.style.border="1px solid red";
                    pass_error.style.display="block";
                    password.focus();
                    return false;
                }

            }
       