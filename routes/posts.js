require("./data.js");

module.exports = {
   getPosts(request, response) {
      let postID = request.query.id;
      if (postID) return response.status(200).send(blogposts[postID]);
      response.status(200).send(blogposts);
   },
   addPost(request, response) {
      model = {
         name: request.body.name,
         url: request.body.url,
         text: request.body.text,
         comments: [],
      };
      if (model.name && model.url && model.text) {
         blogposts.push(model);
         response.status(201).send("Added Successfully!");
      } else {
         response.sendStatus(406);
      }
   },
   updatePost(request, response) {
      postID = request.params.postID;
      model = {
         name: request.body.name || blogposts[postID].name,
         url: request.body.url || blogposts[postID].url,
         text: request.body.text || blogposts[postID].text,
      };
      if (model.name && model.url && model.text) {
         Object.assign(blogposts[postID], model);
         response.status(202).send("Updated");
      } else {
         response.sendStatus(406);
      }
   },
   deletePost(request, response) {
      postID = request.params.postID;
      blogposts.splice(postID, 1);
      response.sendStatus(200);
   },
};
