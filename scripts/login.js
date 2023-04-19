// авторизация с сохранением пароля\логина и всплытием попапа-приветствия
const loginForm = document.getElementById("login_form");
const login = loginForm.querySelector("input");
const password = loginForm.querySelector("input + input")
const btntype = loginForm.querySelector("button")
const closeEnter = document.querySelector("#log-in");
const closeLogin = document.querySelector(".close-enter")

if (localStorage.length != 0) {
    login.value = localStorage.login 
    password.value = localStorage.password
}

loginForm.addEventListener("submit", ()=> {
    localStorage.login = login.value;
    localStorage.password = password.value;
        if(login.value ==="hello" && password.value ==="there"){
            // alert('General Kenobi');
        const closeEnterPop = new Logout("close-enter");
            closeEnterPop.open()
            const timerId = setTimeout(() => {
                closeEnterPop.close()
            },5000);
            clearTimeout(timerId) 
            closeEnterPop.setEventListener()
            document.cookie = 'login = hello'
            document.cookie = 'password = there'
        }else if(login.value !=="hello" || password.value !=="there"){
            alert('you are imposter! Go away')
            localStorage.clear()
        }
    })

















    
// loginForm.addEventListener("submit", ()=> {
//     localStorage.login = login.value;
//     localStorage.password = password.value;
//     if(login.value ==="hello" && password.value ==="there"){
//         // alert('General Kenobi');
//         const closeEnterPop = new ClosePopup("close-enter");
//         setTimeout(() =>{
//             // enterpopup.close()
//             closeEnterPop.close()
//         }, 5465); 
//         // document.cookie = 'login = hello'
//         // document.cookie = 'password = there'
//         closeEnterPop.setEventListener()
//     }else if(login.value !=="hello" || password.value !=="there"){
//         alert('you are imposter! Go away')
//         localStorage.clear()
//     }
// })





// console.log(closeLogin)
// console.log(loginForm, "loginForm");
// console.log(login, "login");
// console.log(password, "password");
// // console.log(btntype, "submit")
// console.log(toString(localStorage));




// const loginForm = document.querySelector("form");
// const formFields = loginForm.elements

// console.log(formFields)




////////////////////original
// let loginForm = document.querySelector("#enter-form-user");
// let login = document.querySelector("#login");
// let password = document.querySelector("#password")
// let btntype = document.getElementById("btnId")


// if (localStorage.length != 0) {
//     login.value = localStorage.login
//     password.value = localStorage.password
// }


// loginForm.addEventListener("submit", ()=> {
//     if(login.value =="a" && password.value =="b"){
//         alert('General Kenobi')
//     }
// })
// console.log(login.value, password.value)

// console.log(loginForm, "loginForm");
// console.log(login, "login");
// console.log(password, "password");
// console.log(btntype, "submit")
// console.log(toString(localStorage));

// const loginForm = document.querySelector("form");
// const formFields = loginForm.elements

// console.log(formFields)