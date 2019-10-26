function StarPicker (){
    this.apiContainer = document.querySelector('#main-container');
}

let user = document.querySelector('#user');
let repo = document.querySelector('#repo');
const button = document.querySelector('#get-stars');

function checkInput(){
    button.disabled = !(user.value !== '' && repo.value !== '');
};

xUser.addEventListener('input', checkNames);
oUser.addEventListener('input', checkNames);
button.addEventListener('click', function () {
    game.init();
});