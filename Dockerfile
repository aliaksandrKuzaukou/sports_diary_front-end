FROM node:alpine3.11

RUN mkdir -p /app
WORKDIR /app
COPY sports_diary_front-end/package*.json ./
RUN npm install
COPY sports_diary_front-end/ .
EXPOSE $APP_PORT
ENV APP_PORT=$APP_PORT

# Set the base url
ENV PROXY_API=$PROXY_API

CMD [ "npm", "start" ]