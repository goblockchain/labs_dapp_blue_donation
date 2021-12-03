function validarFormularioONG(){
    var preenchaNome = document.getElementById("nomeOng");
    var numeroCarteira = document.getElementById("numCarteira");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
        if(preenchaNome.value == ""){
            alert("Preencha o campo de Nome da Organização");
        }
        if(numeroCarteira.value == ""){
            alert("Preencha o Núemero da sua carteira");
        }
        if(email.value == ""){
            alert("Preencha seu E-mail");
        }
        if(telefone.value == ""){
            alert("Preencha o seu Núemero de Telefone");
        }
        return;
};


const Web3 = require("web3");
function conectarMetamask(){
    const ethEnabled = async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        return true;
    }
    return false;
    }
};






