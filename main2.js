function tocasomclap(){
    document.querySelector('#som_tecla_clap').play()
}
function tocasomtim (){
    document.querySelector('#som_tecla_tim').play()
}
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocasomclap
ducument.querySelector('.tecla_tim').onclick = tocasomtim