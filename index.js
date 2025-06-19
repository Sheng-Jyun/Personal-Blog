import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];
let idCounter = 0;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {posts});
});

app.post("/submit", (req, res) => {
  const newPosts = {
    id: idCounter++,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };
  posts.push(newPosts);
  res.render("index.ejs", {posts});
}); 


app.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== id);
  res.render("index.ejs", { posts });
});

app.post("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContent = req.body.content;

  const post = posts.find((p) => p.id === id);
  if (post) {
    post.content = updatedContent;
  }

  res.sendStatus(200); 
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
