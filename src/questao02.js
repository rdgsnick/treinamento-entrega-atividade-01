import leia from "readline-sync"
var idade = leia.questionInt("informe a idade " )
var estidante = leia.keyInYN("voce e estudante: ")
var diasemana= leia.keyInSelect(["seg", "ter", "qua", 'qui', 'sex', 'sab', 'dom'], "informe o dia da semana")

var valing = 40
if (idade< 12){
    console.log("valor total: R$"+ valing.toFixed(2))
    console.log("o valor do desconto foi: R$ "+ (valing - 15).toFixed(2))
    console.log("o valor cobrado foi R$ "+ (15).toFixed(2))
} else { 
    if (diasemana === 0){
        var desconto = valing * 0.50
        console.log("valor ingresso R$"+ valing.toFixed(2))
        console.log("valor desconto R$"+ desconto.toFixed(2))
        console.log("valor cobrado R$"+ (valing - desconto).toFixed(2))
    }else if (diasemana!== 0 && estidante === true){
        var desconto = valing * 0.30
        console.log("valor ingresso R$"+ valing.toFixed(2))
        console.log("valor desconto R$"+ desconto.toFixed(2))
        console.log("valor cobrado R$"+ (valing - desconto).toFixed(2))
    }else {
        console.log("valor ingresso R$"+ valing.toFixed(2))
        console.log("valor desconto R$"+ (0).toFixed(2))
        console.log("valor cobrado R$"+ valing.toFixed(2))
    }
}