
const btnEnter = document.querySelector("#enter")
const enterpopup = new EnterPopup2("open-enter")

const cardsContainer = document.querySelector(".cards");



enterpopup.setEventListener();
btnEnter.addEventListener("click", () => enterpopup.open());


const loginForm2 = document.getElementById("enteruserform")
const login = loginForm2.querySelector("input")
const password = loginForm2.querySelector("input+input")

const buttonEnter = loginForm2.querySelector("button")
const closeLogin = document.querySelector(".close-enter")


cats.forEach((cat) =>{
    const catCardInstance = new DefaultCard(cat,"#card-template");
    const newCardElement = catCardInstance.getElement();
    cardsContainer.append(newCardElement);
})

if (localStorage.length != 0) {
    login.value = localStorage.login 
    password.value = localStorage.password
}

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
                    },150000);
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

    

