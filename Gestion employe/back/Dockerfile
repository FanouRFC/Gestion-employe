FROM node:24-alpine
WORKDIR ./app/back
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm", "run", "start"]