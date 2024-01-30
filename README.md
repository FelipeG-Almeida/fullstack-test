# Teste Full-Stack Artemis

Este é um projeto web desenvolvido utilizando Angular para o front-end e Java com Spring Boot para o backend. O banco de dados utilizado é o H2.

## Configuração e Execução

### Requisitos Prévios

- Node.js e npm: [https://nodejs.org/](https://nodejs.org/)
- Angular CLI: Instale usando `npm install -g @angular/cli`
- Java: [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)

### Configuração do Front-end

1. Navegue até o diretório `front-end`.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento do Angular.
4. Acesse `http://localhost:4200/` no navegador para visualizar o aplicativo.

### Configuração do Backend

1. Abra o projeto no ambiente de desenvolvimento (IDE) de sua escolha.
2. Certifique-se de que as dependências do Maven foram baixadas.
3. Execute a classe main `BackendApplication` para iniciar o servidor Spring Boot.
4. O servidor será iniciado em `http://localhost:8080/`.

### Configuração do Banco de Dados

- O H2 Console pode ser acessado em `http://localhost:8080/h2`. As configurações padrão do banco de dados são:
- url: jdbc:h2:mem:testdb
- username: sa
- password: password
