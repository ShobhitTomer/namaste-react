# Notes For Episode 2

#### The npx command

If we want to execute a package to do something then we write npx. It executes the packages locally.

#### Import statement

To use the import and export command we have to tell the browser that this is not a normal browser script and to do that we define a type to it and that is module type in script attribute.

#### Parcel

- Make the dev build
- Hosts it on local server
- Does HMR = Hot Module Replacement
- File watching algorithm - Written in C++
- Caching - Faster builds
- Image optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code spitting
- Differential bundling - supports older browsers
- Diagnostic
- Error handling
- Can give HTTPs
- Tree Shaking - Remove unused code
- Different development and production bundles

#### Read About Documentation

- `Webpack`
- `Parcel`
- `Vite`
- `React`

# Notes For Episode 3

### Notes

- To make our life easier we can make npm scripts which will let us run scripts so that we don't have to write a command again and again. We have to write our scripts in package.json

- to run the script we use `npm run {scritpt name}`, through this command we can run our script. We can also write `npm start` to do `npm run start` but this happens only with start as this is reserved by npm.

- The react element is a object and when we render it it becomes a DOM element.