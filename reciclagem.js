const steps = [
      {
        badge: "Etapa 01",
        title: "Separe os resíduos",
        description: "Organize papel, plástico, vidro, metal e lixo orgânico em grupos diferentes. Essa é a primeira atitude para facilitar a reciclagem."
      },
      {
        badge: "Etapa 02",
        title: "Limpe antes de descartar",
        description: "Embalagens sujas podem contaminar outros materiais. Uma limpeza simples já aumenta a chance de reaproveitamento."
      },
      {
        badge: "Etapa 03",
        title: "Use a coleta seletiva",
        description: "Descarte os materiais em lixeiras apropriadas, ecopontos ou cooperativas de reciclagem da sua região."
      },
      {
        badge: "Etapa 04",
        title: "Reduza antes de reciclar",
        description: "Reciclar é importante, mas reduzir o consumo de descartáveis é ainda mais eficiente para preservar recursos naturais."
      },
      {
        badge: "Etapa 05",
        title: "Economize água e energia",
        description: "Fechar torneiras, apagar luzes e evitar desperdícios são hábitos simples que diminuem seu impacto ambiental."
      },
      {
        badge: "Etapa 06",
        title: "Compartilhe o conhecimento",
        description: "A educação ambiental cresce quando cada pessoa influencia positivamente sua casa, escola, trabalho e comunidade."
      }
    ];

    const stepBadge = document.getElementById("stepBadge");
    const sceneTitle = document.getElementById("sceneTitle");
    const sceneDescription = document.getElementById("sceneDescription");
    const progressBar = document.getElementById("progressBar");

    let currentStep = 0;

    function updateScene() {
      const step = steps[currentStep];

      stepBadge.textContent = step.badge;
      sceneTitle.textContent = step.title;
      sceneDescription.textContent = step.description;
      progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;

      sceneTitle.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 450, easing: "ease", fill: "both" }
      );

      sceneDescription.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 550, easing: "ease", fill: "both" }
      );

      currentStep = (currentStep + 1) % steps.length;
    }

    updateScene();
    setInterval(updateScene, 3600);