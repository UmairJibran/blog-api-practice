//npm imports
const Express = require("express");
const Morgan = require("morgan");
const ErrorHandler = require("errorhandler");
const BodyParser = require("body-parser");
//own imports
const routes = require("./routes");

//instanciation
const port = process.env.PORT || 3000;
const app = Express();
//configuration

//middleware
app.use(Morgan("dev")); //using morgan middleware for dev environment
app.use(BodyParser.json()); //using bodyparser middleware for data handling
app.use(ErrorHandler()); //using errorhandler middleware for user friendly error messages

//routes
//POSTS
app.get("/posts", (req, res) => routes.posts.getPosts(req, res));
app.post("/posts", (req, res) => routes.posts.addPost(req, res));
app.put("/posts/:postID", (req, res) => routes.posts.updatePost(req, res));
app.delete("/posts/:postID", (req, res) => routes.posts.deletePost(req, res));
//error handling

//server boot
app.listen(port);
