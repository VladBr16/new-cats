class DefaultCard{
    constructor( dataCard, selectorTemplate)
    {
        this._dataCard = dataCard;
        this._selectorTemplate = selectorTemplate;
    }

    _getTemplate(){
        const elementCard = document.querySelector(this._selectorTemplate)
        .content.querySelector(".card")
        console.log( {elementCard})
        return elementCard;
    }

    getElement(){
        
        this.element = this._getTemplate().cloneNode(true);
        const cardTitle = this.element.querySelector(".card__name");
        const cardImage = this.element.querySelector(".card__image");
        // const cardLike = this.element.querySelector(".card__like");
        cardTitle.textContent = this._dataCard.name
        cardImage.src =this._dataCard.img_link

        // console.log({ cardTitle})
        return this.element
    }
}
