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
## Step 1
```
docker pull mongo:5.0
docker run --name mongo-db -d -p 27017:27017 mongo:5.0
docker ps
```
## Step 2
It is required to have the correct files with the data on /data directory

To create the database and the collection execute the following:
```
npm run seed:import
```
Once executed the command above, check on /data/seed.js all the models that you want to add or create to the database.

For example, in this case we only want to create the data structure for cuentasespejo model: 
```
await CuentasEspejo.insertMany(cuentasEspejo)
```
