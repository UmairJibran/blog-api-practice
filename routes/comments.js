require("./data.js");

module.exports = {
   getComments(request, response) {
      postID = request.params.postID;
      if (blogposts[postID] && blogposts[postID].comments != undefined)
         return response.status(200).send(blogposts[postID].comments);
      response.sendStatus(404);
   },
   addComment(request, response) {
      let postID = request.params.postID;
      if (blogposts[postID]) {
         comment = request.body.comment;
         blogposts[postID].comments.push(comment);
         response.sendStatus(201);
      } else response.sendStatus(404);
   },
   updateComment(request, response) {
      let postID = request.params.postID;
      let commentID = request.params.commentID;
      if (blogposts[postID] && blogposts[postID].comments[commentID]) {
         comment = request.body.comment;
         blogposts[postID].comments[commentID] = comment;
         response.sendStatus(202);
      } else {
         response.sendStatus(404);
      }
   },
   deleteComment(request, response) {
      let postID = request.params.postID;
      let commentID = request.params.commentID;
      if (blogposts[postID] && blogposts[postID].comments[commentID]) {
         blogposts[postID].comments.splice(commentID, 1);
         response.sendStatus(202);
      } else {
         response.sendStatus(404);
      }
   },
};
