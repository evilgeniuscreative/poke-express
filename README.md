![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# POKE EXPRESS

Make a Pokemon app that displays data inside server-side rendered views.

## App

Create a full CRUD app on Pokemon.


## Day 1

### Set up your server

- Create an express app called `pokemon-app` that listens on port 3000. Ensure that you have installed the necessary npm packages to run an express server and render templates. You can refer back to old code and lessons, but try to recall the necessary steps before checking in old code. Be ok with making mistakes!

- Create a file called `server.js`
- Inside of this file,
	- Import express library
	- Run the app on port `3000`

<hr>
 &#x1F534; The commit message should read: <br>
 "Commit 1 - My server is set up and running"
<hr>
	
### Set up your _'database'_

- Create a schema model correlating to the Pokemon objects below.
- When creating a schema for Pokemon, think about validations. What do you want to be required? (The URL? The name?).
- Build an HTTP API in Express that serves JSON data from a Mongo DB

Focus on being able to have a RESTful API. Use Postman to be able to Create, Read, Update and Delete your Pokemon!

### Seed your Database

Create a 'pokemon.json' and 'pokemon.js' file inside the db directory.

```json
[
  {
    "name": "Bulbasaur",
    "img": "http://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    "name": "Ivysaur",
    "img": "http://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    "name": "Venusaur",
    "img": "http://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    "name": "Charmander",
    "img": "http://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    "name": "Charizard",
    "img": "http://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    "name": "Squirtle",
    "img": "http://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    "name": "Wartortle",
    "img": "http://img.pokemondb.net/artwork/wartortle.jpg"
  }
];
```


<!--- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`-->

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Connected my database"
<hr>

### Create GET Routes

- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser.
- create another get route `/pokemon/:index` that will return only one pokemon on that index. For example, `/pokemon/0` should display the 0 indexed pokemon.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - added GET APIs"
<hr>

## Day 2

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve an `index.ejs` file that displays a list of all the pokemon. Put the pokemon inside a `<ul>` with class name `pokemon`. Use a `for` loop to display all pokemon.

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 4 - index.ejs view rendered at pokemon route"
<hr>

<!--- Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.

- **Stretch step, not required** : Choose a google font and add it to your html and inside your `<style>` tag-->


### Set up your show route

- Inside your `server.js`, use already created get route `/pokemon/:index`
- Update the API such that it serves a template called `show.ejs` which displays the information of a specific pokemon according to their index in the pokemon array.
- You may want to look up how to access route parameters in express.

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 5 - show view shows pokemon details "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
 - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
 - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 6 - added dynamic anchor tags to index.ejs "
<hr>


### Complete CRUD functionality

Set up routes and templates to allow for full CRUD functionality.

- Users should be able to insert a new pokemon into the array using a form on a `new.ejs` page. Creation should be handled via a POST route to the `/pokemon` route.
- Users should be able to edit an individual pokemon on an `edit.ejs` page accessed from the  `/pokemon/:index/edit` route. The updating should be handled via a POST request to the `/pokemon/:index` route.
- Users should be able to delete a pokemon using a button provided on the show and index pages.


## Day 3

Today you will add controller and router to the existing pokemon app to make it MVC compliant.

### Create Controller

- Create `controllers` folder to the app
- Add `pokemonController.js` to it
- Import and export the necessary files, folders and/or libraries

### Refactor `server.js`
- Refactor `server.js` and move all the APIs into the controller.
- Use Express middleware to call the router
- Remove all the APIs once above is done.

🔴 The commit message should read:
"Create pokemon controller and refactor server.js"


