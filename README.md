### Sobre o projeto

Este é um teste para a vaga de estágio da empresa **Escalar Comunicação**, onde nele temos quatro tabelas, TVs, Players, mão de obra e orçamento.

As tabelas **TVs** e **Players**, terão uma quantidade de produtos X e um valor unitário Y pertencente aquele produto, então quando o usuário digitar a quantidade e o preço, o sistema irá multiplicar a quantidade de produtos pelo seu valor unitário e então o valor daquele produto é mostrado ao lado. Após isso, o sistema irá calcular automaticamente o valor total de todos os produtos.

A tabela de **mão de obra** apenas terá um campo onde o usuário poderá colocar o preço.

Por fim, temos a tabela de **orçamento**, onde ela fará a soma do valor total de todas as tabelas anteriores.

### Ferramentas

Para front-end, foi utilizado `HTML5`, `CSS3` e `Javascript` utilizando da DOM para manipular os dados do HTML e fazer os cálculos e formatação de preço. Também foi aplicado `Nunjucks` para que pudessemos pegar os dados em `JSON` e inseri-los no HTML.

Para back-end, foi utilizado `Node.js` com o framework `express` para a construção de servidor e suas rotas de `GET` e `PUT`.

### O que foi acrescentado

Além do que foi pedido, também foi implementado a possibilidade de salvar os dados em um arquivo `JSON` que está localizado na raiz do projeto, então o usuário poderá colocar uma quantidade X e um valor Y para um determinado produto, salva-lo ao clicar no botão "salvar dados" e os dados ficarão armazenados.

### Iniciando o projeto

Para inicar o projeto, é preciso ter previamente o `Node` instalado na máquina e então executar no terminal o comando: **npm install** para que algumas depêndencias necessárias sejam instaladas na aplicação. Após isso, executar o comando **npm start** para iniciar o servidor e já pronto.
