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
//*POSTS
app.get("/posts", routes.posts.getPosts);
app.post("/posts", routes.posts.addPost);
app.put("/posts/:postID", routes.posts.updatePost);
app.delete("/posts/:postID", routes.posts.deletePost);
//*COMMENTS
app.get("/posts/:postID/comments", routes.comments.getComments);
app.post("/posts/:postID/comments", routes.comments.addComment);
app.put("/posts/:postID/comments/:commentID", routes.comments.updateComment);
app.delete("/posts/:postID/comments/:commentID", routes.comments.deleteComment);

//error handling

//server boot
app.listen(port);
