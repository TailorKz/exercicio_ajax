$(document).ready(function(){
    const imagem = $('.profile-avatar')
    const nome = $('.profile-name')
    const user = $('.profile-username')
    const repositorios = $('.numbers__item--repositorios')
    const seguidores = $('.numbers__item--seguidores')
    const seguindo = $('.numbers__item--seguindo')
    const link = $('.profile-link')
    const apiGitHub = `https://api.github.com/users/TailorKz`
    fetch(apiGitHub).then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        const name = json.name;
        const login = json.login;
        const followers = json.followers;
        const following = json.following;
        const public_repos = json.public_repos;
        const avatar_url = json.avatar_url;
        imagem.attr('src', avatar_url);
        nome.text(name);
        user.text(`@${login}`);
        repositorios.append(` ${public_repos}`);
        seguidores.append(followers);
        seguindo.append(following);
        link.attr('href', `https://github.com/${login}`);
    });
});