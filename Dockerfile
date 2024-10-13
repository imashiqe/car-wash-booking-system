FROM node:20

WORKDIR /app
# Create app directory

COPY . .

RUN npm install

EXPOSE 5000 

CMD ["npm", "run" , "start:dev"]