Simply run the following command to start the api and mongodb container
 - docker-compose build
 - docker-compose up

Run the tests: In your original terminal window
 - npm test




docker build -t library_app .
docker run --publish 3000:3000 library_app