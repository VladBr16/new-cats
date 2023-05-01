// 1.подключили тег карточек
import { Card } from "../scripts/card.js";
import { Popup } from "../scripts/popup.js"
import { PopupImage } from "../scripts/popup-image.js"; 
import { CatInfo } from "../scripts/cats-info.js";
import { api } from "../scripts/api.js";
import { DeleteCardPopup } from "./deleteButton.js";
// import { PopupEditCat } from "./popup-edit-cat.js";
import { serializeForm, setDataRefrash } from "../scripts/utilis.js";
import { EnterPopup } from "../scripts/enterpopup.js";

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

// const popupEditCat = new PopupEditCat('cats-info-template')
// popupEditCat.open()
// popupEditCat.setEventListener()
// const popupCatInfo = new Popup("popup-cat-info");
// popupCatInfo.setEventListener();

// // popup-edited cat
// // const popEdit = document.querySelector("#edit").content.querySelector("#edit")
// // const popupEditCat = new PopupEditCat('cats-info-template')
// popEdit.setEventListener();
// popEdit.addEventListener("click", ()=>popupEditCat.open())


// const popupImage = new PopupImage("popup-image");
// popupImage.setEventListener();

popupAddCat.setEventListener();
enterpopup.setEventListener();
buttonPopOpen.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);
btnEnter.addEventListener("click", () => enterpopup.open());


const popupCatInfo = new Popup("popup-cat-info");
popupCatInfo.setEventListener()

const popupCatImage = new PopupImage("popup-image");
popupCatImage.setEventListener()

const catsInfoInstance = new CatInfo(
    "#cats-info-template",
    handleEditCatInfo,
    handleLikeCat,
    handleDeleteCat 
)

const catsInfoElement = catsInfoInstance.getElement()

function createCat(data) {
    const cardInstance = new Card(
        data,
        "#card-template", 
        handleCatTitle,
        handleCatImage,
        handleLikeCat
        );
        const newCardElement = cardInstance.getElement();
        cardsContainer.append(newCardElement);
        // console.log(newCardElement)
}

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
function handleCatTitle(cardInstance){
    catsInfoInstance.setData(cardInstance)
    popupCatInfo.setContent(catsInfoElement)
    popupCatInfo.open()
}

function handleCatImage(dataCard){
    popupCatImage.open(dataCard)
    console.log( "----->>>>> <<<<popupCatImage")
}

function handleEditCatInfo(cardInstance, data) {
    const {age, description, name, id} = data;

    api.updateCatById(id, {age, description, name})
        .then(() => {
            cardInstance.setData(data);
            cardInstance.updateView();

            updateLocalStorage(data, {type: "EDIT_CAT"})
            popupCatInfo.close()
        })
}

function handleLikeCat(data){
    const {id, favorite} = data;
    api.updateCatById( id, {favorite})
        .then(() => {
            updateLocalStorage( data, {type: "EDIT_CAT"});
            console.log("like has been changed")
        })
}

function handleDeleteCat(cardInstance){
    const deleteCardPopup = new DeleteCardPopup("delete-card");
    deleteCardPopup.open();
    popupCatInfo.close();{
        api.deleteCatById(cardInstance.getId())
        .then(() =>{
            cardInstance.deleteView()
            updateLocalStorage(cardInstance.getId(), {type: 'DELETE_CAT'})
        })
    }
    deleteCardPopup.setEventListener();
}

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem('cats'));
    console.log({ localData });
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
