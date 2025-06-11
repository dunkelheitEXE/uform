const express = require('express');
const app = express();
const routes = require("./routes/web");
const path = require("path");
const layout = require("express-ejs-layouts");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(layout);
app.use(express.urlencoded({extended: true}));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/styles", express.static(path.join(__dirname, "src")));

app.use("/", routes);

// app.use(session({}));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))