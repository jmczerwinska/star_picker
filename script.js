 const Api = function () {
     this.url = 'https://api.github.com/repos/';
 }

 Api.prototype.handleResponse = function (response) {
     if (response.status === 404) {
         throw Error;
     } else {
         return response.json()
     };
 }

 Api.prototype.get = function (user, repo) {
     const url = this.url + user + '/' + repo;
     return fetch(url).then(this.handleResponse);
 }

 Api.prototype.getStars = function (user, repo) {
     return this.get(user, repo)
         .then(response => {
             count.innerHTML = response['stargazers_count'];
             showAnswer();
         }).catch(error => {
             console.log(error);
             alert('Nieprawidłowa nazwa użytkownika lub repozytorium');
         })
 }

 const api = new Api();

let user = document.querySelector('#user');
let repo = document.querySelector('#repo');
let answer = document.querySelector('#answer');
let count = document.querySelector('#count');
const button = document.querySelector('#get-stars');

function checkInput(){
    button.disabled = !(user.value !== '' && repo.value !== '');
};

const showAnswer = function(){
    this.userName = document.querySelector('#user-name');
    this.repoName = document.querySelector('#repo-name');
    this.userName.innerHTML = user.value;
    this.repoName.innerHTML = repo.value;
    answer.style.display = 'block';
}

user.addEventListener('input', checkInput);
repo.addEventListener('input', checkInput);
button.addEventListener('click', function(){
   api.getStars(user.value, repo.value);
});