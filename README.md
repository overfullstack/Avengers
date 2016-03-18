# Avengers

It's a Jabber app, where one can send their fav Super hero dialogs and also troll them
This is at the utter most basic level, with many cool features upcoming. Will implement as I learn.


## Stack
- **Frameworks**: Relay, GraphQL
- **Server**: Express (running on localhost:3000)
- **Frontend**: React Js
- **Middleware**: GraphQl and Webpack-dev-middleware
- **Backend**: Mongo DB

## Feature list
- Isomorphic.
- React hot loading with Webpack-dev-middleware, set-up inside Express.
- Es6.
- favicon with webpack.

## Installation instructions
1. Clone the Repo
```
git clone https://github.com/gopalakshintala/Avengers.git Avengers
```
2. Install Dependencies
```
npm i
```
3. Start the Server
```
nodemon
```
4. Open ```localhost:3000``` in browser for app and ```localhost:3000/graphql``` for GraphiQl interface.


*How Cool is that!* ;)

## ToDo (Done are stroke-out)
- Clean up code (Recurring)
- <s>Make it Isomorphic</s>
- TDD with Jest and Supertest
- User authentication with Passport.js
- warning.js:44 Warning: writeRelayUpdatePayload() while pushing dialogs

## Feature Backlog
1. Marvel movie db representation.
2. Make it a Super hero app, with various channels for Avengers, Justice League and X-Men