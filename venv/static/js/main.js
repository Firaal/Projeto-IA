function mostrarGrafico(grafico) {
    const graficoContainer = document.getElementById("graficoContainer");

    let titulo = "";
    let descricao = "";
    let imagemSrc = "";

    switch (grafico) {
        case "grafico1":
            titulo = "Gráfico de Consumo de Álcool por Faixa Etária";
            descricao =
                "Esse gráfico permitirá visualizar como o consumo de álcool varia entre diferentes faixas etárias, ajudando a identificar tendências e padrões de comportamento entre as idades.";
            imagemSrc = "../static/imgs/consumo-alcool-idade.png";
            break;
        case "grafico2":
            titulo = "Relação entre a pressão sistólica e diastólica por Status de bebedor";
            descricao = "Pode ajudar a identificar se bebedores apresentam padrões diferentes de pressão arterial em comparação com não bebedores.";
            imagemSrc = "../static/imgs/scatterplot-sistolica-diastolica-bebedor.png";
            break;
        case "grafico3":
            titulo = "Heatmap";
            descricao = "Técnica de visualização de dados que mostra a magnitude de um fenômeno por meio de cor em duas dimensões.";
            imagemSrc = "../static/imgs/heatmap.png";
            break;
        case "grafico4":
            titulo = "Gráfico de Triglicerídeos por Consumo de Álcool";
            descricao =
                "Este gráfico permitirá observar como o status de fumante varia entre diferentes faixas etárias, ajudando a identificar padrões de tabagismo.";
            imagemSrc = "../static/imgs/triglicerideos_por_consumo.png";
            break;
        case "grafico5":
            titulo = "Relação entre Glicose e Colesterol por Consumo de Álcool";
            descricao =
                "Este gráfico pode ajudar a entender se há uma relação entre os níveis de glicose e colesterol entre os diferentes grupos de fumantes, o que é crucial para a avaliação do risco cardiovascular e metabólico.";
            imagemSrc = "../static/imgs/scatterplot_glicose_colesterol.png";
            break;
        case "grafico6":
            titulo = "Gráfico de Barras Empilhadas para ver o consumo de Álcool por Faixa de Peso";
            descricao =
                "Esse gráfico permite observar como o peso se distribui entre aqueles que consomem e não consomem bebidas. Se uma faixa de peso tiver uma proporção significativamente maior de consumidores ou não consumidores, isso pode sugerir um padrão interessante sobre a relação entre peso e consumo de álcool.";
            imagemSrc = "../static/imgs/consumo-alcool-peso.png";
            break;
        case "grafico7":
            titulo = "Gráfico de Barras para ver a relação de fumantes e o consumo de álcool";
            descricao =
                "Neste gráfico, você verá as barras empilhadas que mostram o número de pessoas que bebem e não bebem, dentro de cada status de fumante (não fumante, ex-fumante e fumante). Isso oferece uma visão clara das proporções de cada grupo. Esse gráfico te dá uma visão mais precisa de como o consumo de álcool está relacionado ao status de fumante.";
            imagemSrc = "../static/imgs/relacao_fumante_e_bebedor.png";
            break;
    }

    // Atualiza o conteúdo do container com o gráfico e informações correspondentes
    graficoContainer.innerHTML = `
        <h3>${titulo}</h3>
        <img src="${imagemSrc}" alt="${titulo}">
        <p>${descricao}</p>
    `;
}
