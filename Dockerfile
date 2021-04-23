FROM node:12-alpine3.12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["npm", "run", "build"]

# docker run --rm  -v $(pwd)/dist:/usr/src/app/dist powerfitness-ma 