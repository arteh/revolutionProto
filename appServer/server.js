const express = require('express');
const path = require('path');
const PORT = 4000;

const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
  res.sendFile(path.normalize(`${__dirname}/../public/index.html`));
});

app.listen(PORT, function () {
  console.log('appServer listening on port ' + PORT);
});
