const Api = function () {
    this.url = 'https://api.github.com/repos/';
}

Api.prototype.get = function (user, repo) {
    const url = this.url + user + '/' + repo;
    return fetch(url, {
        method: 'GET'
    }).then(response => response.json());
}

Api.prototype.getStars = function (user, repo) {
    try {
        return this.get(user, repo).then((response) => console.log(response['stargazers_count']));
    } catch (error) {
        console.log(0)
    }

const api = new Api();

const allegroApi = api.getStars('allegro', 'allegro-api').then((resp) => {
    console.log(resp)
});
console.log(starCount);

const sklep = api.getStars('jmczerwinska', 'sklep').then((resp) => {
    console.log(resp)
});
console.log(sklep);