// exercio 1 iniciante
function mostrarAlerta() {
    alert("Olá, mundo! Estamos voltando ao foco!");
}

function atualizarTexto() {
    document.getElementById("info").innerText = "Texto atualizado";
}

function cumprimentar() {
    alert("bom dia, boa tarde, boa noite,  beleza!")
}

function mudarFundo() {
    const caixa = document.querySelector('.caixa');
    caixa.style.backgroundColor = 'blue';
}
  

function mudarTextoParaVermelho() { 
    const paragrafo = document.getElementById("mensagem");
    paragrafo.style.color = "red";
}


// Atividade Intermediário //

function atualizarMensagem() {
    const nome = document.getElementById('nomeInput').value;
    const divResposta = document.getElementById('resposta');
    divResposta.textContent = `Olá, ${nome}`;
  }
  
  function aumentarFonte() {
    const paragrafo = document.querySelector('.texto');
    if (paragrafo) {
      paragrafo.style.fontSize = '24px';
    }
  }
  
  // Quando o DOM estiver carregado, altera texto do botão com ID 'botaoOriginal'
  document.addEventListener('DOMContentLoaded', () => {
    const botaoOriginal = document.getElementById('botaoOriginal');
    if (botaoOriginal) {
      botaoOriginal.addEventListener('click', () => {
        botaoOriginal.textContent = 'Clicado!';
      });
    }
  });
  
  function mostrarData() {
    const paragrafo = document.getElementById("data");
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro = 0
    const ano = dataAtual.getFullYear();
    paragrafo.textContent = `Data atual: ${dia}/${mes}/${ano}`;
}

function mudarCorDeFundo() {
  const corSelecionada = document.getElementById("seletorCor").value;
  const divFundo = document.getElementById("fundo");
  divFundo.style.backgroundColor = corSelecionada;
}
