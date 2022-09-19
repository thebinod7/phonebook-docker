
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
## Run Locally

Clone the project

```bash
  git clone https://github.com/thebinod7/phonebook-docker.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
    add .env file inside my-project/server
    
    place:
    PORT=7000
    MONGO_URI=mongodb://mongo:27017/test_db
```

Start the server

```bash
  sudo docker compose up -d --build
```
