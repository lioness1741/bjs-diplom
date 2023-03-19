const logoutButton = new LogoutButton(); //Выход из личного кабинета
logoutButton.action = () => {
  const callback = (response) => {
  if(response.success === true) {
      location.reload();
    }
  };
  ApiConnector.logout(callback);
};

ApiConnector.current((response) => {  
  if(response.success === true) {
    ProfileWidget.showProfile(response.data);
}
});  //Получение информации о пользователе

const ratesBoard = new RatesBoard();

const updatesRatesBoard = () => {    
  ApiConnector.getStocks((response) => {
  if(response.success === true) {
    ratesBoard.clearTable();
    ratesBoard.fillTable(response, data);
  }
});
};    //Получение текущих курсов валюты

setInterval = (() => {
  updatesRatesBoard();
}, 1000);

const moneyManager = new MoneyManager(); //Операции с деньгами

moneyManager.addMoneyCallback = (data) => {
  ApiConnector(addMoney) = ((data, response) => {
    if(response.success === true) {
      profileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, 'пополнение баланса прошло успешно.');
    }  else {
       moneyManager.setMessage(response.success, response.error);      
    }    
  });
};  //Реализуйте пополнение баланса

moneyManager.conversionMoneyCallback = (data) => {
  ApiConnector(convertMoney) = ((data, response) => {
    if(response.success === true) {
      profileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, 'конвертирование валюты прошло успешно.');
    }  else {
       moneyManager.setMessage(response.success, response.error);      
    }   
  });
  };    // Реализуйте конвертирование валюты

moneyManager.sendMoneyCallback = (data) => {
  ApiConnector(transferMoney) = ((data, response) => {
    if(response.success === true) {
      profileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, 'перевод валюты прошел успешно.');
    }  else {
       moneyManager.setMessage(response.success, response.error);      
    }    
  });
  };     //Реализуйте перевод валюты

const favoritesWidget = new FavoritesWidget();
// Работа с избранным
  
  ApiConnector.getFavorites((response) => {
  if(response.success === true) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response, data);
    favoritesWidget.updateUsersList(response, data);
  }
});  // Запросите начальный список избранного

favoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites((data, response) => {
    if(response.success === true) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response, data);
    favoritesWidget.updateUsersList(response, data);
    favoritesWidget.setMessage(response.success, 'пользователь добавлен в список избранных успешно.');
    }  else {
       favoritesWidget.setMessage(response.success, response.error);      
  }
  });
};  // Реализуйте добавления пользователя в список избранных

favoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites((data, response) => {
    if(response.success === true) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response, data);
    favoritesWidget.updateUsersList(response, data);
    favoritesWidget.setMessage(response.success, 'пользователь добавлен в список избранных успешно.');
    }  else {
       favoritesWidget.setMessage(response.success, response.error);      
  }
  });
};  // Реализуйте удаление пользователя из избранного