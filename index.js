const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const router = require("./src/routes/index");
var bodyParser = require("body-parser");

require("dotenv").config();

// Set up default mongoose connection
const db = mongoose.connection;
const port = process.env.PORT || "3002";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://ipsAdmin:ips12345@cluster0.uvscf1s.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection


// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.set("port", port);
app.use(cors());

//for CORS
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   req.header("Content-Type", "application/json");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());

app.use("/api", router);

app.listen(port,()=>{ console.log(`Server running at ${port}`);
})

// const httpServer = http.createServer(app);


// /**
//  * Listen on provided port, on all network interfaces.
//  */
// httpServer.listen(port);
// httpServer.on("error", onError);
// httpServer.on("listening", onListening);

// function onError(error) {
//   if (error.syscall !== "listen") throw error;

//   let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use of  Data");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */
// function onListening() {
//   let addr = httpServer.address();
//   const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
//   console.log(`Listening on ${bind}`);
// }
