var typed = new Typed("#Meta", {
  strings: ["Criando soluções web que unem inovação, design e performance."], // texto
  typeSpeed: 20, // velocidade digitando
  backSpeed: 20, // velocidade apagando
  loop: true, // fica repetindo
});

//efeito aparecer e desaparecer e trocar desen.web por enge.sof
let titulo = document.getElementById("MinhaProf");
setInterval(() => {
  // Faz desaparecer
  titulo.style.opacity = 0;

  // Depois de meio segundo, troca o texto e reaparece
  setTimeout(() => {
    titulo.textContent =
      titulo.textContent === "Desenvolvedor Web"
        ? "Analista de Sistemas" //Se sim → troca para "Engenheiro de Software".
        : "Desenvolvedor Web"; //Se não → troca para "Desenvolvedor Web".
    titulo.style.opacity = 1;
  }, 500); // tempo igual ao transition do CSS
}, 3000);

//funcao para menu hamburguer
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "imagens/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "imagens/close_white_36dp.svg";
  }
}

let somar = (x, y) => x + y;
let letrasNoNome = (nome) => {
  let numero = nome.length;
  return numero;
};

//fazendo o botao mudar tema funcionar
let btn = document.querySelector("#mudar-tema"); //pega o botao
let mudarimg = document.querySelector("#mudar-tema img"); //pega a img do botao
let body = document.querySelector("body"); //pega o body
let SobreMim = document.querySelector(".SobreMim"); //pega a seção SobreMim
let header = document.querySelector("header"); //pega o header

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode"); //adiciona ou remove a classe dark-mode do body
  SobreMim.classList.toggle("dark-mode"); //adiciona ou remove a classe dark-mode da seção SobreMim
  header.classList.toggle("dark-mode"); //adiciona ou remove a classe dark-mode do header
  imgbtn();
  trocarImagemGitHub();
  trocarImagemGmail();
  trocarImagemInstagram();
  trocarImagemLinkedin();
});

let github = document.getElementById("github");
let imgGmail = document.getElementById("imgGmail");
let imgInstagram = document.getElementById("imginstagram");
let imgLinkedin = document.getElementById("imgLinkedin");
function imgbtn() {
  let imgMoonBlack = "./imagens/moon50black.png";
  let imgMoonWhite = "./imagens/moon50white.png";
  mudarimg.src = mudarimg.src.includes("moon50black.png")
    ? imgMoonWhite
    : imgMoonBlack; //troca a img do botao
}
function trocarImagemLinkedin() {
  let linkedinBlack = "./imagens/linkedinblack50.png";
  let linkedinWhite = "./imagens/linkedinwhite50.png";
  imgLinkedin.src = imgLinkedin.src.includes("linkedinblack50.png")
    ? linkedinWhite
    : linkedinBlack;
}
function trocarImagemInstagram() {
  let instagramBlack = "./imagens/instagramblack50.png";
  let instagramWhite = "./imagens/instagramwhite50.png";
  imgInstagram.src = imgInstagram.src.includes("instagramblack50.png")
    ? instagramWhite
    : instagramBlack; //troca a img do instagram
}
function trocarImagemGmail() {
  const gmailBlack = "./imagens/gmailblack50.png";
  const gmailWhite = "./imagens/gmailwhite50.png";
  imgGmail.src = imgGmail.src.includes("gmailblack50.png")
    ? gmailWhite
    : gmailBlack; //troca a img do gmail
}
function trocarImagemGitHub() {
  const normal = "./imagens/githubclack50.png";
  const dark = "./imagens/githubwhite50.png";
  github.src = github.src.includes("githubclack50.png") ? dark : normal; //troca a img do github
}

function mudarFotoPrincipal() {}
