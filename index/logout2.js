// попап успешной авторизации
// export
class Logout2{
    constructor(className6) {
        this.className6 = className6;
        this.logOut2 = document.querySelector(`.${className6}`);
        this._handleEscapeUp = this._handleEscapeUp.bind(this);
    }
    _handleEscapeUp(event) {
        if (event.key === "Escape") {
            this.close()
            console.log('key', this._handleEscapeUp)
        }
    }
    open(){
        this.logOut2.classList.add('close-enter_active');
        console.log(document.addEventListener('click', this._handleEscapeUp))
    }
    close(){
        this.logOut2.classList.remove('close-enter_active');
        document.removeEventListener('click', this._handleEscapeUp)

    }
    setEventListener() {
        this.logOut2.addEventListener("click", (event) => {
            if (event.target.classList.contains(this.className6) || 
            event.target.closest('.logout_close')) {
                this.close();
                console.log('click')
            }
        })
    }
}