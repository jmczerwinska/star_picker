const Api = function () {
    this.url = 'https://api.github.com/repos/';
}

Api.prototype.getStars = function (user, repo) {
    const url = this.url + user + '/' + repo;
    return fetch(url, {method: 'GET'}).then(response => response.json()).then((response) => console.log(response['stargazers_count']));
}

const api = new Api();

const allegroApi = api.getStars('allegro', 'allegro-api').then((resp) => {console.log(resp)});
console.log(starCount);

const sklep = api.getStars('jmczerwinska', 'sklep').then((resp) => {console.log(resp)});
console.log(sklep);