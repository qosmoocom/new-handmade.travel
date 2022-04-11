const fs = require("fs");

const globalItems = async (req, res) => {
  fs.readFile("styles/globals.css", function (err, data) {
    res.write(data);
    return res.end();
  });
};

module.exports = { globalItems };
