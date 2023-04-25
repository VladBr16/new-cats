// export
class PopupEditCat{
    constructor(className5) {
        this.className5 = className5;
        this.editPopCard = document.querySelector(`.${className5}`);
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
        this.editPopCard.classList.add('_active');
        console.log(document.addEventListener('click', this._handleEscapeUp))
    }
    close(){
        this.editPopCard.classList.remove('_active');
        document.removeEventListener('click', this._handleEscapeUp)

    }
    setEventListener() {
        this.editPopCard.addEventListener("click", (event) => {
            if (event.target.classList.contains(this.className5) || 
            event.target.closest('._close')) {
                this.close();
                console.log('click')
            }
        })
    }
}
