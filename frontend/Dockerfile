FROM node:18-alpine

# set direktori kerja
WORKDIR /app

# install depedensi
COPY package*.json ./
RUN npm install

# copy source code frontend
COPY . .

ENV CHOKIDAR_USEPOLLING=true

# expose port frontend
EXPOSE 3000

CMD ["npm","start"]
