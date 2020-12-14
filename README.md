# Adopt-a-Pet Front-end Challenge

Adopt-A-Pet Front-end Challenge to get pet data from the API and display it responsively.

## Getting Started

First things first, installing the packages:

```console
npm install
```

## Running the Webpack Server locally

The following NPM script has been configured in the package.json file.

```json
"scripts": {
  "start": "webpack serve --config webpack.dev.js"
}
```

To run the script, just type in the console:

```console
npm start
```

The site should open automatically in the browser at http://localhost:3000/

## Building the production bundle with Webpack

The following NPM script has been configured in the package.json file.

```json
"scripts": {
  "build": "webpack --config webpack.prod.js"
}
```

To run the script, just type in the console:

```console
npm run build
```

## Roadmap:

- Get the user's geo location.
- Load all of the pets using a pager with a callback function or lazy loading approach.
- Load more > link goes to a individual pet's profile page.
- Concise error handling w/ UI implementation for bad/failed API requests.
- Clean up async error from individual pet API call causing card height functions to not work properly and throwing errors in the browser.
- Fix filter placement on grid.
- Clean up mobile styles, not working well on mobile.
- Clean up component JS.
