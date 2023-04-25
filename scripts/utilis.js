//функция, которая будет доставать value из разметки формы,
// которую ввел пользвоатель
// export 
function serializeForm(elements){
    const formData = {};
    
    elements.forEach((input) =>{
        console.log(input.name);
        // console.log(input.type);
        if(input.type === "submit") return;
        if (input.type ==="url") {
                formData[input.name] = input.image;
        } 
        if(input.type !== "checkbox"){
            formData[input.name] = input.value;
            }
        if (input.type ==="checkbox") {
                formData[input.name] = input.checked;
            }
    })
    console.log({formData});
    return formData;
}

// export
function setDataRefrash(minutes, key) { 
    const setTime = new Date(new Date().getTime() + minutes * 60000)
    localStorage.setItem(key, setTime);
}
