FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
# Commande de démarrage utilisant le fichier d'entrée avec Babel
# CMD ["node", "server.js"]