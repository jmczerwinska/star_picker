/*
function StarPicker (){
    this.apiContainer = document.querySelector('#main-container');
}
*/
const api = new Api();
let user = document.querySelector('#user');
let repo = document.querySelector('#repo');
const button = document.querySelector('#get-stars');

function checkInput(){
    button.disabled = !(user.value !== '' && repo.value !== '');
};

user.addEventListener('input', checkInput);
repo.addEventListener('input', checkInput);
button.addEventListener('click', function () {
    api.getStars(user.value, repo.value);
});