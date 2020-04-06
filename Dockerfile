FROM  node:13 
# versão do node e container principal para execução do app

WORKDIR /usr/src/app 
# diretório do projeto para executar o container principal

#RUN npm install nodemon -g 
# n sei ainda pq instalo isso no node mas é pro servidor não cair com facilidade

COPY package.json .
# copia os arquivos de dependencias da aplicação necessárias do node pro container

RUN npm install
# faz a mágica de instalar todas as dependências

COPY . .
# copia tudo q tiver no projeto pro container já q instalou tudo q precisa 

EXPOSE 3000
# porta da aplicação pra web/browser

CMD ["node", "src/index.js"]
# starta a aplicação