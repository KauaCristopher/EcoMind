let nome = EcoMindStorage.getNome();

const modalNome = document.getElementById("modalNome");
const nomeInput = document.getElementById("nomeInput");
const salvarNomeBtn = document.getElementById("salvarNomeBtn");
const resetarDadosBtn = document.getElementById("resetarDadosBtn");

const nomeUsuario = document.getElementById("nomeUsuario");
const pontosTotais = document.getElementById("pontosTotais");
const nivelEcologico = document.getElementById("nivelEcologico");
const habitosRegistrados = document.getElementById("habitosRegistrados");
const progressoSemanal = document.getElementById("progressoSemanal");
const barraProgresso = document.getElementById("barraProgresso");
const habitButtons = document.querySelectorAll("[data-habit-points]");

function abrirModalNome() {
  modalNome.classList.add("is-open");
  modalNome.setAttribute("aria-hidden", "false");
  nomeInput.focus();
}

function fecharModalNome() {
  modalNome.classList.remove("is-open");
  modalNome.setAttribute("aria-hidden", "true");
}

function salvarNome() {
  const nomeDigitado = nomeInput.value.trim();

  if (!nomeDigitado) {
    nomeInput.value = "";
    nomeInput.placeholder = "Digite um nome válido";
    nomeInput.focus();
    return;
  }

  nome = nomeDigitado;
  EcoMindStorage.setNome(nome);
  fecharModalNome();
  atualizarDashboard();
}

function atualizarDashboard() {
  const pontos = EcoMindStorage.getPontos();
  const habitos = EcoMindStorage.getHabitos();
  const metaSemanal = 10;
  const progresso = Math.min((habitos / metaSemanal) * 100, 100);

  nomeUsuario.textContent = nome || "Usuário";
  pontosTotais.textContent = pontos;
  nivelEcologico.textContent = EcoMindStorage.calcularNivel(pontos);
  habitosRegistrados.textContent = habitos;
  progressoSemanal.textContent = Math.round(progresso);
  barraProgresso.style.width = `${progresso}%`;
}

function registrarHabito(pontosGanhos) {
  EcoMindStorage.registrarHabito(pontosGanhos);
  atualizarDashboard();
}

function resetarDados() {
  EcoMindStorage.resetar();
  nome = "";
  nomeInput.value = "";
  atualizarDashboard();
  abrirModalNome();
}

habitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    registrarHabito(Number(button.dataset.habitPoints));
  });
});

salvarNomeBtn.addEventListener("click", salvarNome);
resetarDadosBtn.addEventListener("click", resetarDados);

nomeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    salvarNome();
  }
});

if (!nome) {
  abrirModalNome();
} else {
  atualizarDashboard();
}
