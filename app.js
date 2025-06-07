const express = require('express');
const app = express();
const routes = require("./routes/web");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/styles", express.static(path.join(__dirname, "src")));

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))