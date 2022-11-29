# Atividade Gestão & Qualidade de Software - 18/11 (IMC)

## Descrição do Projeto

<p>API desenvolvida para Cálculo do IMC de crianças, adultos e idosos</p>

<br/>
### Requisitos.
<ul>
    <li>
        <a href="https://nodejs.org/en/" target="_blank" >Node.js - v14.15.4 ou superior  </a>
    </li>
    <li>
        <a href="https://www.npmjs.com/" target="_blank" >Node Package Manager (npm) - 6.14.17 ou superior</a>
    </li>
</ul>

### Inicializar a aplicação

Para a execução do projeto de maneira local deve ser executado os seguintes passos.
<br/>

<ul>
    <li><b>Inicializar a aplicação: </b>
    <br/>
    Para inicializar a aplicação é necessário entrar na pasta do projeto e rodar o comando:
    <br/>
    <code>npm i</code>
        <code>npm run dev</code>

</ul>

<p>Após a finalização desse processo você terá a aplicação rodando localmente na porta <code>3000</code>, mais especificamente: <code>http://localhost:3000/</code></p>
<br/>

<p><b>OBS:</b> Você DEVE utilizar um software como <a href="https://www.postman.com/" target="_blank">Postman</a> para disparar requisições para a API, ou instalar em extensões do Visual Studio Code a REST Client, e requisitar via arquivo .http</p>
<br/>

## Detalhamento das rotas

<code>POST /imc </code>-> devemos informar no corpo (body) da requisição as seguintes informações para que seja calculado o seu IMC:
{
"age",
"height",
"gender",
}, sendo o campo age (number), o campo height (number) e o campo gender (enum: "M" || "F")
