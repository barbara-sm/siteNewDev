/* seta */
document.getElementById('seta-proximo').addEventListener('click', function() {
        document.getElementById('sobre-video').scrollIntoView({ behavior: 'smooth' });
    });


/*MENU  hamburger */
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    menuMobile.classList.toggle('show'); 
});

// fechar
menuMobile.addEventListener('click', function() {
    menuMobile.classList.remove('show'); 
});

/* trocar img missão visão valores */
document.querySelectorAll('.missao img, .visao img, .valores img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.dataset.original = this.src;
        this.src = this.dataset.hover;
    });
    img.addEventListener('mouseleave', function() {
        this.src = this.dataset.original;
    });
});

// controlar o carrossel pagina index o primeiro
let imagens = document.querySelectorAll('.servico-carrossel img');
let bolinhas = document.querySelectorAll('.bolinhas .bolinha');

function mostrarImagem(index) {
    imagens.forEach(imagem => imagem.style.display = 'none');
    bolinhas.forEach(bolinha => bolinha.classList.remove('ativa'));
    imagens[index].style.display = 'block';
    bolinhas[index].classList.add('ativa');
}

mostrarImagem(0);

document.addEventListener('DOMContentLoaded', function() {
    imagens[0].style.display = 'block';
});


// avaliação página index 
document.addEventListener('DOMContentLoaded', function() {
    const botaoAnterior = document.querySelector('.botao-carrossel.anterior');
    const botaoProxima = document.querySelector('.botao-carrossel.proxima');
    const carrossel = document.querySelector('.avaliacoes-caixa');
    const itensCarrossel = document.querySelectorAll('.avaliacao');
    let indiceAtual = 0;
    const itensPorPagina = 3;

    function mostrarItens() {
        const larguraItem = carrossel.clientWidth / itensPorPagina;
        carrossel.style.transform = `translateX(${-indiceAtual * larguraItem}px)`;
    }

    botaoAnterior.addEventListener('click', function() {
        if (indiceAtual > 0) {
            indiceAtual--;
            mostrarItens();
        }
    });

    botaoProxima.addEventListener('click', function() {
        if (indiceAtual < itensCarrossel.length - itensPorPagina) {
            indiceAtual++;
            mostrarItens();
        }
    });

    window.addEventListener('resize', mostrarItens); 

    mostrarItens(); 
});

// deixar mais suave quando clicar em portfolio
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// formulário
document.addEventListener('DOMContentLoaded', (event) => {
    let modal = document.getElementById("modal-formulario");
    let btn = document.getElementById("abrir-formulario");
    let span = document.getElementsByClassName("fechar")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('apagar-formulario').addEventListener('click', function() {
        document.getElementById('contato-form').reset();
    });

    document.getElementById('contato-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
        modal.style.display = 'none';
        document.getElementById('contato-form').reset();
    });
});




