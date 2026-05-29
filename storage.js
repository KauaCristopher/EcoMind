const EcoMindStorage = {
  keys: {
    nome: "nomeUsuario",
    pontos: "pontos",
    habitos: "habitos"
  },

  getNome() {
    return localStorage.getItem(this.keys.nome) || "";
  },

  setNome(nome) {
    localStorage.setItem(this.keys.nome, nome);
  },

  getPontos() {
    return Number(localStorage.getItem(this.keys.pontos)) || 0;
  },

  setPontos(pontos) {
    localStorage.setItem(this.keys.pontos, String(pontos));
  },

  getHabitos() {
    return Number(localStorage.getItem(this.keys.habitos)) || 0;
  },

  setHabitos(habitos) {
    localStorage.setItem(this.keys.habitos, String(habitos));
  },

  adicionarPontos(valor) {
    const pontos = this.getPontos() + valor;
    this.setPontos(pontos);
    return pontos;
  },

  registrarHabito(pontosGanhos) {
    const pontos = this.adicionarPontos(pontosGanhos);
    const habitos = this.getHabitos() + 1;
    this.setHabitos(habitos);
    return { pontos, habitos };
  },

  calcularNivel(pontos) {
    if (pontos >= 300) return "Guardião Ambiental";
    if (pontos >= 150) return "Protetor Verde";
    if (pontos >= 50) return "Aprendiz Sustentável";
    return "Iniciante";
  },

  resetar() {
    localStorage.removeItem(this.keys.nome);
    localStorage.removeItem(this.keys.pontos);
    localStorage.removeItem(this.keys.habitos);
  }
};
