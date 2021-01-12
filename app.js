const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
// for public static file
app.use(express.static("public"));
//TODO
mongoose.connect("mongodb://localhost:27017/wikiDB" , {useNewUrlParser:true});
// create a schema
const articleSchema = {
  title:String ,
  content:String
};
//create a model
const Article = mongoose.model("Article" , articleSchema);
//////////////////////Request targetting all article

// chain route
//app.route("/articles").get().post().delete();
// single route that target articles
app.route("/articles")
// get method (Request)
.get(function (req ,res){
  Article.find(function(err , foundArticles){
  //  console.log(foundArticles);
  if(!err)
  {
    res.send(foundArticles);
  }
  else
  {
      res.send(error);
  }

  });
})
//post method
.post(function(req ,res){
  console.log(req.body.title);
  console.log(req.body.content);
// saving these data to objects
//creates new article
const newArticle = new Article ({
title: req.body.title,
content:req.body.content
});
//saving the new article
newArticle.save(function(err){
  if(!err)
  {
    res.send("Successfully Added a NEW Article.");
  } else
  {
    res.send(err);
  }
});
})
// delete method
.delete( function(req , res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Successfully deleted all articles");
    }
    else
    {
      res.send(err);
    }
  });
});

 // all methods ends
 //////////////////// requests Targetting specific article
 app.route("/articles/:articleTitle")
// GET METHOD
 .get(function(req , res){
   Article.findOne({title: req.params.articleTitle} , function(err , foundArticle){
     if(foundArticle){
       res.send(foundArticle);
     } else {
       res.send(" No Article matching that title was found.");
     }
   });
})
 // PUT method

 .put(function(req , res){
   Article.update(
  {title : req.params.articleTitle},
  {title: req.body.title , content: req.body.content},
  {overwrite: true},
  function(err){
    if(!err)

    {

      res.send("Successfully updated article .");
    }
  }
);
});

 //  PATCH REQUEST
 .patch (function(req , res)
{
  Article.update(
    {title:  req.params.articleTitle},
    {$set:req.body},

   function(err)
   {
     if(!err){
       res.send("Successfully updated article.")
     } else {
       res.send(err);
     }
   }
 );
})

.delete(function(req ,res){
  Article.deleteOne{
    {title: req.params.articleTitle},
    function(err){
      if(!err){
        res.send("Successfully deleted the corresponding Article...");
      } else {
        res.send(err);
      }
    }
  };
});








app.listen(3000, function() {
  console.log("Server started on port 3000");
});
