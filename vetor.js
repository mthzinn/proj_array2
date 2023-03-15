let cidade = []
let res = document.getElementById('res')
let valor_cidade = []

function inserir(){

    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function insert_inicio(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.unshift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade



}

function excluir(){

    valor_cidade.pop()
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function excluir_final(){
    valor_cidade.shift()
    console.log(valor_cidade)
    res.innerHTML = valor_cidade


}