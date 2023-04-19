
class Card {
    constructor(dataCat, selectorTemplate){
        this._data = dataCat;
        this._selectorTemplate = selectorTemplate;
        // this._onClickToEdit = onClickToEdit;
    }
    _getTemplate() {//возвращает содержимое шаблона в виде дом узла
        const elem = document.querySelector(this._selectorTemplate)
        .content.querySelector(".card");
        //узел - док.фрагмент - свойство контент
        // документ фрагмент - легковесная версия нода элемент.
        return elem;
    }
    getElement(){
        this.element = this._getTemplate().cloneNode(true);
        const cardTitle = this.element.querySelector(".card__name");
        const cardImage = this.element.querySelector(".card__image");
        const cardLike = this.element.querySelector(".card__like");
        const cardDelete= this.element.querySelector(".card__delete");
        cardTitle.textContent = this._data.name;
        cardImage.src = this._data.image || this._data.img_link || this._data.card__image;
        // const cardLink = this.element.querySelector(".card__link")

        cardDelete.setAttribute('id',`btn-${this._data.id}`);
            // Удаление карточки со всплытием попапа "удалено"
        cardDelete.addEventListener("click",(e) =>{
                const deleteCardPopup = new DeleteCardPopup("delete-card");
                deleteCardPopup.open();{
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

            
        // cardDelete.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     if (confirm('Подтверждаете удаление?')) {
            
        //     }
        // });
    

        // cardLike.textContent = this._data.favorite 

        
    if (!this._data.favorite) {
        cardLike.remove();
    }
    // cardLink.addEventListener('click', () => {
    //     this.onClickToEdit(this.element, this._data.id);
    //   });


        return this.element;
    }
}
// function deleteCatCard(){
//     const deleteButton = document.querySelector("#card-delete");
//     // const openDeletePopup = document.querySelector("delete-card");
//     const deleteCardPopup = new DeleteCardPopup("delete-card")
//     deleteButton.addEventListener("click", ()=>deleteCardPopup)
// }
// console.log(deleteCatCard())









