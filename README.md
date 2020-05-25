# Queue Emails - Múltiplas Filas

## Docker

>Para a criação do container, instale o **docker**
Após instalação rode o comando: 
```docker run --name redisBull -p 6379:6379 -d -t redis:alpine```

- O atributo **name** especifica o nome do container a ser gerado (*redisBull*);
- O atributo **-p** permite configurar a porta no Ubuntu (6379) em que acontecerá a comunicação com o MongoDB, a qual será mapeada para a porta default (6379) deste kKy-Value Store, dentro do container;
- Quanto ao atributo **-d**, este parâmetro fará com que o container em questão seja executado como um serviço em background;
- Temos indicada ainda a imagem utilizada como base para a geração do container (redis:alpine).
> Pode-se criar um volume utilizando o atributo **-v**.

## Tecnologias

- express;
- bull;
- redis;
- nodemailer;
- consign

## Consign
- O consign facilita o desenvolvimento de aplicativos com separação lógica de arquivos e carregamento automático de scripts.
  - Consign pode ser usado para carregar automaticamente modelos, rotas, esquemas, configurações, controladores, mapas de objetos, etc.
- > ``` consign().include('./src/config').then('./src/app/jobs').then('./src/app/lib').then('./src/app/models').then('./src/app/controllers').then('./src/routes.js').into(server); ```

  - Obs. Como o Redis roda em aplicação diferente do servidor para API, não recomenda-se atrelá-lo ao Consign, somente arquivos de projeto MVC.

## Startup
> ``` yarn dev ```


## Rotas

| URL                |  Método             | Operação                              |
| ------------------ | ------------------- | ------------------------------------- |
|  /users            |  POST               | Realiza o envio de email pelo usuário |

