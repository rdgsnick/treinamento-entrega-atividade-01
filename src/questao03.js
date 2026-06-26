import leia from 'readline-sync'
// Questão 03
// Você está desenvolvendo um sistema para uma empresa de energia elétrica.
//  Solicite o consumo de energia (kWh) e calcule o valor da conta. Regras: Até 100 kWh → R$ 0,60 por kWh
// De 101 a 300 kWh → R$ 0,75 por kWh; Acima de 300 kWh → R$ 0,90 por kWh; Caso o cliente seja beneficiário da tarifa social (S/N),
//  conceda 20% de desconto sobre o valor final.
var cliente = leia.keyInYN(["S","N"],"voce é beneficiario?" )
var kwh = leia.questionFloat("quantos kwh voce usou?")
var valor = 0 
if(kwh <= 100 ){
    valor = kwh *0.60
}else if( kwh > 100 && kwh<= 300){
    valor = kwh* 0.75
}else {
    valor= kwh *0.90
}
    var valorf = (cliente === true) ? valor - (valor * 0.20) : valor;
    console.log("valor final a pagar R$ "+ valorf)