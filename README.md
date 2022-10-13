## TrybSmith

Crie suas variaveis de ambiente antes de começar !

No diretrio raiz crie um arquivo com formato `.env` e ensira configurações como no exemplo abaixo.

```javascript
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_HOST=localhost
JWT_SECRET=secret
```

###  Suba os container!  :whale:
 
  No diretório raiz , execute comando para subir os containers.
 
 ` user@terminal$ docker-compose up -d `
 
 ⚠ Atenção ⚠ 
 Caso não tiver o [Docker](https://docs.docker.com/engine/install/) e [Compose]( https://docs.docker.com/compose/install/ ) instalado ! 
 
 <br/>
 
###  Após ao subir containers...
 
  `user@terminal$ docker exec -it trybesmith bash`
  
  Instale as dependências
  
  `user@terminal$ npm install`
  
  Inicialize 
  
  ` user@terminal$ npm start`
  
  <br/>
  
  Acessando as rotas
  
  - GET [/products](get-trybesmith17-48-14.png)
  - POST [/products](post-trybSmith16-59-17.png)
  - GET [/orders](https://github.com/Paul0-Henrique-Da-Silva/trybSmith/blob/main/get-order2022-10-07%2000-29-06.png)
  
  
