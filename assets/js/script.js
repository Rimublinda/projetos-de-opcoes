const h4Teste = document.getElementById('texto_para_mod');
const modificarNome = document.getElementById('modificar_nome');
const modificarTamanho = document.getElementById('tamanho_letra');
const modificarCor = document.getElementById('trocar_cor');
const modificarFont = document.getElementById('fonte');
const addAnimacao = document.getElementById('add_animacao');
const addSombra = document.getElementById('add_sombra');
const addAtalho = document.getElementById('add_atalho');
const spanAtalho = document.querySelector('.tecla_de_atalho');
let i = 0;

function modificarTexto() {
    if (modificarNome.value !== '') { h4Teste.innerHTML = modificarNome.value; }
    else{
        h4Teste.innerHTML = "texto";
    }
    if (modificarTamanho.value == 0){
        h4Teste.style.fontSize = '3em';
    } else {
        h4Teste.style.fontSize = `${modificarTamanho.value}em`;
    }
    h4Teste.style.color = `${modificarCor.value}`;
}

function fonte() {
    switch (modificarFont.value) {
        case '1':
            h4Teste.style.fontFamily = "'BhuTuka Expanded One', cursive";
            break;
        case '2':
            h4Teste.style.fontFamily = "'Mouse Memoirs', sans-serif";
            break;
        case '3':
            h4Teste.style.fontFamily = "'Uchen', serif";
            break;
        case '4':
            h4Teste.style.fontFamily = "'Open Sans', sans-serif";
            break;
        case '5':
            h4Teste.style.fontFamily = "'Roboto', sans-serif";
            break;
    }
}

function interruptores() {
    if (addSombra.checked == true) {
        h4Teste.style.textShadow = '4px 2px 3px #000000';
    }else{
        h4Teste.style.textShadow = 'none';
    }
    
    if (addAnimacao.checked == true) {
        h4Teste.classList.add('animate__animated', 'animate__bounceInDown');
        setTimeout(() => {
            h4Teste.classList.remove('animate__animated', 'animate__bounceInDown');
        }, 2000);
    }

    if (addAtalho.checked == true) {
        spanAtalho.classList.remove('hidden');
        spanAtalho.classList.add('animate__animated', 'animate__bounce');
        setTimeout(() => {
            spanAtalho.classList.remove('animate__animated', 'animate__bounce');
        }, 2000);
        i = 2;
    }else{
        spanAtalho.classList.add('hidden');
        i = 0;
    }
}


window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; 
    }

    switch (event.key) {
        case "Enter":
            if (i > 1) {
                render();
            }
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);

function render() {
    modificarTexto();
    fonte();
    interruptores();
}

document.querySelector("#salvar").addEventListener('click', render);