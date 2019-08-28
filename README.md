# Recipes
React App to search recipes

[![Version](https://img.shields.io/github/package-json/v/PetraSp/recipes/master?label=version)](https://github.com/PetraSp/recipes)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5a192675-f2a6-48d5-87c3-8f930d41eb60/deploy-status)](https://app.netlify.com/sites/recipes-petrasp/deploys)

### Live version
https://recipes-petrasp.netlify.com/

### Client localhost (http://localhost:3000)
Node/NPM required to install dependencies.

Clone repository
``` shell
git clone https://github.com/PetraSp/recipes.git
```

Install dependencies
``` shell
npm install
```

Start development
``` shell
npm start
```

Make Production Bundle
``` shell
npm run build
```

### Testing

* Unit & Snapshot tests done in Jest. 

``` shell
npm test
```

### Workflow

1) Dev/Prod environment setup.
2) Client-side routing with React Router.
3) Creation of first stateless components with tests.
4) Proptypes.
5) Creation of API services.
6) Creation of container components with tests.
7) Responsive check.
8) Refactoring.

### Notes

* ESLint, Prettier and AirnBnB styleguide for code linting and formatting.


## Refactoring / Improvements
* In a real project it would be useful to use Flow or Typescript to assure a proper type of variables.

* When there is no thumbnail put a placeholder

### Tech Stack
ReactJS, Router, Styled Components, Webpack4, Jest.
