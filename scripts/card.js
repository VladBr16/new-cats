// export 
class Card {
    constructor(data, 
        selectorTemplate, 
        // handleCatTitle,
        handleCatImage) {
        this._data = data;
        this._selectorTemplate = selectorTemplate;
        // this._handleCatTitle = handleCatTitle;
        this._handleCatImage = handleCatImage;
        // this._onClickToEdit = onClickToEdit;
        }
    _getTemplate() {//возвращает содержимое шаблона в виде дом узла
        const elem = document.querySelector(this._selectorTemplate).content.querySelector(".card");
        //узел - док.фрагмент - свойство контент
        // документ фрагмент - легковесная версия нода элемент.
        return elem;
    }
    getElement(){
        this.element = this._getTemplate().cloneNode(true);
        this.cardTitle = this.element.querySelector(".card__name");
        this.cardImage = this.element.querySelector(".card__image");
        this.cardLike = this.element.querySelector(".card__like");
        
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

         // popup-edited cat
            //показать данные из апи, при нажатии изменить - изменить данные POST, добавить кнопку закрыть 
        const popEdit = this.element.querySelector(".cat-info__edited")
    
        console.log(popEdit, "click")
        popEdit.setAttribute('id',`btn-${this._data.id}`);
        popEdit.addEventListener("click", (e)=>{
            const popupEditCat = new PopupEditCat('cats-info-template')
            popupEditCat.open()
            {
                // api.updateCatById(this._data.id).then(() => {
                //     e.preventDefault();
                //     const elem2 = document.getElementById(`btn-${this._data.id}`);
                //     console.log({ elem2 });
                //     elem.parentElement.put();
                //     })
            }
            popupEditCat.setEventListener();
            console.log("click")
        })


            if (!this._data.favorite) {
                this.cardLike.classList.toggle("card__like_active");
            }
        
            this.cardTitle.textContent = this._data.name;
            this.cardImage.src = this._data.image;
            console.log(this.cardImage)

            this.setEventListener();
            return this.element;;
        }
        
        
// убрал экспорты, вставил в карточку форму удаления изменив ее на форму редактирования. 


        // getData () {
        //     return this._data;
        // }
        // getId() {
        //     return this._data.id;
        // }
        setElement(newData) {
            this._data = newData;
        }
        
        setEventListener(){
            this.cardImage.addEventListener('click',() => this._handleCatImage(this._data));
            // форма с пустой картинкой срабатывает если cardTitle включен, catImage не реагирует
            // this.cardTitle.addEventListener('click',this._handleCatTitle());
            // 
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









