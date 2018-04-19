FROM node:9
COPY . .
RUN [ "npm", "update" ]
CMD [ "npm", "start" ]