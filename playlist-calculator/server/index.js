require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const allowedOrigins = require("./config/allowedOrigins");

const link = require("./routes/api/link");

const root = require("./routes/root");
const PORT = process.env.PORT || 3000;

//cross origin resource sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded data
//in other words, form data:
//"content-type: application/x-ww-form-urlencoded"
app.use(express.urlencoded({ extended: false }));

//built-in middleware to handle json data
app.use(express.json());

//middleware for cookies
// app.use(cookieParser());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Make uploads folder public
// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes
app.use("/", root);

app.use("/link", link);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not Found" });
  } else {
    res.type("txt").send("404 not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
