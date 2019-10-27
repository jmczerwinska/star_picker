const api = new Api();

let user = document.querySelector('#user');
let repo = document.querySelector('#repo');
let count = document.querySelector('#count');
const button = document.querySelector('#get-stars');

function checkInput(){
    button.disabled = !(user.value !== '' && repo.value !== '');
};

const showAnswer = function (){
    this.answer = document.querySelector('#answer');
    this.userName = document.querySelector('#user-name');
    this.repoName = document.querySelector('#repo-name');
    this.userName.innerHTML = user.value;
    this.repoName.innerHTML = repo.value;
    this.answer.style.display = 'block';
}

user.addEventListener('input', checkInput);
repo.addEventListener('input', checkInput);
button.addEventListener('click', function () {
   api.getStars(user.value, repo.value); 
   showAnswer(); 
});