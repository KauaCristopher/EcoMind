const modalNome = document.getElementById("modalNome");
const nomeInput = document.getElementById("nomeInput");
const salvarNomeBtn = document.getElementById("salvarNomeBtn");
const botoesComecar = document.querySelectorAll("[data-open-name]");

function abrirModalNome() {
  modalNome.classList.add("is-open");
  modalNome.setAttribute("aria-hidden", "false");
  nomeInput.focus();
}

function salvarNomeInicial() {
  const nome = nomeInput.value.trim();

  if (!nome) {
    nomeInput.value = "";
    nomeInput.placeholder = "Digite um nome válido";
    nomeInput.focus();
    return;
  }

  EcoMindStorage.setNome(nome);
  window.location.href = "dashboard.html";
}

botoesComecar.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (EcoMindStorage.getNome()) {
      window.location.href = "dashboard.html";
      return;
    }

    abrirModalNome();
  });
});

salvarNomeBtn.addEventListener("click", salvarNomeInicial);

nomeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    salvarNomeInicial();
  }
});
