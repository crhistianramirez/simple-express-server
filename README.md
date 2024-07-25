# Overview
This project quickly spins up a simple express server for testing webhooks and integration events locally.

# Prerequisites
- [NodeJS LTS](https://nodejs.org/en)
- [Postman](https://www.postman.com/downloads/)

# Quick start
1. Run `npm install`
2. Run `npm run start`
3. Open Postman, and make an API request to POST `http://localhost:4451/test`. If everything is configured correctly you should see a success and a JSON body `{ message: 'JSON received and parsed!' })`
