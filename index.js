// 1. Створити розмітку з двома текстовими полями та кнопкою.
// При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

// let field1 = prompt("Enter the value for field-1 📋");
// let field2 = prompt("Enter the value for field-2 📋");
// if (field1 !== '' && field2 !== '' ) {
//    alert("Thank's for fillign out both field's 👍") 
// }
// else {
//     alert("You haven't fiiled out both field's ❌")
// }



// 2.Створити розмітку з двома числовими полями та кнопкою.
// При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".


// let num1 = prompt("Write a number📋");
// let num2 = prompt("Write a number📋");
// if (num1 + num2 > 10) {
//    alert("Your number bigger then 10👍") 
// }
// else {
//     alert("The number is smaller then 10 ❌")
// }


// 3.Створити розмітку з текстовим полем та кнопкою.
// При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".


// let placeHolder = prompt("Write 'JavaScript'📋");
// if (placeHolder.includes("javascript")){
//    alert("You have writen 'JavaScript'👍"); 
// }
// else {
//     alert("You have not writen 'JavaScript' ❌");
// }


// 4.Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти,
// чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".


// let num = prompt("Write a number📋");
// if (num > 10 && num < 20) {
//    alert("Число входить в діапазон від 10 до 20👍") 
// }
// else {
//     alert("Число не входить в діапазон від 10 до 20 ❌")
// }


// 5.Створити розмітку з формою з полями введення та кнопкою.
// При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.


let uName = "Dima"
let uMail = "@ExampleDimamail@gmail.com"
let uPassword = "Dima1234@"
let userName = prompt("Enter your username:")
let userMail = prompt("Enter your usermail:")
let userPassword = prompt("Enter your password:")

if (uName === userName && uMail === userMail && uPassword === userPassword) {
    alert("You secsessfully passed our Log-in, you may now go to our main website with your account. Welcome-back👍 ")
} else {
    alert("Error try please again")
}












