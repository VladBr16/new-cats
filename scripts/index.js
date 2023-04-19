// 1.подключили тег карточек

const cardsContainer = document.querySelector(".cards");
const buttonPopOpen = document.querySelector("#add");
// формаддкат - подклчюили попап форму
const formAddCat = document.querySelector("#popup-form-cat");
const popupAddCat = new Popup("popup-add-cats");
// попап авторизации
const btnEnter = document.querySelector("#enter")
const enterpopup = new EnterPopup("open-enter")
// попап успешной авторизации
// const closeEnter = document.querySelector("#log-in");
// const closeEnterPop = new ClosePopup("close-enter");

// closeEnter.addEventListener("click", () => closeEnterPop.open())

// //удаление
// const deleteButton = document.querySelector("#card_delete");
// const closeDeleteButton = document.querySelector(".delete_close ")

// document.body.appendChild(deleteButton.content);
// const deleteCardPopup = new DeleteCardPopup("delete-card")

// const formEditCat = document.querySelector('#popup-form-edit');
// const popupEditCat = new Popup('popup-edit-cats');
// popupEditCat.setEventListener();

popupAddCat.setEventListener();
enterpopup.setEventListener();


// функция, которая будет вставлять данные из формы в темплейт,кот.создали
// с данными из этой формы . Данные будут иметь те же
// ключи, что и в массиве кэтс.дж
function handleFormAddCat(e) {
    e.preventDefault();
    const elementsFormCat = [...formAddCat.elements];
    const dataFromForm = serializeForm(elementsFormCat);
    if(api.addNewCat(dataFromForm)){
        createCat(dataFromForm);
        popupAddCat.close()
    };
}

// создание карточки в отдельном js файле
function createCat(data) {
    // создали переменную cardInstance, которая 
    // в себя вклчюает данные с конструктора 
    const cardInstance = new Card(data, "#card-template");
    // из конструктора берем клонированные ноды из элемента
    const newCardElement = cardInstance.getElement();
    // в тег с карточками перекидываем полученные ноды
    cardsContainer.append(newCardElement);
}
// api.getAllCats().then((data) => {
//                 data.forEach((cat) => {
//                     createCat(cat);
//                 });
//                 enterpopup.close()
// })


buttonPopOpen.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);
btnEnter.addEventListener("click", () => enterpopup.open());

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem('cats'));
    // console.log({ localData });

    const getTimeExpires = localStorage.getItem('catsRefresh');

    if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
        localData.forEach((data) => createCat(data));
    } else {
        api.getAllCats().then((data) => {
            localStorage.setItem('cats', JSON.stringify(data));
            data.forEach((cat) => {
                createCat(cat);
            });
        });
        // updateLocalStorage(cats, {type: 'ALL_CATS'});
        const setTime = new Date(new Date().getTime() + 1000);
        localStorage.setItem('catsRefresh', setTime);
    }
}

checkLocalStorage();

// попап удаление рабочее
// deleteButton.addEventListener("click",function() {
//     const deleteCardPopup = new DeleteCardPopup("delete-card");
//     deleteCardPopup.open();
//     deleteCardPopup.setEventListener();
//     console.log('click')
// })




//sb-heroky-app - версия
// const getAllCats = function(api) {
//     api.getAllCats().then((data)=> {
//         console.log(data);
//         if(data.message === "ok"){
//         const parseddata = JSON.parse(JSON.stringify(data.data));
//         {
//             parseddata.forEach((cat) => {
//                 createCat(cat)
//             });
//         }
//         }
//     })
// }
// getAllCats(api)

//petite-web - версия


// function onClickToEdit(card, id) {
//     console.log({ card, id });
//     popupEditCat.setContent(card, id);
//     popupEditCat.open();
//   }







