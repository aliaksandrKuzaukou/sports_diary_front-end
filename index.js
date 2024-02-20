const express = require('express');
const app = express();
const port = process.env.APP_PORT;

app.use(express.static('./'));

app.use('/static', express.static(__dirname + './'));
app.get('/', (req, res) => {
    console.log("reload page")
    res.sendFile(__dirname + "/index.html")
  });
  app.get("/getVariable", (req, res) => {
        res.send(`${process.env.PROXY_API}/api/activities`);
  });
  app.listen(port, () => {
    console.log("server start")
  });