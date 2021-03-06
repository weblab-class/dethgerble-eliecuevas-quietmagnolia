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
const Task = require("./models/task");
const Stats = require("./models/stats");

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
  User.findById( req.query.userId ).then((user) => {
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

router.get("/tasks", (req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks);
  });
});

router.post("/task", auth.ensureLoggedIn, (req, res) => {
  const newTask = new Task({
    googleid: req.body.googleid,
    task: req.body.task,
    date: req.body.date,
    complete: req.body.complete,
  });

  newTask.save().then((tasks) => res.send(tasks));
});

router.post("/updatetask", auth.ensureLoggedIn, (req, res) => {
  Task.updateOne({_id: req.body.objectId}, {complete: true})
});

router.get("/stats", (req, res) => {
  Task.find({ googleid: req.query.googleid }).then((stats) => {
    res.send(stats);
  });
});

router.post("/stats", auth.ensureLoggedIn, (req, res) => {
  const newStats = new Stats({
    googleid: req.body.googleid,
    daysonevolve: req.body.daysonevolve,
    longeststreak : req.body.longeststreak,
    currentstreak: req.body.currentstreak,
    taskscompleted: req.body.taskscompleted,
  });

  newStats.save().then((stats) => res.send(stats));
});

router.post("/updatetaskscompleted", auth.ensureLoggedIn, (req, res) => {
  Stats.updateOne({googleid: req.body.userGoogleId}, {taskscompleted: taskscompleted+1})
});



// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
