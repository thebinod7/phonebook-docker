
# MERN DOCKER

Dockerize Node, React and MongoDB with docker compose

*note: Docker and docker compose must be installed on your machine
## Run Locally

Clone the project

```bash
  git clone https://github.com/thebinod7/phonebook-docker.git
```

Go to the project directory

```bash
  cd my-project
```

Add dependencies

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
