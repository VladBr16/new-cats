// попап удаления
class DeleteCardPopup {
    constructor(className3) {
        this.className3 = className3;
        this.deleteCard = document.querySelector(`.${className3}`);
        this._handleEscapeUp = this._handleEscapeUp.bind(this);
        // console.log(this.deleteCard, 'deletfecard')
        // console.log(className3, "className3")
    }
    _handleEscapeUp(event) {
        if (event.key === "Escape") {
            this.close()
            console.log('key', this._handleEscapeUp)
        }
    }
    open(){
        this.deleteCard.classList.add('_active');
        console.log(document.addEventListener('click', this._handleEscapeUp))
    }
    close(){
        this.deleteCard.classList.remove('_active');
        document.removeEventListener('click', this._handleEscapeUp)

    }
    setEventListener() {
        this.deleteCard.addEventListener("click", (event) => {
            if (event.target.classList.contains(this.className3) || 
            event.target.closest('.delete_close')) {
                this.close();
                console.log('click')
            }
        })
    }
}
