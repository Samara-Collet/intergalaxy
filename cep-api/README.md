# CEP-API / Teste Intergalaxy

## Objetivo:

Desenvolver uma aplicação usando ReactJS capaz de fazer uma consulta
API utilizando entrada de dados do usuário e mostrar o retorno na tela.

## Projeto:

Fazer uma consulta no cep.la passando o CEP parametro informado pelo usuário
e mostrar os dados do endereço retornado na tela.

## Ferramentas:

- Utilizar o comando "npx create-react-app cep-api" para criar o projeto;
- Utilizar o modulo axios para consultas API;
- Utilizar o hook useState.

## Informações:

Utilizar o endpoint [GET]http://cep.la/12512422, sendo o número após a barra o CEP que desejamos buscar.

Lembrando de passar no Header da consulta "Accept: application/json" para receber as informações em json. Para mais informações ler a referência abaixo.

Referência: http://cep.la/api

## Observações:

Serão considerados pontos positivos melhorias no projeto como por exemplo usar mascara no input e implementar animação de loading na requisição.
