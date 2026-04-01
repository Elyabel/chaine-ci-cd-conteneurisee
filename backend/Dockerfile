FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test || true

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app .
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "server.js"]