import leia from 'readline-sync'

var vitorias = leia.questionInt("qual o numero de vitorias ")*3 
var empates = leia.questionInt("qual o numero de empates ")*1
var derrotas = leia.questionInt("qual o numero de derrotas ")*0

var pontuacao = vitorias + empates + derrotas

if(pontuacao >= 70){
    console.log("seu time foi campeao ")
}else if (pontuacao > 45 &&  pontuacao < 70){
    console.log("seu time foi classificado")
}else{
    console.log("seu time foi rebaixado")
}
