FROM node:alpine3.11

RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ .
EXPOSE 80
ENV APP_PORT=80

# Set the base url
ENV PROXY_API=http://sports-diary-backend:80/

CMD [ "npm", "start" ]
