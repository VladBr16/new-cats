// попап успешной авторизации
// export
 class Logout{
    constructor(className4) {
        this.className4 = className4;
        this.logOut = document.querySelector(`.${className4}`);
        this._handleEscapeUp = this._handleEscapeUp.bind(this);
    }
    _handleEscapeUp(event) {
        if (event.key === "Escape") {
            this.close()
            console.log('key', this._handleEscapeUp)
        }
    }
    open(){
        this.logOut.classList.add('close-enter_active');
        console.log(document.addEventListener('click', this._handleEscapeUp))
    }
    close(){
        this.logOut.classList.remove('close-enter_active');
        document.removeEventListener('click', this._handleEscapeUp)

    }
    setEventListener() {
        this.logOut.addEventListener("click", (event) => {
            if (event.target.classList.contains(this.className4) || 
            event.target.closest('.logout_close')) {
                this.close();
                console.log('click')
            }
        })
    }
}