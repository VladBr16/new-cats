// попап авторизации
// export 
class EnterPopup {
  constructor(className2) {
    this.className2 = className2;
    this.enter = document.querySelector(`.${className2}`);
    this._handleEscapeUp = this._handleEscapeUp.bind(this);
    this.closeBtn = document.getElementById("btnId")
    // console.log(this.enter)
  }

  _handleEscapeUp(event) {
    if(event.key === "Escape"){
        this.close()
        console.log('key', this._handleEscapeUp)
    }
}
  open() {
    this.enter.classList.add('enter_active');
    document.addEventListener('keyup', this._handleEscapeUp)
}
close() {
  this.enter.classList.remove('enter_active');
  document.removeEventListener("keyup", this._handleEscapeUp)
  
}
setEventListener() {
  this.enter.addEventListener("click", (event) =>{
      if( event.target.classList.contains(this.className2)||
      event.target.closest('.enter-popup-close')) {
          this.close();
      }
      
  })
}
}

