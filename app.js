const express = require("express");
const database = require("./database");

const app = express();
const port = 3000;
const db = database;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.connect();

// localhost/tasks
// Can receive post requests to create a task
app.post("/tasks", (req, res) => {
  database.models.Task.create({
    title: req.body.title,
    deadline: req.body.deadline,
    done: req.body.done
  })
    .then(task => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(400);
      console.log("Save failed due to: ", err);
    });
});

app.get("/tasks", (_req, res) => {
  console.log("\n\ndatabase.models = ", database.models, "\n\n");
  // should equal an object containing models
  database.models.Task.findAll()
    .then(result => {
      console.log("Result! " + result);
      res.status(200).send(result);
    })
    .catch(err => {
      res.sendStatus(400);
      console.log("Failed to call data", err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
