FROM node:24-alpine3.21

WORKDIR /app

COPY . .

RUN npm ci --only=production

COPY . .

CMD ["node", "/app/src/main.js"]