# Aplicação CRUD como trabalho da disciplina de engenharia de software.

## Ferramentas usadas
>
### * Mongo DB   
> *( banco de dados )*
### * Node.js 
> *( Ambiente de execução da aplicação )*
### * Docker + Compose 
> *( Abstração do banco de dados e a página gerenciadora)*


## Bibliotecas / Dependências do Node.js
> 
### * Express 
> *(comunicador entre a web com a aplicação escrita em javascript no ambiente Node.js)*
>
### * EJS 
> *(Permite a manipulação do documento web dentro da aplicação Node.js)*
>
### * Mongoose
> *(Realiza Comunicação com o banco de dados MongoDB com a aplicação Node.js)*
> 

## Execução do programa  
tenha instalado na sua máquina o ***Docker*** e o ***Docker Compose***.  E em sua linha de comando digite:

```
docker-compose build
docker-compose up
```
depois de dada a mensagem no terminal, que foi conectado ao banco de dados pelo Mongoose, abra o navegador e insira o endereço : `localhost:3000`
#### para parar a execução de `Ctrl + C` em seguida `docker-compose down`

## Composição da aplicação
esta aplicação está sendo feita pensando no padrão de arquitetura MVC.

> - [Visão](src/view/view.md)
> - [Controladora](src/routes/controler.md)
> - [Modelo](src/database/model.md)	



## Referencias do trabalho  
- [tutorial Web Dev Simple: MongoDB + Express + Node.js](https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5)