FROM node:alpine3.11

RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ .
EXPOSE 3000
ENV APP_PORT=3000

# Set the base url
ENV PROXY_API=http://sports-diary-backend:8080/

CMD [ "npm", "start" ]
