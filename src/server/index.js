require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { User } = require("./models/userSchema");

const app = express();
//database connection
connect();
//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/api/users", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json({
      success: true,
      count: user.lengthen,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});
