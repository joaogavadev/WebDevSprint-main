function validarForm2() {
    let usuario = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    let confSenha = document.getElementById("confirm-password").value;
    let dataNasc = document.getElementById("dob").value;
    let genero = document.getElementById("gender").value;
  //
    if (usuario === "") {
      alert("Por favor, preencha o campo usuário!");
      document.getElementById("username").focus();
      return false;
    } else if (email === "") {
      alert("Por favor, preencha o campo email!");
      document.getElementById("email").focus();
      return false;
    } else if (senha === "") {
      alert("Por favor, preencha o campo senha!");
      document.getElementById("password").focus();
      return false;
    } else if (confSenha === "") {
      alert("Por favor, confirme a senha!");
      document.getElementById("confirm-password").focus();
      return false;
    } else if (confSenha !== senha) {
      alert("As senhas não coincidem!");
      document.getElementById("confirm-password").focus();
      return false;
    } else if (dataNasc === "") {
      alert("Por favor, preencha o campo data de nascimento!");
      document.getElementById("dob").focus();
      return false;
    } else if (genero === "") {
      alert("Por favor, selecione seu gênero!");
      document.getElementById("gender").focus();
      return false;
    } else {
      alert("Cadastro realizado com sucesso!");
      return true;
    }
  }