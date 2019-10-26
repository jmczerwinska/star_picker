const Api = function () {
    this.url = 'https://api.github.com/repos/';
}

function handleErrors(response) {
    if (response.status === 404) {
        throw Error(response.statusText);
    }
    return response;
}


Api.prototype.get = function (user, repo) {
    const url = this.url + user + '/' + repo;
    return fetch(url).then(response => response.json());
}

Api.prototype.getStars = function (user, repo) {
    return this.get(user, repo).then(handleErrors).then(response => console.log(response['stargazers_count'])).catch(alert('Nieprawidłowa nazwa użytkownika lub repozytorium'));
}

const api = new Api();


console.log(api.getStars('allegro', 'allegro-api'));
console.log(api.getStars('jmczerwinska', 'Sklepik'));
console.log(api.getStars('djkjl', 'djkjlk'));
