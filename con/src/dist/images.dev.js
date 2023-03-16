"use strict";

function Images() {
  var axios = require("axios");

  var fs = require('fs');

  var API_KEY = "AIzaSyDvi_QXXEQzvht-1uJXqFxCxdCOWpfwmH4";
  var cx = 'f6af7e183df7e4704';
  var word = 'John Fetterman';
  axios.get("https://www.googleapis.com/customsearch/v1", {
    params: {
      q: word,
      imgType: 'photo',
      searchType: 'image',
      key: API_KEY,
      cx: cx
    }
  }).then(function (response) {
    // data.items contains an array of image links
    var imageLinks = response.data.items.map(function (item) {
      return item.link;
    }); // do something with the image links

    console.log(imageLinks); // do something with the members list

    fs.writeFileSync('images.json', JSON.stringify([]), 'utf8');
    fs.readFile('images.json', 'utf8', function (err, jsonString) {
      if (err) {
        console.log("File read failed:", err);
        return;
      }

      try {
        // parse the JSON string into an object
        var jsonData = JSON.parse(jsonString);
      } catch (e) {
        console.log('Error parsing JSON string:', e);
      } // add new data to the object


      jsonData.push(imageLinks); // convert the object back to a JSON string

      jsonString = JSON.stringify(jsonData); // write the JSON string to the file

      fs.writeFile('images.json', jsonString, 'utf8', function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }

        console.log("JSON file has been updated.");
      });
    });
    console.log(imageLinks);
  })["catch"](function (error) {
    console.log(error);
  });
}