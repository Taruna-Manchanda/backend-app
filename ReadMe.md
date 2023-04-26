docker build -t backend-app:01 .

docker run --name backend-app -p 4000:4000 --network=host -d backend-app:01