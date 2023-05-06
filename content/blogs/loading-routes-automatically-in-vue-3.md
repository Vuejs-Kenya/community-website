---
title: Loading Routes Automatically

subtitle: Loading Routes Automatically

description: Learn how to Load Routes Automatically in Vuejs 3

alt: Loading Routes Automatically

excerpt: Loading Routes Automatically

imgurl: https://images.pexels.com/photos/7664355/pexels-photo-7664355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

tags: ["Vue 3", "routing"]

authorNames: ["John Philip"]

authorImages: ["https://avatars.githubusercontent.com/u/60175531?v=4"]

createdAt: 6/25/2021

attribution: Photo by Red Zeppelin from Pexels
---

In this article, we will learn how to automatically load routes in Vue 3.

We are going to set up a Vue 3 application from scratch and see how we can automatically load routes from a specific folder.

Pre-requisites

- Have Node.js installed
- @vue/cli

**Create a Vue 3 application**

We will need to create a new Vue project with Vue-CLI, so open your terminal and run the following commands

Npm

```js{1,3-5}[vue-scroll-indicator.js]
npm i -g @vue/cli
```

Yarn

```js{1,3-5}[vue-scroll-indicator.js]
yarn global add @vue/cli
```

To create a Vue 3 application on the defaults choose default Vue 3 preview.

The vue cli will prompt some question where you will have to use choose, you can choose vue-router to install the latest vue-router package in our application or we can just install it later during the process.

Vue cli will create for us our application with all the necessary packages inside the folder auto-routes
Configure automatic loading of routes

If you did not install the vue-router during application setup, run the command below to install the vue-router package.

Run the command

```js{1,3-5}[vue-scroll-indicator.js]
npm install vue-router@next
```

The command will install the latest vue-router package

Now let’s configure vue-router

Inside the src folder create a file with the name router.js
This is the file that will contain all the routing functionalities of our application

```js{1,3-5}[vue-scroll-indicator.js]
import { createWebHistory, createRouter } from ‘vue-router’;
const routes = [];
const requireRoutes = require.context(
‘./components’,
true,
/^(?!.*test).*\.vue$/is,
);
requireRoutes.keys().forEach((fileName) => {
routes.push({
…requireRoutes(fileName).default,
});
});
console.log(routes)
const router = createRouter({
history: createWebHistory(),
routes
// shorthand routes:routes
});
export default router;
```

From vue-router, we will import two important functionalities. createWebHistory and createRouter.
createRouter — creating our router
createWebHistory — set the routing mode to history.

Now we will create a routes const which will be an array that will be auto-filled with objects
We will have a variable called requireRoutes which will take in a webpack built-in functionality that will allow us to pass in a directory to search. We will then later use regex to search and return any file with the .vue extension inside the provided directory.

Search our files

```js{1,3-5}[vue-scroll-indicator.js]
const requireRoutes = require.context(
‘./components’,
true,
/^(?!.*test).*\.vue$/is,
);
```

the requireRoutes will be an object with the keys being the filename and the values being the ID of the file.

The regex code will search inside the components folder for any file with the .vue extension and omit only the test files.

To ensure that your components are automatically loaded create them inside the components folder or any folder of your choice.
Push routes automatically to the routes array

```js{1,3-5}[vue-scroll-indicator.js]
requireRoutes.keys().forEach((fileName) => {
routes.push({
…requireRoutes(fileName).default,
});
});
```

The code above will loop through the files and push them into the routes with their various properties.

To ensure that everything is working we can try and create some .vue files inside the components folder.

We can then console.log(routes)

In my case, you can see that all the routes are being automatically populated into the routes array automatically generated routes

To be noted:

- Ensure you provide a name to your component as shown below otherwise the route will be populated without the name.

```js{1,3-5}[vue-scroll-indicator.js]
<script>
export default {
 name: “Footer”,
 };
 </script>
```

Now any file with the .vue extension inside the components folder will be populated to a route.

**Conclusion**

Just to recap that we have seen:

Creating a vue application from scratch

- Setting routing from scratch
- Automatically loading of routes from a specific folder

Thank you for following through this far. I hope you have learnt a thing or two. If you find this article of help, please consider sharing it out.
