# RESTful-API
## Design and Build a RESTful-API from Scratch of Wikipedia's Article
## Description


***This project is build from scratch to understand 
the working principle of REST-API***

# Table of Contents


- Tech Stack
- Installation
- Database
- How It Works
- Usage 

# Tech Stack
- Node.js
- Express.js
- MongoDB
- Postman
- Node Module

# Installation

```
Express.js   version-4.17.1
Node v15.
Mongoose Version 4.13.20
ejs version 3.1.5*
Postman API Development Tool
```

# Database

```
{
    "_id" : "5c18e1892998bdb3b3d355bf",
    "title" : "HTML",
    "content" : "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browse."
}


{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "CSS",
    "content" : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "sql",
    "content" : "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system"
    
}


{
    "_id" : "5c18f35cde40ab6cc551cd60",
    "title" : "XML",
    "content" : "Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
    "__v" : 0
}
```

# connection code
```
mongoose.connect("mongodb://localhost:27017/wikiDB" , {useNewUrlParser:true});
// create a schema
const articleSchema = {
  title:String ,
  content:String
};
//create a model
const Article = mongoose.model("Article" , articleSchema);


```












 





