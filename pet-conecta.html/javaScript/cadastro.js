const form = document.getElementById("form");
const username = document.getElementById("username")
const date = document.getElementById("date")
const nomematerno = document.getElementById("nomematerno")
const cpf = document.getElementById("cpf")
const email = document.getElementById("email")
const celular = document.getElementById("celular")
const telefonefixo = document.getElementById("telefonefixo")
const sexo = document.getElementById("sexo")
const login = document.getElementById("login")
const password = document.getElementById("password")
const confirmarsenha = document.getElementById("confirmarsenha")
const cep = document.getElementById("cep")
const rua = document.getElementById("rua")
const numero = document.getElementById("numero")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado");

form.addEventListener("submit", (Event) =>{
    Event.preventDefault();
    alert("CADASTRADO COM SUCESSO !")
})
