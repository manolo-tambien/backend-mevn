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
docker pull mongo
docker run --name mongo-db -d -p 27017:27017 mongo
docker ps
```
Once the container is running create the database and the collection. Their names are in .env.local file
