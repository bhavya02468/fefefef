const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('D:/Hackathon/Frontend/datafile.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    exports.results=results;
    // You can work with your CSV data here
  });
