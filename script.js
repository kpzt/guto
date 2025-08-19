const barra = document.getElementById('top-bar');
const secoes = document.querySelectorAll('.secoes');
const links = document.querySelectorAll('#top-bar nav a');

// Função para esconder todas as seções
function esconderSecoes() {
  secoes.forEach(secao => {
    secao.style.opacity = 0;
    secao.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      secao.style.display = 'none';
    }, 500);
  });
}

// Função para mostrar a seção clicada
function mostrarSecao(id) {
  esconderSecoes();
  const secao = document.querySelector(id);
  if (secao) {
    setTimeout(() => {
      secao.style.display = 'block';
      secao.style.opacity = 0;
      setTimeout(() => {
        secao.style.opacity = 1;
      }, 50);
    }, 500);
  }
}

// Ao carregar a página, mostrar só o "Início"
document.addEventListener('DOMContentLoaded', () => {
  secoes.forEach(secao => secao.style.display = 'none');
  mostrarSecao('#Sobre-Mim');
});

// Adicionar evento de clique nos links
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o pulo automático
    const destino = link.getAttribute('href');
    mostrarSecao(destino);
  });
});

// Script original da barra fixa
window.addEventListener('scroll', () => {
  const topoDaTela = barra.getBoundingClientRect().top;
  if (topoDaTela <= 0) {
    barra.classList.add('fixa');
  } else {
    barra.classList.remove('fixa');
  }
});
