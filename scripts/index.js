// 1.подключили тег карточек
// import { Card } from "./card.js";
// import { Popup } from "./popup.js";
// import { PopupImage } from "./popup-image.js";
// // import { CatsInfo } from "./cats-info.js";
// import { api } from "./api.js";
// // import { DeleteCardPopup } from "./deleteButton.js";
// import { PopupEditCat } from "./popup-edit-cat.js";
// import { serializeForm, setDataRefrash } from "./utilis.js";
// import { EnterPopup } from "./enterpopup.js";

const cardsContainer = document.querySelector(".cards");
const buttonPopOpen = document.querySelector("#add");
// формаддкат - подклчюили попап форму
const formAddCat = document.querySelector("#popup-form-cat");
const popupAddCat = new Popup("popup-add-cats");
// попап авторизации
const btnEnter = document.querySelector("#enter")
const enterpopup = new EnterPopup("open-enter")



// const catsInfoInstance = new CatsInfo('#cats-info-template', handleDeleteCat);
// const catsInfoElement = catsInfoInstance.getElement()
//popup info-cats
// const popupCatInfo = new Popup("popup-cat-info");
// popupCatInfo.setEventListener();

// popup-edited cat
// const popEdit = document.querySelector("#edit").content.querySelector("#edit")
// const popupEditCat = new PopupEditCat('cats-info-template')
// popEdit.setEventListener();
// popEdit.addEventListener("click", ()=>popupEditCat.open())


// const popupImage = new PopupImage("popup-image");
// popupImage.setEventListener();

popupAddCat.setEventListener();
enterpopup.setEventListener();
buttonPopOpen.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);
btnEnter.addEventListener("click", () => enterpopup.open());

function createCat(data) {
    const cardInstance = new Card(
        data,
        "#card-template", 
        // handleCatTitle,
        handleCatImage
        );
        const newCardElement = cardInstance.getElement();
        cardsContainer.append(newCardElement);
}

// функция, которая будет вставлять данные из формы в темплейт,кот.создали
// с данными из этой формы . Данные будут иметь те же
// ключи, что и в массиве кэтс.дж// создали переменную cardInstance, которая 
    // в себя вклчюает данные с конструктора 
function handleFormAddCat(e) {
        e.preventDefault();
        const elementsFormCat = [...formAddCat.elements];
        const dataFromForm = serializeForm(elementsFormCat);
        api.addNewCat(dataFromForm).then(() => {
            // console.log('dataFromForm', dataFromForm);
            createCat(dataFromForm);
            updateLocalStorage(dataFromForm, {type: 'ADD_CAT'});
        })
    popupAddCat.close();
}
function handleCatImage(data){
    popupImage.open(data)
    console.log( "----->>>>> <<<<popupImage")
}
// function handleCatTitle(){
//     console.log('click')
//     popupCatInfo.open()
// }

// function handleDeleteCat(cardInstance) {
//     api.deleteCatById(cardInstance.getId()).then(() => {
//         cardInstance.deleteView();
//         updateLocalStorage(cardInstance.getId(), {type: 'DELETE_CAT'});
//         popupCatInfo.close();
//     })
// }

// function handleCatTitle(cardInstance) {
//     catsInfoInstance.setData(cardInstance);
//     popupCatInfo.setContent(catsInfoElement);
//     popupCatInfo.open();
//     console.log(cardInstance, "cardinstance")
// }

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem('cats'));
    // console.log({ localData });
    const getTimeExpires = localStorage.getItem('catsRefresh');
    if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
        localData.forEach((data) => {
            createCat(data);
        })
    } else {
        api.getAllCats().then((data) => {
            data.forEach((cat) => {
                createCat(cat);
            });
            updateLocalStorage(data, {type: 'ALL_CATS'});
        });
    }
}

function updateLocalStorage(data, action) { // {type: 'ADD_CATS} - функция обновления локал стоража
    const oldStorage = JSON.parse(localStorage.getItem('cats'));
    switch (action.type) {
        case 'ADD_CAT':
            oldStorage.push(data);
            localStorage.setItem('cats', JSON.stringify(data));
            return;
        case 'ALL_CATS':
            localStorage.setItem('cats', JSON.stringify(data));
            setDataRefrash(5, 'catsRefrash');
            return;
        case 'DELETE_CAT':
            console.log('DELETE_CAT', data);
            const newStorage = oldStorage.filter(cat => cat.id !== data);
            localStorage.setItem('cats', JSON.stringify(newStorage));
            return;
        case 'EDIT_CAT':
            const updateStorage = oldStorage.map(cat => cat.id === data.id ? data : cat);
            localStorage.setItem('cats', JSON.stringify(updateStorage));
            return;
        default:
            break;
    }
}
checkLocalStorage();

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





// создание карточки в отдельном js файле

// api.getAllCats().then((data) => {
//                 data.forEach((cat) => {
//                     createCat(cat);
//                 });
//                 enterpopup.close()
// })


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







