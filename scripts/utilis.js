import { RATE_CAT } from "./rating.js";

//функция, которая будет доставать value из разметки формы,
// которую ввел пользвоатель
export function serializeForm(elements){
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
// export function changePictureInPopup(elements){
//     const picsFormData ={}
//     elements.forEach((input) =>{
//         if(input.type === "submit") return;
//         if (input.type ==="url") {
//                 formData[input.name] = input.image;
//         }
//         return picsFormData
//     })
// }

export function setDataRefresh(minutes, key) { 
    const setTime = new Date(new Date().getTime() + minutes * 60000)
    localStorage.setItem(key, setTime);
}

export const printNumerals = (number, titles) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
        const cases = [2, 0, 1, 1, 1, 2];
        const text =
        titles[
            number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[ number % 10< 5 ? number % 10 : 5]
        ];
        return `${text}` ;
    }
    return `${titles[1]}`
}

export function generateRating(rate) {
    const rateElements = [];
    for(let i =0; i <RATE_CAT; i++){
        if(i < rate && rate % 1 === 0){
            rateElements.push('<i class="fa-solid fa-shield-cat"></i>');
        }else if( i < Math.floor(rate) && rate % 1 !==0){
            rateElements.push('<i class = "fa-solid fa-star"></i>');
        }else if( i === Math.floor(rate) && rate % 1 !==0){
            rateElements.push('<i class = "fa-solid fa-star-half-stroke"></i>');
        }else{
            rateElements.push('<i class = "fa-regular fa-star"></i>');
        }
    }
    return rateElements.join("");
}