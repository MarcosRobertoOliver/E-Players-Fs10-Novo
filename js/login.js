// inicializa o jQuery
$(document).ready(function(){
       

    $(".signin").click(function(){
        
        // //pegando os dados dos campos
        
        let nome = $("#cpf").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos");
        } else {
            $(".mensagem").text("Dados prontos para cadastrar!!");
        }
    });
});