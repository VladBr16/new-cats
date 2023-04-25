// import {EnterPopup} from "./enterpopup.js"
// import { Logout } from "./logout.js";
// import { log_in } from "./login.js";


// popup
const btnEnter = document.querySelector("#enter")
const enterpopup = new EnterPopup2("open-enter")
// const loginForm = document.getElementById("login_form");
// const login = loginForm.querySelector("input");
// const password = loginForm.querySelector("input + input")
// const loginForm = document.getElementById("login_form");
// const login = loginForm.querySelector("input");
// const password = loginForm.querySelector("input + input")
// const btntype = loginForm.querySelector("button")
// const closeEnter = document.querySelector("#log-in");
// const closeLogin = document.querySelector(".close-enter")


enterpopup.setEventListener();
btnEnter.addEventListener("click", () => enterpopup.open());


const loginForm2 = document.getElementById("enteruserform")
const login = loginForm2.querySelector("input")
const password = loginForm2.querySelector("input+input")

const buttonEnter = loginForm2.querySelector("button")
const closeLogin = document.querySelector(".close-enter")


if (localStorage.length != 0) {
    login.value = localStorage.login 
    password.value = localStorage.password
}

// buttonEnter.addEventListener("buttonlog", ()=>{
//     localStorage.login = login.value;
//     localStorage.password = password.value;
//     if(login.value ==="hello" && password.value ==="there"){
//         const closeentPop = new Logout2("close-enter")
//         closeentPop.open()
//         console.log('hello')
//     }
//     alert('General Kenobi');
//     buttonEnter.setEventListener()
// })
    
// РАБОЧАЯ ВЕРСИЯ НЕ ТРОГАТЬ!
document.getElementById("buttonlog").addEventListener("click", ()=>{
    localStorage.login = login.value;
    localStorage.password = password.value;
    if(login.value ==="hello" && password.value ==="there"){
        const closeentPop = new Logout2("close-enter")
            closeentPop.open()
            enterpopup.close()
            setTimeout(() => {
                closeentPop.close()
                    },5000);
            closeentPop.setEventListener() 
    }
    else if(login.value !=="hello" || password.value !=="there"){
                    alert('Неверный Логин/Пароль, используйте подсказку')
                    localStorage.clear()
                }
})
// РАБОЧАЯ ВЕРСИЯ НЕ ТРОГАТЬ!






// enteruserform.addEventListener("submit", ()=> {
//     localStorage.login = login.value;
//     localStorage.password = password.value;
//         if(login.value ==="hello" && password.value ==="there"){
//             // window.location.replace("page.html")
//             // alert('General Kenobi');
//             const closeentPop = new Logout2("close-enter")
//             closeentPop.open()
            
            
//             setTimeout(() => {
//                 closeentPop.close()
//                     },5000);
//             closeentPop.setEventListener()
//             document.cookie = 'login = hello'
//             document.cookie = 'password = there'
//         }else if(login.value !=="hello" || password.value !=="there"){
//             alert('Неверный Логин/Пароль, используйте подсказку')
//             localStorage.clear()
//         }
//     })
    // enterpopup.close()
// })
// const btntype = loginForm.querySelector("button")
// const closeEnter = document.querySelector("#log-in");
// const closeLogin = document.querySelector(".close-enter")

// if (localStorage.length != 0) {
//     login.value = localStorage.login 
//     password.value = localStorage.password
// }


//     enterpopup.setEventListener();
//     loginForm.addEventListener("log-in", ()=> {
// // localStorage.login = login.value;
// // localStorage.password = password.value;
//     if(login.value ==="hello" && password.value ==="there"){
//     alert('General Kenobi');
//     // const closeEnterPop = new Logout("close-enter");
//     //     closeEnterPop.open()
//     //     enterpopup.close()
//         // window.open("page.html")
//     // setTimeout(() => {
//     //     closeEnterPop.close()
//     // },2000);

//     // closeEnterPop.setEventListener()
//     document.cookie = 'login = hello'
//     document.cookie = 'password = there'
// }else if(login.value !=="hello" || password.value !=="there"){
//     alert('Неверный Логин/Пароль, используйте подсказку')
//     localStorage.clear()
// }
// })

    

