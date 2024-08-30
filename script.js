const botaoCalcular = document.querySelector('.calcular')
const resultadosP1_r = document.querySelector('.resultados_p1_r')
const resultadosP2_r = document.querySelector('.resultados_p2_r')

botaoCalcular.onclick = function () {
    const litros = document.querySelector('#litros').value
    
    const radios = document.querySelectorAll('input[name="radio"]')
    let sucoSelecionado = ''
    for (const radio of radios) {
        if (radio.checked) {
            sucoSelecionado = radio.value;
            break;
        }
    }
    
    const extras = document.querySelectorAll('input[name="extras"]')
    let extrasSelecionado = ''
    let contExtras = 0
    for (const extra of extras) {
        if (extra.checked) {
            
            
            if (extra.value == '1') {
                extrasSelecionado = 1
                contExtras ++
                
            } if (extra.value == '2') {
                extrasSelecionado = 2
                contExtras ++
                
                break;
            }
            
        }
    }
    
    let valoragua = 0
    let valorsuco = 0
    
    if (sucoSelecionado == 'maracuja') {
        valoragua = (litros * 60)/100 
        valorsuco = (litros * 40)/100 
    }

    if (sucoSelecionado == 'caju') {
        valoragua = (litros * 80/100)  
        valorsuco = (litros * 20)/100 
    }

    if (sucoSelecionado == 'goiaba') {
        valoragua = (litros * 50)/100 
        valorsuco = (litros * 50)/100 

    }

    if (extrasSelecionado == 1 ) {
        valoragua
        valoragua = valoragua - (valoragua *2/100)

        console.log('teste 1');
        
    }
    
        else if (contExtras == 2) {
            valoragua = valoragua - (valoragua *7/100)
    
            console.log('teste 3');
        }
 
    else if (extrasSelecionado == 2) {
        valoragua = valoragua - (valoragua *5/100)

        console.log('teste 2');
    }


    resultadosP1_r.innerHTML = `${valoragua + " litros"}`
    resultadosP2_r.innerHTML = `${valorsuco + " litros"}`
    
}