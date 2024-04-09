FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN mkdir -p /usr/share/nginx/html/ && cp -r out/* /usr/share/nginx/html/

CMD ["npm", "start"]
