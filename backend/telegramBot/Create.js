const fs = require("fs");
const dbName = "handmade";
const AdmZip = require("adm-zip");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});


function getDocuments(db, callback) {
  const query = {}; // this is your query criteria
  db.collection("tours")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      callback(result);
    });
};
function Create() {
    let date = new Date()
  client.connect((err) => {
    //assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    getDocuments(db, function (docs) {
      console.log("Closing connection.");
      client.close();

      // Write to file
      try {
        fs.writeFileSync(
          `${__dirname}/../../exports/${date.getDate()}${date.getMonth()}${date.getFullYear()}.json`,
          JSON.stringify(docs)
        );
        console.log("Done writing to file.");
      } catch (err) {
        console.log("Error writing to file", err);
      }
    });
  });
}
async function createZipArchiveTour() {
  const zip = new AdmZip();
  let date = new Date();
  const outputFile = `images-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`;
  zip.addLocalFolder("../../public/images/tours");
  zip.writeZip(`../../exports/${outputFile}`);
  console.log(`Created ${outputFile} successfully`);
}

async function createZipArchiveBlog() {
  const zip = new AdmZip();
  let date = new Date();
  const outputFile = `blogs-${date.getDate()}${date.getMonth()}${date.getFullYear()}.zip`;
  zip.addLocalFolder("../../public/images/blogs");
  zip.writeZip(`../../exports/${outputFile}`);
  console.log(`Created ${outputFile} successfully`);
}

module.exports = { Create, createZipArchiveBlog, createZipArchiveTour };
