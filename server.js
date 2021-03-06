const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  "/boxShooter",
  express.static(path.join(__dirname, "games", "boxShooter"))
);
app.use(
  "/rollerMadness",
  express.static(path.join(__dirname, "games", "rollerMadness"))
);
app.use(
  "/rollerMadnessOrigins",
  express.static(path.join(__dirname, "games", "rollerMadnessOrigins"))
);
app.use(
  "/spartyBros",
  express.static(path.join(__dirname, "games", "spartyBros"))
);
app.use(
  "/solarSystemSim",
  express.static(path.join(__dirname, "games", "solarSystemSim"))
);

app.use("/wake", (req, res) => {
  res.json({ message: "Fine, okay, I'm awake now..." });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
