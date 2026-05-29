const listaRanking = document.getElementById("listaRanking");

const usuario = {
  nome: EcoMindStorage.getNome() || "Kauã",
  pontos: EcoMindStorage.getPontos()
};

const ranking = [
  { nome: "Ana", pontos: 320 },
  { nome: "Lucas", pontos: 260 },
  usuario,
  { nome: "Marina", pontos: 190 },
  { nome: "João", pontos: 120 }
].sort((a, b) => b.pontos - a.pontos);

ranking.forEach((pessoa) => {
  const item = document.createElement("li");
  item.className = pessoa.nome === usuario.nome ? "current-user" : "";
  item.innerHTML = `<span>${pessoa.nome}</span><strong>${pessoa.pontos} pontos</strong>`;
  listaRanking.appendChild(item);
});
