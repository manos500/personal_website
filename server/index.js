const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "website_database",
});

app.post("/create", (req, res) => {
    console.log(req.body)
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Country = req.body.Country;
  const Email = req.body.Email;
  const Comments = req.body.Comments;

  db.query(
    "INSERT INTO contact_table (FirstName, LastName, Country, Email, Comments) VALUES (?,?,?,?,?)",
    [FirstName, LastName, Country, Email, Comments],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});




app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});