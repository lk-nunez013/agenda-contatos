const form = document.getElementById('form-agenda')
const nome = [];
const numero = [];
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
    atualizaAgenda();
})

function adicionaContato(){
    const nomeAgenda = document.getElementById('nome')
    const numeroAgenda = document.getElementById('numero')

    if(nome.includes(nomeAgenda.value)){
        alert(`Contato: ${nomeAgenda.value} já está cadastrado.`)
    }else{
        nome.push(nomeAgenda.value)
        numero.push(numeroAgenda.value)

        linha = '<tr>'
        linha += `<td>${nomeAgenda.value}</td>`
        linha += `<td>${numeroAgenda.value}</td>`
        linha += '<tr>'

        linhas += linha;

    }
}

function atualizaAgenda(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}