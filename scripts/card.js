import { DeleteCardPopup } from "./deleteButton.js";
import { api } from "./api.js";

export class Card {
    constructor(data, 
        selectorTemplate, 
        handleCatTitle,
        handleCatImage,
        handleLikeCat
        ) {
        this._data = data;
        this._handleCatTitle = handleCatTitle;
        this._selectorTemplate = selectorTemplate;
        this._handleCatImage = handleCatImage;
        this._handleLikeCard = handleLikeCat;
        }
    _getTemplate() {
        const elem = document.querySelector(this._selectorTemplate).content.querySelector(".card");
        
        return elem;
    }

    _updateViewLike(){
        if(this._data.favorite) {
            this.cardLike.classList.add("card__like_active")
        } else {
            this.cardLike.classList.remove("card__like_active")
        }
        
    }
    _setLikeCat = () => {
        this._data.favorite = !this._data.favorite;
        this.updateView();

        this._handleLikeCard(this._data)
    }

    getElement(){
        this.element = this._getTemplate().cloneNode(true);
        this.cardTitle = this.element.querySelector(".card__name");
        this.cardImage = this.element.querySelector(".card__image");
        this.cardLike = this.element.querySelector(".card__like");
        // this.cardDelete= this.element.querySelector(".card__delete");

        const cardDelete= this.element.querySelector(".card__delete");
        //  || this._data.img_link || this._data.card__image
        cardDelete.setAttribute('id',`btn-${this._data.id}`);
        cardDelete.addEventListener("click",(e) =>{
        const deleteCardPopup = new DeleteCardPopup("delete-card");
        deleteCardPopup.open();
        {
            api.deleteCatById(this._data.id).then(() => {
            e.preventDefault();
            const elem = document.getElementById(`btn-${this._data.id}`);
            console.log({ elem });
            elem.parentElement.remove();
            })
        };
        deleteCardPopup.setEventListener();
        console.log('click')
        })

            this.updateView()

            this.setEventListener();
            return this.element;
        }
        
        getData () {
            return this._data;
        }
        getId() {
            return this._data.id;
        }
        setData(newData) {
            this._data = newData;
        }

        updateView() {
            this.cardTitle.textContent = this._data.name;
            this.cardImage.src = this._data.image;

            this._updateViewLike()
        }

        deleteView() {
            this.element.remove();
            this.element = null;
        }
        setEventListener(){
            this.cardTitle.addEventListener('click',()=> this._handleCatTitle(this));
            this.cardImage.addEventListener('click',()=> this._handleCatImage(this._data));
            this.cardLike.addEventListener( "click", this._setLikeCat)
            
        }
}


// console.log(this.cardImage.addEventListener('click',() => this._handleCatImage))
// const cardLink = this.element.querySelector(".card__link")

// 

// function deleteCatCard(){
//     const deleteButton = document.querySelector("#card-delete");
//     // const openDeletePopup = document.querySelector("delete-card");
//     const deleteCardPopup = new DeleteCardPopup("delete-card")
//     deleteButton.addEventListener("click", ()=>deleteCardPopup)
// }
// console.log(deleteCatCard())









