'use strict';

// Удаление всех символов из строки str кроме чисел
// const getNumbers = (str) => str.replace(/\D+/g,"");

let userName = '', userLName = '', userAge = 0, userEmail = '', userTel = '';

inputName('4');

function inputName(name) {
    userName = name.trim();
    console.log('Username updated: ' + userName);
}
function inputLName(lName) {
    userLName = lName.trim();
    console.log('User\'s last name updated: ' + userLName);
}
function inputAge(age) {
    userAge = +age;
    console.log('User\'s age updated: ' + userAge);
}
function inputEmail(email) {
    userEmail = email.trim();
    console.log('User\'s email updated: ' + userEmail);
}
function inputTel(tel) {
    const getNumbers = (tel) => tel.replace(/\D+/g,"");
    userTel = getNumbers;
    console.log('User\'s number updated: ' + userTel);
}

function send() {
    //username check
    if (userName.length < 2) {
        alert('В имени должно быть минимум 2 символа!');
    }

    else if (userLName.length < 2) {
        alert('В фамилии должно быть минимум 2 символа!');
    }

    //Email check
    else if (userEmail.length < 5) {
        alert('В e-mail должно быть минимум 5 символов!');
    }
    else if (userEmail.indexOf('@') === -1) {
        alert('В e-main должен бьть символ \'@\'!');
    }

    //Age check
    else if (userAge < 1 || userAge > 130) {
        alert('Укажите ваш настоящий возраст!');
    }

    //Tel check
    else if (userTel < 11) {
        alert('Слишком короткий номер! (Поддерживаются только белорусские операторы связи)');
    }

    else {
        alert('Спасибо, данные отправлены!');
    }
}