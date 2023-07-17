function validar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome == ""){
        alert("Digite o campo nome");
        document.getElementById("nome").focus();
    } else if (email == ""){
        alert("Digite o campo email");
        document.getElementById("email").focus();
    } else if (mensagem == ""){
        alert("Escreva uma mensagem");
        document.getElementById("mensagem").focus();
    } else {
        alert("Mensagem enviada!")
    }
}