# Episode 02 - Igniting Our App

## Theory :

- #### What is `npm`?
npm is basically a huge repository where all the node related packages are there and npm helps us manage that.
npm is the world's largest software registry.
- #### What is `Parcel/Webpack`? Why do we need it?
Parcel/Webpack are bundlers which do a lot of cool stuff to our app which makes it super efficient. They bundle together files for Development or production.
- #### Why is `.parcel-cache`?
When we bundle our files through parcel it creates a cache which lets its makes the bundle faster the next time we build them.
- #### What is `npx`?
npx comes with npm, npm command helps us install the dependencies whereas npx lets us execute those dependencies locally.
- #### What is difference between `dependencies vs devDependencies`?
devDependencies are those dependencies which are used during the development of the app but not in production, the dependencies are the normal ones, which can be used during both development as well as production.
- #### What is Tree Shaking?
tree shaking is basically removing the files/functions that are not being used in the app, making the production build lighter and more efficient.
- #### What is Hot Module Replacement?
Hot module replacement or HMR for short is something which helps us to refresh the build with the new changes instantly, whenever we change something in files and saves it, the parcel creates a new build with the new changes.
- List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
- What is `.gitignore`? What should we add and not add into it?
- What is the difference between `package.json` and `package-lock.json` files?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that on git?
- What is the `dist` folder?
- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde`
- Read about Script types in html(MDN Docs)

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## References:

- [Parcel Documentation](https://parceljs.org/docs/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browserlists](https://browserslist.dev/)
