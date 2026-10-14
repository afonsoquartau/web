const tituloRato = document.querySelector('#passa-rato');
const textoOriginal = tituloRato.textContent;

const mudarTexto = () => {
    tituloRato.textContent = 'O rato está por cima!';
};

const voltarTexto = () => {
    tituloRato.textContent = textoOriginal;
};

tituloRato.addEventListener('mouseover', mudarTexto);
tituloRato.addEventListener('mouseout', voltarTexto);


const tituloCor = document.querySelector('#titulo-cor');
const botoesCores = document.querySelectorAll('.color');

botoesCores.forEach((botao) => {
    botao.addEventListener('click', () => {
        tituloCor.style.color = botao.dataset.color;
    });
});


const inputCor = document.querySelector('#input-cor');
const textoCor = document.querySelector('#texto-cor');

inputCor.addEventListener('input', () => {
    textoCor.style.color = inputCor.value;
});


const coresFundo = document.querySelector('#cores-fundo');

coresFundo.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});


const direcaoFlex = document.querySelector('#direcao-flex');
const caixaFlex = document.querySelector('#caixa-flex');

direcaoFlex.addEventListener('change', function() {
    caixaFlex.style.flexDirection = this.value;
});


const formulario = document.querySelector('#formulario');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const mensagem = document.querySelector('#mensagem');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    mensagem.textContent = `Olá, o ${nome.value} tem ${idade.value}!`;
});


const contador = document.querySelector('#contador');
const botaoAumentar = document.querySelector('#aumentar');
const botaoDiminuir = document.querySelector('#diminuir');
const botaoReiniciar = document.querySelector('#reiniciar');

let numero = Number(localStorage.getItem('contador')) || 0;
contador.textContent = numero;

const atualizarContador = () => {
    contador.textContent = numero;
    localStorage.setItem('contador', numero);
};

botaoAumentar.addEventListener('click', () => {
    numero++;
    atualizarContador();
});

botaoDiminuir.addEventListener('click', () => {
    numero--;
    atualizarContador();
});

botaoReiniciar.addEventListener('click', () => {
    numero = 0;
    atualizarContador();
});


const relogio = document.querySelector('#relogio');
let segundos = 0;

const contarSegundos = () => {
    segundos++;
    relogio.textContent = segundos;
};

setInterval(contarSegundos, 1000);
