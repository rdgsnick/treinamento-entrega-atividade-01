import leia from "readline-sync"

let valor = leia.questionFloat("qual o valor da compra? ")
var estado = leia.keyInSelect ([ "SP", "SC", 'PR', 'RS', 'OUTROS'], "INFORME O DESTINO ")
let fretesp = valor *1.5
let fretesc = valor *1.3
let fretepr = valor *1.1
let freters = valor * 1.6
let fretepadrao= valor * 1.4

if (valor > 500){
    console.log("o frete será por conta da casa o valor da compra sera R$:"+ valor.toFixed(2))
} else { 
    switch(estado){
        case 0:console.log("o valor da compra com o frete ficará: R$ "+ fretesp.toFixed(2))
        break
        case 1:console.log("o valor da compra com o frete ficará: R$ "+ fretesc.toFixed(2))
        break
        case 2:console.log("o valor da compra com o frete ficará: R$ "+ fretepr.toFixed(2))
        break
        case 3:console.log("o valor da compra com o frete ficará: R$ "+ freters.toFixed(2))
        break
        case 4:console.log("o valor da compra com o frete ficará: R$ "+ fretepadrao.toFixed(2))
        break

    }
}
