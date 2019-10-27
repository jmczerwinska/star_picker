const Api = function () {
    this.url = 'https://api.github.com/repos/';
}

Api.prototype.handleResponse = function (response) {
    if (response.status === 404) {
       alert('Nieprawidłowa nazwa użytkownika lub repozytorium');
    }
    return response.json();
}

Api.prototype.getStars = function (user, repo) {
    const url = this.url + user + '/' + repo;
    return fetch(url)
        .then(this.handleResponse)
        .then(response => {
                let stars = response['stargazers_count'];
                count.innerHTML = stars;                
            }
        )
}
