FROM node:18-alpine

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy source code
COPY . .

# expose port backend
EXPOSE 3002


CMD ["npm", "start"]
