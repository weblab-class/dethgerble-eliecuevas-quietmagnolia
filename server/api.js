/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Farm = require("./models/farm");
const Todo = require("./models/todo");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.get("/user", (req, res) => {
  User.find({ googleid: req.query.parent }).then((user) => {
    res.send(user);
  });
});

router.get("/farm", (req, res) => {
  Farm.find({ googleid: req.query.googleid }).then((farm) => {
    res.send(farm);
  });
});

router.post("/farm", auth.ensureLoggedIn, (req, res) => {
  const newFarm = new Farm({
    googleid: req.body.googleid,
    farm: req.body.farm,
  });

  newFarm.save().then((farm) => res.send(farm));
});

router.get("/todo", (req, res) => {
  Todo.find({ googleid: req.query.googleid }).then((todo) => {
    res.send(todo);
  });
});

router.post("/todo", auth.ensureLoggedIn, (req, res) => {
  const newTodo = new Todo({
    googleid: req.body.googleid,
    todo: req.body.todo,
  });

  newTodo.save().then((todo) => res.send(todo));
});


// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
