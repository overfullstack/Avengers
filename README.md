# Avengers

It's a Jabber app, where one can send their fav Super hero dialogs and also troll them.
This is one of it's kind in terms of environments and frameworks used.
I was learning as well as referring many Githubs projects to understand best practices in those and use them here.
This is at the utter most basic level, and developed for learning purpose.
Please stay tuned and contribute your own learning into some cool features. Thanks :)

## Stack
- **Frameworks**: Relay, GraphQL
- **Server**: Express (running on localhost:3000)
- **Frontend**: React Js
- **Middleware**: GraphQl and Webpack-dev-middleware
- **Backend**: Mongo DB

## Feature list
- Isomorphic.
- GraphQl + Relay + Router all working together.
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
- Switch for switching between dev and prod environments
- TDD with Jest and Supertest
- User authentication with Passport.js
- Fix warning.js:44 Warning: writeRelayUpdatePayload() while pushing dialogs

## Feature Backlog
1. Marvel movie db representation.
2. Make it a Super hero app, with various channels for Avengers, Justice League and X-Men