import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state';
const localData ={
    email: "",
    message: "",
};


const formFeedback = document.querySelector(".feedback-form");
const inputEmail = formFeedback.querySelector('.feedback-form input');
const textarea = document.querySelector(".feedback-form textarea");


getLocalStorageText();

formFeedback.addEventListener('input', event => {
localData[event.target.name] = event.target.value;
console.log(JSON.stringify(localData))});


formFeedback.addEventListener('submit', onFormSubmit);
function onFormSubmit (event){
event.preventDefault();
event.target.reset();
localStorage.removeItem(STORAGE_KEY)
}

textarea.addEventListener('input', throttle(onTextareaInput, 500));
function onTextareaInput (event) {
const message = event.target.value
localStorage.setItem(STORAGE_KEY, message);

}
inputEmail.addEventListener('input', throttle(onInputEmail, 500)) 
    function onInputEmail (event) {
    const email = event.target.value
localStorage.setItem(STORAGE_KEY, email);
}



function  getLocalStorageText(){
    const saveText = localStorage.getItem(STORAGE_KEY)
    if (textarea === '' && inputEmail === "") {
        return saveText.JSON.parse(email, message);
    }
}