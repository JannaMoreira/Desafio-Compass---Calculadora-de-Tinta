function resposta() {
    //Puxando as variaveis:
    var inputAltura = document.querySelectorAll(".altura");
    var inputLargura = document.querySelectorAll(".largura");
    var inputJanela = document.querySelectorAll(".janelas");
    var inputPorta = document.querySelectorAll(".portas");
    var resposta = document.querySelectorAll(".resultado");

    //Transformando em Array:
    var novoAltura = Array.from(inputAltura);
    var novoLargura = Array.from(inputLargura);
    var novoPorta = Array.from(inputPorta);
    var novoJanela = Array.from(inputJanela);

    //Array Vazio:
    var arrayAltura = [];
    var arrayLargura = [];
    var arrayJanela = [];
    var arrayPorta = [];

    //Cálculos Gerias
    var areaPorta = [];
    var areaJanela = [];
    var totalAreaJanelaEPorta = [];
    var areaTotalParede = [];
    var quantidadeDeTinta = [];
    var metadeDaParede = [];

    //Valores Fixos: 
    var tamanhoFixoJanela = 2.4 //Tamanho Fixo janela
    var tamanhoFixoPorta = 1.52 //Tamanho Fixo porta
    var paredeComPorta = 2.2;

    for (var i = 0; i < 4; i++) {
        arrayAltura.push(parseFloat(inputAltura[i].value));
        arrayLargura.push(parseFloat(inputLargura[i].value));
        arrayJanela.push(parseInt(inputJanela[i].value));
        arrayPorta.push(parseInt(inputPorta[i].value));
        areaPorta[i] = (arrayPorta[i] * tamanhoFixoPorta).toFixed(2);
        areaJanela[i] = (arrayJanela[i] * tamanhoFixoJanela).toFixed(2);
        totalAreaJanelaEPorta[i] = (Number(areaJanela[i]) + Number(areaPorta[i])).toFixed(2);
        areaTotalParede[i] = (arrayAltura[i] * arrayLargura[i]).toFixed(2);
        quantidadeDeTinta[i] = ((Number(areaTotalParede[i]) - Number(totalAreaJanelaEPorta[i])) / 5).toFixed(2)
        metadeDaParede[i] = (areaTotalParede[i] / 2).toFixed(2)

        //Latas de Tinta: 
        var lata18 = 0;
        var lata3ponto6 = 0;
        var lata2ponto5 = 0;
        var lata05 = 0;

        resposta[i].innerHTML += `<br>Dados da Parede<br>
            Altura: ${arrayAltura[i]}<br>
            Largura: ${arrayLargura[i]}<br>
            Janelas: ${arrayJanela[i]}<br>
            Portas: ${arrayPorta[i]}<br>
            Área da Porta: ${areaPorta[i]}<br>
            Área da Janela: ${areaJanela[i]}<br>
            Área Janelas + Portas: ${totalAreaJanelaEPorta[i]}<br>
            Área Total da Parede: ${areaTotalParede[i]}m²<br>
            Métade da Área: ${metadeDaParede[i]}<br>
          `

        if (areaTotalParede[i] < 1 || areaTotalParede[i] > 50) {
            resposta[i].innerHTML += `<br><br>A área total não pode ser menor que 1m², 
            nem maior que 50m², verifique seu dados.`
        }
        else if (!totalAreaJanelaEPorta[i] > metadeDaParede[i]) {
            resposta[i].innerHTML += `<br><br> O total de área das portas e janelas
         deve ser no máximo 50% da área da parede.`
        }
        else if (arrayAltura[i] < paredeComPorta) {
            resposta[i].innerHTML += `A altura das paredes com porta deve ser,
         no mínimo, 30 centímetros maior que a altura da porta.`
        }
        else {
            if (quantidadeDeTinta[i] > 0) {
                resposta[i].innerHTML += `<br><br>Quantidade de Tinta Necessaria: ${quantidadeDeTinta[i]} Litros`
                while (quantidadeDeTinta[i] >= 18) {
                    quantidadeDeTinta[i] = quantidadeDeTinta[i] - 18;
                    lata18++;
                }
                while (quantidadeDeTinta[i] >= 3.6) {
                    quantidadeDeTinta[i] = quantidadeDeTinta[i] - 3.6;
                    lata3ponto6++;
                }
                while (quantidadeDeTinta[i] >= 2.5) {
                    quantidadeDeTinta[i] = quantidadeDeTinta[i] - 2.5;
                    lata2ponto5++;
                }
                while (quantidadeDeTinta[i] >= 0.5) {
                    quantidadeDeTinta[i] = quantidadeDeTinta[i] - 0.5;
                    lata05++;
                }
                while (quantidadeDeTinta[i] > 0 && quantidadeDeTinta[i] < 0.5) {
                    quantidadeDeTinta[i] = quantidadeDeTinta[i] - 0.5;
                    lata05++;
                }

                resposta[i].innerHTML += `<br>
            Latas de 18: ${lata18}
            <br> Latas de 3.6: ${lata3ponto6}
            <br> Latas de 2.5: ${lata2ponto5}
            <br> Latas de 0.5: ${lata05}`
            }
        }
    }

}
