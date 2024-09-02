import { routeHello, routeAPINames } from "./routes.js";
import express from "express";

const server = express();
const port = 3000;

server.get("/", function (req, res) {
    let body = "<h1>HOME PAGE</h1>";
    body += "<a href='/hello'>Hello.</a>";
    res.send(body);
});

server.get("/hello", function (req, res) {
    let body = "<h1>Hello World!</h1>";
    body += "<p>Greetings.</p>";
    body += "<p>Warmest regards.</p>";
    res.send(body);
});

server.listen(port, function () {
    console.log("Listening on " + port);
});