'use strict'

const userform = new UserForm();
userform.loginFormCallback = (data) => {
  const {login, password} = data;

  const callback = (response) => {
    if(response.success === false) {
    userform.setLoginErrorMessage(response.error);
   }  else {
      location.reload();
    }
  };
  
  ApiConnector.login({login, password}, callback);   
}


userform.registerFormCallback = (data) => {
  const {login, password} = data;

  const callback = (response) => {
    if(response.success === false) {
    userform.setRegisterErrorMessage(response.error);
   }  else {
      location.reload();
    }
  };
  
  ApiConnector.register({login, password}, callback);   
}