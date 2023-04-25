// export class CatsInfo {
//     constructor(
//         selectorTemplate,
//         // handleEditCatInfo,
//         // handleLikeCat,
//         handleDeletecat)
        
//         {
//         this._selectorTemplate = selectorTemplate;
//         // this._handleEditCatInfo = handleEditCatInfo;
//         // this._handleLikeCat = handleLikeCat;
//         this._handleDeletecat = handleDeletecat;
//         this._data = {};   
//         }


//         _getTemplate() {//возвращает содержимое шаблона в виде дом узла
//             return document.querySelector(this._selectorTemplate)
//             .content.querySelector(".card");
//         }

//     // _getTemplate() {
//     //     return document.querySelector(this._selectorTemplate)
//     //     .content.children[0];
//     // }

//     getElement() {
//         this.element = this._getTemplate().cloneNode(true);

//         // this.buttonEdited = this.element.querySelector('.cat-info__edited');
//         // this.buttonDeleted = this.element.querySelector('.cat-info__deleted');
//         // this.catImage = this.element.querySelector('.cat-info__image'); 
//         // console.log(this.catImage);

//         // this.setEventListener();
//         return this.element;
//     }

//     setData(cardInstance) {
//         this._cardInstance = cardInstance;
//         this._data = this._cardInstance;

//         this.catImage.src = this._data.image;
        
//     }

//     setEventListener() {
//         this.buttonDeleted.addEventListener('click', 
//         () => this._handleDeleteCat(this._cardInstance))
//     }
// }