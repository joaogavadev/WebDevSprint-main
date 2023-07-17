let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
let formLogin = document.querySelector("form");

function validarForm() {
  if (usuario.value == "") {
    alert("Por favor, preencha o campo usuário!");
    alert("Preencha todos os campos!");
    return false;
  }else if (senha.value == ""){
    alert("Por favor, preencha o campo senha!");
    alert("Preencha todos os campos!");
    return false;
  }else{
    alert("Entrou!")
  }
}

