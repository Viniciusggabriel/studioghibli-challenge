FROM node:lts-alpine
WORKDIR /APP
COPY viagem-chihiro/package*.json .
RUN npm install
COPY . .
EXPOSE 5173  
CMD [ "npm", "run", "dev" ]
