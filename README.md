# BACKEND - MEVN
## Description

Backend made of: 

- Node
- Express
- Mongo
- Mongoose

## Setup
Follow the next configurations to setup correctly
### Install Mongo on Docker container
```
docker pull mongo:5.0
docker run --name mongo-db -d -p 27017:27017 mongo
docker ps
```
To create the database and the collection execute the following:
```
npm run seed:import
```
