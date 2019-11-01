 const Api = function () {
     this.url = 'https://api.github.com/repos/';
 }

 Api.prototype.handleResponse = function (response) {
     if (response.status === 404) {
         throw Error;
     }
     return response.json();
 }

 Api.prototype.get = function (user, repo) {
     const url = this.url + user + '/' + repo;
     return fetch(url).then(this.handleResponse);
 }

 Api.prototype.getStars = function (user, repo, callback) {
     return this.get(user, repo)
         .then(response => response['stargazers_count'])
         .then(response => callback(response))
         .catch(error => {
             console.log(error);
             alert('Nieprawidłowa nazwa użytkownika lub repozytorium');
         })
 }

 const api = new Api();

 const user = document.querySelector('#user');
 const repo = document.querySelector('#repo');

 const button = document.querySelector('#get-stars');

 function checkInput() {
     button.disabled = !(user.value !== '' && repo.value !== '');
 };

 const showAnswer = function (str) {
     this.userName = document.querySelector('#user-name');
     this.repoName = document.querySelector('#repo-name');
     this.answer = document.querySelector('#answer');
     this.count = document.querySelector('#count');
     this.userName.innerHTML = user.value;
     this.repoName.innerHTML = repo.value;
     this.count.innerHTML = str;
     this.answer.style.display = 'block';
 }

 user.addEventListener('input', checkInput);
 repo.addEventListener('input', checkInput);
 button.addEventListener('click', function () {
     api.getStars(user.value, repo.value, showAnswer);
 });