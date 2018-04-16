FROM node:9
EXPOSE 1234
COPY . .
RUN [ "npm", "update" ]
CMD [ "npm", "start" ]