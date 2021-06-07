const express = require('express');

const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./src/routes/route")
const db = require("./src/db/config")

app.use("/user", routes)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  })
})
