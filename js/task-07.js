console.log('Задание 7*');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
  return true;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login) === false) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(allLogins, login) === false) {
    message = 'Такой логин уже используется!';
  } else {
    allLogins.push(login);
    message = 'Логин успешно добавлен!';
  }

  return console.log(message);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
