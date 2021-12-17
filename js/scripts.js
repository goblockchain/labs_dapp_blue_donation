//validações do formulario para criar a ONG
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

//Login da carteira metamask
const web3 = new Web3(Web3.givenProvider || "ws://http://127.0.0.1:5500");

 
    async function loginMetamask(){
            await window.web3.currentProvider.enable();
            web3 = new Web3(window.web3.currentProvider); 
    }
    //Numero da chave publica metamask

    web3.eth.getAccounts(function(error, accounts) {
    
          //$("#statusMetamask").text( "Conectado(a)" );
          $("#addressMetamask").text("Endereço da carteira: " + accounts + ".");
          //usando na pagina cadastrar NFT
          $("#numCarteiraMetamask").text( accounts);
    })


  //modal para conectar carteiras

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
    })


