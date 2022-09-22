# Desafio Front end / Mobile

### Requisitos:

    - Npm
    - Yarn
  
### Descrição do desafio:
Na RPC trabalhamos diariamente com dados provenientes da Rede Globo. Um exemplo comum é a nossa grade de programação, que traz informações relevantes sobre horários de programa, título, sinopse, entre outros.

Como desenvolvedor de aplicações para web, você precisa construir uma aplicação para que nossos telespectadores possam acessar a grade de programação da RPC. 

Para que sua aplicação web seja útil ao público final (nossos telespectadores), você deverá consumir a API "EPG" da Globo e conseguir as informações relacionadas a grade de programação da RPC.

### Observações:

* Estava com algum problema para consumir a API da Globo (erro no CORS), tentei de várias formas contornar esseobstáculo e a única que achei foi utilizar outro projeto que acabei encontrando no GitHub do usuário "msenkiv" para conseguir coletar os dados da API. Fiz alguns ajustes para a minha aplicação, mas mesmo assim alguns dados, como title, de alguns programas não foram consumidos.

* O projeto reutilizado está nesse <a href="https://github.com/RodolphoToppan/API-RPC">link</a>

### Como executar:

    - Clone o repositório de apoio "API-RPC"
    - Use o comando no terminal: "npm install"
    - Agora basta rodar o projeto com o comando: "npm start"
    
    - Agora para rodar a aplicação desenvolvida no desafio, clone esse repositório
    - Digite no terminal o comando "yarn install"
    - Digite no terminal novamente o comando "yarn start"
    - A página no browser deverá abrir automaticamente na porta "localhost:3000"
    - Caso não abra, basta digitar "localhost:3000" na barra de endereço do navegador que preferir


### Biliotecas utilizadas
#### React 18.0.0:
 -   Typescript
 -   Styled-components - estilização dos componentes e páginas
 -   Swiper - troca do dia da programação durante a semana (acabou não sendo utilizado)
 -   react-collapsed - abertura e fechamento de uma janela com mais detalhes da programação

#### Notas do desenvolvimento

Minha maior dificuldade nesse desafio foi consumir a API, fiquei alguns dias para tentar resolver o erro no CORS que apareceu, mas não consegui. Pedi ajuda a um amigo mais experiente e ele me instruiu a utilizar o repositório que encontrei no GitHub para coletar os dados da API e assim dar sequência no desenvolvimento da aplicação. 

Infelizmente esse erro acabou tomando muito tempo, o que deixou o projeto, ao meu ver, simples demais. O layout foi baseado no site: https://redeglobo.globo.com/rpc/programacao/. Das funcionalidades exigidas, consegui implementar a grade de programação do dia e um botão que abre uma janela mostrando mais detalhes do programa. Procurei deixar o layout o mais responsivo possível e utilizei o typescript também.
