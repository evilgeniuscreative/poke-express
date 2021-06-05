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
"Connected my database"
<hr>

### Create Controller
Now you will add controller and router to the existing pokemon app to make it MVC compliant.

- Create `controllers` folder to the app
- Add `pokemonController.js` to it
- Import and export the necessary files, folders and/or libraries

### Refactor `server.js`
- Refactor `server.js` and move all the APIs into the controller.
- Use Express middleware to call the router
- Remove all the APIs once above is done.

🔴 The commit message should read:
"Create pokemon controller and refactor server.js"



### Create the Routes

- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser.
- create another get route `/pokemon/:id` that will return only one pokemon on that index. For example, `/pokemon/0` should display the 0 indexed pokemon.
- create

<hr>
&#x1F534; The commit message should read: <br>
"Added GET APIs"
<hr>



<!--- Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.

- **Stretch step, not required** : Choose a google font and add it to your html and inside your `<style>` tag-->




### Set up your show route

- Inside your `pokemonController.js`, use already created get route `/pokemon/:index`
- Update the API such that it serves a template called `show.hbs` which displays the information of a specific pokemon according to their index in the pokemon array.
- You may want to look up how to access route parameters in express.

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 5 - show view shows pokemon details "
<hr>



### Complete CRUD functionality

Set up routes and templates to allow for full CRUD functionality.

- Users should be able to insert a new pokemon into the database using a form on a `new.hbs` page. Creation should be handled via a POST route to the `/pokemon` route.
- Users should be able to edit an individual pokemon on an `edit.hbs` page accessed from the `/pokemon/edit/:id` route. The updating should be handled via a PUT request to the `/pokemon/:id` route.
- Users should be able to delete a pokemon using a button provided on the show `/pokemon/:id` pages and should be handled via a DELETE route.

### Handlebars
Use the following link to effectively use Handlebars to render the Pokemon data:

[Handlebars Documentation](https://handlebarsjs.com/)






