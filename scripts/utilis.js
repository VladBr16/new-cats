//функция, которая будет доставать value из разметки формы,
// которую ввел пользвоатель
const serializeForm = (elements) =>{
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
        if(input.type === "login"){
            formData[input.name] = input.value;
        }
        if(input.type === "password"){
            formData[input.name] = input.value;
        }

            
            //подробный вариант
            // if(input.name ==='age'){
            //     formData.age = input.value;
            // }
            // if(input.name ==='name'){
            //     formData.name = input.value;
            // }
            //
            // if(input.name ==='description'){
            //     formData.description = input.value;
            // }
    })
    console.log({formData});
    return formData;
}

