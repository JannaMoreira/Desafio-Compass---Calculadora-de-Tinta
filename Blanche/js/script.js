function resposta(){
    /*Puxando as variaveis pelo Id:*/ 
    var alt1 = document.getElementById('altura1')
    var lar1 = document.getElementById('largura1')
    var por1 = document.getElementById('porta1')
    var jan1 = document.getElementById('janela1')
    var resp1 = document.getElementById('parede1-tinta')

   var alt2 = document.getElementById('altura2')
    var lar2 = document.getElementById('largura2')
    var por2 = document.getElementById('porta2')
    var jan2 = document.getElementById('janela2')
    var resp2 = document.getElementById('parede2-tinta')

    var alt3 = document.getElementById('altura3')
    var lar3 = document.getElementById('largura3')
    var por3 = document.getElementById('porta3')
    var jan3 = document.getElementById('janela3')
    var resp3 = document.getElementById('parede3-tinta')

    var alt4 = document.getElementById('altura4')
    var lar4 = document.getElementById('largura4')
    var por4 = document.getElementById('porta4')
    var jan4 = document.getElementById('janela4')
    var resp4 = document.getElementById('parede4-tinta')


    /*Transformando o texto em valor numérico para cálculo:*/
    var tamanhoFixoJanelas = 2.4 //Tamanho Fixo janela
    var tamanhoFixoPortas = 1.52 //Tamanho Fixo porta

    //Parede 1:
    var altura1 = Number(alt1.value)//altura parede 1
    var largura1 = Number(lar1.value)//largura parede 1
    var porta1 = Number(por1.value)//Quantidade de portas na parede 1
    var areaPorta1 = porta1 * tamanhoFixoPortas//Área total das portas na parede 1
    var janela1 = Number(jan1.value)//Quantidade de janelas na parede 1
    var areaJanela1 = janela1 * tamanhoFixoJanelas//Área total das janelas na parede 1
    var totalAreaJanelaEPorta1 = areaJanela1 + areaPorta1
    var areaTotalParede1 = altura1*largura1//Área total da parede 1
    var qtdTintaParede1 = (areaTotalParede1 - totalAreaJanelaEPorta1)/5//Quantidade de tinta necessária para a parede 1
    var metadeAreaDaParede1 = areaTotalParede1/2 //Área da parede 1 dividida por 2, para não ultrapassar 50% em janelas e portas
    var paredeComPorta1  = 2.2//Altura da parede com porta maior que 0.30cm


   //Parede 2:
    var altura2 = Number(alt2.value)//altura parede 2
    var largura2 = Number(lar2.value)//largura parede 2
    var porta2 = Number(por2.value)//Quantidade de portas na parede 2
    var areaPorta2 = porta2 * tamanhoFixoPortas//Área total das portas na parede 2
    var janela2 = Number(jan2.value)//Quantidade de janelas na parede 2
    var areaJanela2 = janela2 * tamanhoFixoJanelas//Área total das janelas na parede 2
    var totalAreaJanelaEPorta2 = areaJanela2 + areaPorta2
    var areaTotalParede2 = altura2*largura2//Área total da parede 2
    var qtdTintaParede2 = (areaTotalParede2 - totalAreaJanelaEPorta2)/5//Quantidade de tinta necessária para a parede 2
    var metadeAreaDaParede2 = areaTotalParede2/2 //Área da parede 2 dividida por 2, para não ultrapassar 50% em janelas e portas
    var paredeComPorta2  = 2.2//Altura da parede com porta maior que 0.30cm


   //Parede 3:
    var altura3 = Number(alt3.value)//altura parede 3
    var largura3 = Number(lar3.value)//largura parede 3
    var porta3 = Number(por3.value)//Quantidade de portas na parede 3
    var areaPorta3 = porta3 * tamanhoFixoPortas//Área total das portas na parede 3
    var janela3 = Number(jan3.value)//Quantidade de janelas na parede 3
    var areaJanela3 = janela3 * tamanhoFixoJanelas//Área total das janelas na parede 3
    var totalAreaJanelaEPorta3 = areaJanela3 + areaPorta3
    var areaTotalParede3 = altura3*largura3//Área total da parede 3
    var qtdTintaParede3 = (areaTotalParede3 - totalAreaJanelaEPorta3)/5//Quantidade de tinta necessária para a parede 3
    var metadeAreaDaParede3 = areaTotalParede3/2 //Área da parede 3 dividida por 2, para não ultrapassar 50% em janelas e portas
    var paredeComPortas3  = 2.2//Altura da parede com porta maior que 0.30cm


    //Parede 4:
    var altura4 = Number(alt4.value)//altura parede 4
    var largura4 = Number(lar4.value)//largura parede 4
    var porta4 = Number(por4.value)//Quantidade de portas na parede 4
    var areaPorta4 = porta4 * tamanhoFixoPortas//Área total das portas na parede 4
    var janela4 = Number(jan4.value)//Quantidade de janelas na parede 4
    var areaJanela4 = janela4 * tamanhoFixoJanelas//Área total das janelas na parede 4
    var totalAreaJanelaEPorta4 = areaJanela4 + areaPorta4
    var areaTotalParede4 = altura4*largura4//Área total da parede 4
    var qtdTintaParede4 = (areaTotalParede4 - totalAreaJanelaEPorta4)/5//Quantidade de tinta necessária para a parede 4
    var metadeAreaDaParede4 = areaTotalParede4/2 //Área da parede 4 dividida por 2, para não ultrapassar 50% em janelas e portas
    var paredeComPortas4  = 2.2//Altura da parede com porta maior que 0.30cm



    //Lógica Parede 1:
    var lata18 = 0
    var lata3ponto6 = 0
    var lata2ponto5 = 0
    var lata05 = 0 

    if(altura1 == 0 || largura1 == 0 || janela1 == null || porta1 == null){
        resp1.innerHTML = `Preencha todos os campos para realizar o calculo!`
    }
    else{
        if(areaTotalParede1 < 1 || areaTotalParede1 > 50){
            resp1.innerHTML =`A área Total da parede, infelizmente não pode ser menor que 1 m², nem maior que 50 m².`
        }
        else if(altura1 < paredeComPorta1){
            resp1.innerHTML =`A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.`
        }
        else if(totalAreaJanelaEPorta1 > metadeAreaDaParede1){
            resp1.innerHTML =`O total de área das portas e janelas deve ser no máximo 50% da área da parede.`
        }
        else{ 
            resp1.innerHTML = `Dados da Parede 1:<br>
            Área da(s) Janela(s): ${areaJanela1.toFixed(2)}<br>
            Área da(s) Porta(s): ${areaPorta1.toFixed(2)}<br>
            Área da(s) Porta(s)+Janela(s): ${totalAreaJanelaEPorta1.toFixed(2)}<br>
            Área Total da Parede: ${areaTotalParede1.toFixed(2)}<br>
            Quantidade de Tinta: ${qtdTintaParede1.toFixed(2)}<br>`  
            if(qtdTintaParede1 > 0){
                while(qtdTintaParede1 >= 18){
                    qtdTintaParede1 = qtdTintaParede1 - 18
                    lata18 = lata18 + 1
                }
                while(qtdTintaParede1 >= 3.6){
                    qtdTintaParede1 = qtdTintaParede1 - 3.6
                    lata3ponto6 = lata3ponto6 + 1
                }
                while(qtdTintaParede1 >= 2.5){
                    qtdTintaParede1 = qtdTintaParede1 - 2.5
                    lata2ponto5 = lata2ponto5 + 1
                }
                while(qtdTintaParede1 >= 0.5 || qtdTintaParede1 >= 0.4 || qtdTintaParede1 >= 0.3 || qtdTintaParede1 >= 0.2 || qtdTintaParede1 >= 0.1){
                    qtdTintaParede1 = qtdTintaParede1 - 0.5
                    lata05 = lata05 + 1
                }
                            
            }
            resp1.innerHTML += `<br><br>Tinta Necessaria Para Parede 1:<br>
            Latas de 18: ${lata18}
            <br> Latas de 3.6: ${lata3ponto6}
            <br> Latas de 2.5: ${lata2ponto5}
            <br> Latas de 0.5: ${lata05}` 
        
        }
    }
   

 //Lógica Parede 2:
    var lata18 = 0
    var lata3ponto6 = 0
    var lata2ponto5 = 0
    var lata05 = 0
    if(altura2 == 0 || largura2 == 0 || janela2 == null || porta2 == null){
        resp2.innerHTML = `Preencha todos os campos para realizar o calculo!`
    }
    else{
        if(areaTotalParede2 < 1 || areaTotalParede2 > 50 ){
            resp2.innerHTML =`A área Total da parede, infelizmente não pode ser menor que 1 m², nem maior que 50 m². `
        }
        else if(altura2 < paredeComPorta2){
            resp2.innerHTML =`A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.`
        }
        else if(totalAreaJanelaEPorta2 > metadeAreaDaParede2){
            resp2.innerHTML =`O total de área das portas e janelas deve ser no máximo 50% da área da parede.`
        }
        else{ 
                resp2.innerHTML = `Dados da Parede 2:<br>
                Área da(s) Porta(s): ${areaPorta2.toFixed(2)}<br>
                Área da(s) Janela(s): ${areaJanela2.toFixed(2)}<br>
                Área da(s) Porta(s)+Janela(s): ${totalAreaJanelaEPorta2.toFixed(2)}<br>
                Área Total da Parede: ${areaTotalParede2.toFixed(2)}<br>
                Quantidade de Tinta: ${qtdTintaParede2.toFixed(2)}<br>`
                if(qtdTintaParede2 > 0){
                    while(qtdTintaParede2 >= 18){
                        qtdTintaParede2 = qtdTintaParede2 - 18
                        lata18 = lata18 + 1
                    }
                    while(qtdTintaParede2 >= 3.6){
                        qtdTintaParede2 = qtdTintaParede2 - 3.6
                        lata3ponto6 = lata3ponto6 + 1
                    }
                    while(qtdTintaParede2 >= 2.5){
                        qtdTintaParede2 = qtdTintaParede2 - 2.5
                        lata2ponto5 = lata2ponto5 + 1
                    }
                    while(qtdTintaParede2 >= 0.5 || qtdTintaParede2 >= 0.4 || qtdTintaParede2 >= 0.3|| qtdTintaParede2 >= 0.2|| qtdTintaParede2 >= 0.1){
                        qtdTintaParede2 = qtdTintaParede2 - 0.5
                        lata05 = lata05 + 1
                    }           
            }  
            resp2.innerHTML += `<br><br>Tinta Necessaria Para Parede 2:<br>
            Latas de 18: ${lata18}
            <br> Latas de 3.6: ${lata3ponto6}
            <br> Latas de 2.5: ${lata2ponto5}
            <br> Latas de 0.5: ${lata05}`
        }
}
  
    //Lógica Parede 3:
    var lata18 = 0
    var lata3ponto6 = 0
    var lata2ponto5 = 0
    var lata05 = 0

    if(altura3 == 0 || largura3 == 0 || janela3 == null || porta3 == null){
        resp3.innerHTML = `Preencha todos os campos para realizar o calculo!`
    }
    else{
        if(areaTotalParede3 < 1 || areaTotalParede3 > 50 ){
            resp3.innerHTML =`A área Total da parede, infelizmente não pode ser menor que 1 m², nem maior que 50 m². `
        }
        else if(altura3 < paredeComPortas3){
            resp3.innerHTML =`A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.`
        }
        else if(totalAreaJanelaEPorta3 > metadeAreaDaParede3){
            resp3.innerHTML =`O total de área das portas e janelas deve ser no máximo 50% da área da parede.`
        }else{ 
                resp3.innerHTML = `Dados da Parede 3:<br>
                Área da(s) Porta(s): ${areaPorta3.toFixed(2)}<br>
                Área da(s) Janela(s): ${areaJanela3.toFixed(2)}<br>
                Área da(s) Porta(s)+Janela(s): ${totalAreaJanelaEPorta3.toFixed(2)}<br>
                Área Total da Parede: ${areaTotalParede3.toFixed(2)}<br>
                Quantidade de Tinta: ${qtdTintaParede3.toFixed(2)}<br>`
                if(qtdTintaParede3 > 0){
                    while(qtdTintaParede3 >= 18){
                        qtdTintaParede3 = qtdTintaParede3 - 18
                        lata18 = lata18 + 1
                    }
                    while(qtdTintaParede3 >= 3.6){
                        qtdTintaParede3 = qtdTintaParede3 - 3.6
                        lata3ponto6 = lata3ponto6 + 1
                    }
                    while(qtdTintaParede3 >= 2.5){
                        qtdTintaParede3 = qtdTintaParede3 - 2.5
                        lata2ponto5 = lata2ponto5 + 1
                    }
                    while(qtdTintaParede3 >= 0.5 || qtdTintaParede3 >= 0.4 || qtdTintaParede3 >= 0.3|| qtdTintaParede3 >= 0.2|| qtdTintaParede3 >= 0.1){
                        qtdTintaParede3 = qtdTintaParede3 - 0.5
                        lata05 = lata05 + 1
                    }           
            }  
            resp3.innerHTML += `<br><br>Tinta Necessaria Para Parede 3:<br>
            Latas de 18: ${lata18}
            <br> Latas de 3.6: ${lata3ponto6}
            <br> Latas de 2.5: ${lata2ponto5}
            <br> Latas de 0.5: ${lata05}`
        }
    }
    
     //Lógica Parede 4:
     var lata18 = 0
     var lata3ponto6 = 0
     var lata2ponto5 = 0
     var lata05 = 0
 
    if(altura4 == 0 || largura4 == 0 || janela4 == null || porta4 == null){
        resp4.innerHTML = `Preencha todos os campos para realizar o calculo!`
    }
    else{
        if(areaTotalParede4 < 1 || areaTotalParede4 > 50 ){
            resp4.innerHTML =`A área Total da parede, infelizmente não pode ser menor que 1 m², nem maior que 50 m². `
        }
        else if(altura4 < paredeComPortas4){
            resp4.innerHTML =`A altura das paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta.`
        }
        else if(totalAreaJanelaEPorta4 > metadeAreaDaParede4){
            resp4.innerHTML =`O total de área das portas e janelas deve ser no máximo 50% da área da parede.`
        } 
        else{ 
                resp4.innerHTML = `Dados da Parede 4:<br>
                Área da(s) Porta(s): ${areaPorta4.toFixed(2)}<br>
                Área da(s) Janela(s): ${areaJanela4.toFixed(2)}<br>
                Área da(s) Porta(s)+Janela(s): ${totalAreaJanelaEPorta4.toFixed(2)}<br>
                Área Total da Parede: ${areaTotalParede4.toFixed(2)}<br>
                Quantidade de Tinta: ${qtdTintaParede4.toFixed(2)}<br>`
                if(qtdTintaParede4 > 0){
                    while(qtdTintaParede4 >= 18){
                        qtdTintaParede4 = qtdTintaParede4 - 18
                        lata18 = lata18 + 1
                    }
                    while(qtdTintaParede4 >= 3.6){
                        qtdTintaParede4 = qtdTintaParede4 - 3.6
                        lata3ponto6 = lata3ponto6 + 1
                    }
                    while(qtdTintaParede4 >= 2.5){
                        qtdTintaParede4 = qtdTintaParede4 - 2.5
                        lata2ponto5 = lata2ponto5 + 1
                    }
                    while(qtdTintaParede4 >= 0.5 || qtdTintaParede4 >= 0.4 || qtdTintaParede4 >= 0.3|| qtdTintaParede4 >= 0.2|| qtdTintaParede4 >= 0.1){
                        qtdTintaParede4 = qtdTintaParede4 - 0.5
                        lata05 = lata05 + 1
                        }           
                    }  
                    resp4.innerHTML += `<br><br>Tinta Necessaria Para Parede 4:<br>
                    Latas de 18: ${lata18}
                    <br> Latas de 3.6: ${lata3ponto6}
                    <br> Latas de 2.5: ${lata2ponto5}
                    <br> Latas de 0.5: ${lata05}`

                }
        }
}