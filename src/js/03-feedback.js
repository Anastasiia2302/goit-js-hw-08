import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const formData ={};


const formFeedback = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");

formFeedback.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

getLocalStorageText();

formFeedback.addEventListener('input', event => {
formData[event.target.name] = event.target.value;
console.log(formData)});

function onFormSubmit (event){
event.preventDefault();
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY)
}

function onTextareaInput (event) {
const message = event.target.value
localStorage.setItem(STORAGE_KEY, message);
}


function  getLocalStorageText(){
    const saveText = localStorage.getItem(STORAGE_KEY)
    if (saveText) {
        textarea.value = saveText;
    }
}