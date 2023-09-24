const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const app = express();

// Mounting routes with middlewares and controllers
app.get("/", controllers.getTodoList)

app.post("/", middlewares.validateRequestBody, controllers.createTodoItem);

app.get("/work", controllers.getWorkList);

module.exports = app;