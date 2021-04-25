# Material UI Brochure Site

A website I've built for a local bathroom firm, constructed with create-react-app - featuring Google Maps API, Hooks, Router and custom styled components from the Materialize library.

## Lessons Learned

My first Material UI project, really enjoyed the process of learning to use a component library. Really enjoyed learning how to customise these default elements.

Had to learn a lot about how react-router works! BroswerRouter wasn't working, after a long StackOverflow dive I decided to switch to HashRouter and change all the hrefs of the links to adapt to the HashRouter routing.

## Potential Future Features

- A specialised enquiry form that helps Aqua Bathrooms get better information about a customer upfront, improving their service and helping the customers get some inspiration

- Making each entry in the Projects gallery a "CAD drawing vs final bathroom" section, with an expandable gallery of photos when you click on the project. Could also include some basic info on the bathroom furniture displayed so that customers can specifically ask for the furniture displayed?

- Adding an API key to the Google Maps section to remove the "dev only" overlay

## Deployment

Deployed with [github pages](https://pages.github.com/).

## Get started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/rgneville/material-ui-site

# Go into the repository
$ cd material-ui-site

# Remove current origin repository
$ git remote remove origin
```
Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
You should now have a development server running in your default browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.