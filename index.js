import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

function passwordCheck(req, res, next) {
  const username = req.body.username;
  const pass = req.body.pass; // Change variable name to pass
  if (username === "123456" && pass === "login") {
    userIsAuthorised = true;
  }
  next();
}

app.set("view engine", "ejs");
app.use(passwordCheck);
app.set();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/", (req, res) => {
  if (userIsAuthorised == true) {
  res.sendFile(path.join(__dirname, "superadmindashboard.html"));

    // res.send("<h1>Welcome User!</h1>");
  } else {
    res.sendFile(path.join(__dirname, "loginfailed.html"));

  }
});

app.listen(3000, () => {
  console.log('Your server is started..');
});