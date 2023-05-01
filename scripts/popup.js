export class Popup {
    constructor(className) {
        this.className = className;
        this.popup = document.querySelector(`.${className}`)// вместо - `.${className}` 
        this._handleEscapeUp = this._handleEscapeUp.bind(this);
    }
        // закрытие с помощью эскейп
    _handleEscapeUp(event) {
        if(event.key === "Escape"){
            this.close()
        }
    }
        open() {
            this.popup.classList.add('popup_active');
            document.addEventListener('keyup', this._handleEscapeUp)
    }

        close() {
            this.popup.classList.remove('popup_active');
            document.removeEventListener("keyup", this._handleEscapeUp)
    }

        setContent(contentNode) {
        const containerContent = this.popup.querySelector('.popup__content');
        containerContent.innerHTML = '';
        containerContent.append(contentNode);
        }
// закрывает при нажатии вне поля попап (слушает событие "клик")
    setEventListener() {
        this.popup.addEventListener("click", (event) =>{
            if(event.target.classList.contains(this.className)
            ||event.target.closest('.popup__close')) {
                this.close();
            }
            
        })
    }
}

