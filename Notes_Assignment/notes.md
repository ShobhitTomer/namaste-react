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
- `Babel`

# Notes For Episode 3

### Notes

- To make our life easier we can make npm scripts which will let us run scripts so that we don't have to write a command again and again. We have to write our scripts in package.json

- to run the script we use `npm run {scritpt name}`, through this command we can run our script. We can also write `npm start` to do `npm run start` but this happens only with start as this is reserved by npm.

- The react element is a object and when we render it it becomes a DOM element. The core of react elements is created using createElement but it is not very developer friendly! to counter this the engineers at facebook made `JSX`.

- JSX is not a part of React, we can build react applications without jsx also but JSX makes our life easier. `JSX is not html in Javascript`, JSX is a HTML-like or XML-like syntax

#### Whenever we write code we first write it for humans and then machine, So make it such that!

- Our browsers do not understand the JSX code so how does it render the code? The JSX code is transpiled before it reaches the JS engine - The code is being transpiled(Compiled) by Babel - Managed by Parcel.

- First JSX is converted to react element by Babel and then the react element is rendered to a HTML element.

- If we have to give attributes to our element then we will have to use camelCase. If we are writing in multiple lines then we will have to wrap it in parenthesis.

#### React Component

- Everything in react is a component! There are two types of components in react 1. Class based components and 2. Functional components. Class based component is the old way of writing code - uses javascript classes and Functional component is new way of writing code - uses javascript functions to create components.

- A React Functional Component is a javascript function which returns JSX. We can also say that its a javascript function which returns a react element. The first letter of name of the component should always be capital. To render a component we need to wrap it in angular brackets like `<HeadingComponent/>`. We can also use normal functions to do the same thing but the arrow functions are now a industry standard.

- When we put a component inside a component it is called component composition and can be achieved by how we render a component. When we are writing JSX we can write any piece of javascript code inside by using `{} Curly Braces`.

- JSX automatically sanitizes the code that is run inside the curly braces preventing XSS(Cross site scripting attacks).