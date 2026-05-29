const perguntas = [
  {
    pergunta: "Qual material pode ser reciclado quando está limpo e seco?",
    alternativas: ["Restos de comida", "Papel", "Fralda descartável", "Guardanapo sujo"],
    correta: 1,
    explicacao: "Papel limpo e seco pode ser encaminhado para reciclagem."
  },
  {
    pergunta: "Qual atitude economiza água em casa?",
    alternativas: ["Lavar calçada com mangueira", "Tomar banhos mais curtos", "Deixar torneira aberta", "Usar descarga sem necessidade"],
    correta: 1,
    explicacao: "Banhos mais curtos reduzem bastante o consumo de água."
  },
  {
    pergunta: "O que fazer com pilhas e baterias usadas?",
    alternativas: ["Jogar no lixo comum", "Enterrar no quintal", "Levar a ponto de coleta", "Queimar"],
    correta: 2,
    explicacao: "Pilhas e baterias precisam de descarte específico por conterem substâncias perigosas."
  },
  {
    pergunta: "Qual opção representa consumo consciente?",
    alternativas: ["Comprar por impulso", "Reutilizar quando possível", "Descartar tudo após um uso", "Evitar consertos"],
    correta: 1,
    explicacao: "Reutilizar produtos diminui desperdício e reduz a necessidade de novos recursos."
  }
];

let indiceAtual = 0;
let respondeu = false;

const pontuacaoAtual = document.getElementById("pontuacaoAtual");
const contadorPergunta = document.getElementById("contadorPergunta");
const perguntaQuiz = document.getElementById("perguntaQuiz");
const alternativasQuiz = document.getElementById("alternativasQuiz");
const resultadoQuiz = document.getElementById("resultadoQuiz");
const proximaPerguntaBtn = document.getElementById("proximaPerguntaBtn");

function atualizarPontuacao() {
  pontuacaoAtual.textContent = EcoMindStorage.getPontos();
}

function mostrarPergunta() {
  const pergunta = perguntas[indiceAtual];
  respondeu = false;
  contadorPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
  perguntaQuiz.textContent = pergunta.pergunta;
  resultadoQuiz.textContent = "";
  resultadoQuiz.className = "result-box";
  alternativasQuiz.innerHTML = "";
  proximaPerguntaBtn.disabled = true;
  proximaPerguntaBtn.textContent = indiceAtual === perguntas.length - 1 ? "Finalizar quiz" : "Próxima pergunta";

  pergunta.alternativas.forEach((alternativa, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${alternativa}`;
    button.addEventListener("click", () => verificarResposta(index));
    alternativasQuiz.appendChild(button);
  });
}

function verificarResposta(indiceEscolhido) {
  if (respondeu) return;

  respondeu = true;
  const pergunta = perguntas[indiceAtual];
  const acertou = indiceEscolhido === pergunta.correta;
  const botoes = alternativasQuiz.querySelectorAll("button");

  botoes.forEach((button, index) => {
    button.disabled = true;
    if (index === pergunta.correta) button.classList.add("correct");
    if (index === indiceEscolhido && !acertou) button.classList.add("wrong");
  });

  if (acertou) {
    EcoMindStorage.adicionarPontos(15);
    resultadoQuiz.textContent = `Acertou! ${pergunta.explicacao} Você ganhou 15 pontos.`;
    resultadoQuiz.classList.add("success");
  } else {
    resultadoQuiz.textContent = `Errou. ${pergunta.explicacao}`;
    resultadoQuiz.classList.add("error");
  }

  atualizarPontuacao();
  proximaPerguntaBtn.disabled = false;
}

proximaPerguntaBtn.addEventListener("click", () => {
  if (indiceAtual < perguntas.length - 1) {
    indiceAtual += 1;
    mostrarPergunta();
    return;
  }

  window.location.href = "dashboard.html";
});

atualizarPontuacao();
mostrarPergunta();
