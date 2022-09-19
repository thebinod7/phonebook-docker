
# MERN DOCKER

Dockerize Node, React and MongoDB with docker compose
## Environment Variables

To run this project, you will need to add the following environment variables to your express app


```
    CD to project-dir/server
    add .env file
    
    place:
    PORT=7000
    MONGO_URI=mongodb://mongo:27017/test_db

```
## Run Application

Run app with docker compose

*note: Make sure docker and docker compose is installed on your machine

Instructions

```
    - CD to project root
    - Run 'sudo docker compose up -d --build' without quote
```