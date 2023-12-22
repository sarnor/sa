const path = require("path");
const express = require("express");
const fs = require("fs");

const radioUrls = require("./backend/rez.json");


const app = express();
app.get("/pers/", (req, res) => {
    res.send(radioUrls);
});
app.use(express.json());
app.use(
    express.static(path.join(__dirname, 'frontend'), {
        index: "none",
    })
);
app.get("/", (req, res) => {
    fs.readFile(
        path.resolve(__dirname, 'frontend', 'index.html'),
        "utf8",
        (err, html) => {
            if (err) {
                throw (err)
            } else {
                res.send(html)
            }
        }
    );
});

app.listen(80, () => console.log('Server Run'));