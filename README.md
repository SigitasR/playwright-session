# Playwright demo with file upload

Simple proof-of-concept tests to change Session.id profile picture and upload audio files

### Setup:

`npm install`

`npx playwright install`

### Running tests:

Register account on Session.id. In project root folder create `.env` file and place url and login data:

````dotenv
API=https://api.session.id
URL=https://app.session.id
EMAIL=<your session.id user email>
PASSWORD=<your session.id password>
````

`npx playwright test --headed --project='chromium'`

