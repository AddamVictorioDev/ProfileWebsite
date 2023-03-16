
const axios = require("axios");
const fs = require('fs');

const API_KEY = "AIzaSyDvi_QXXEQzvht-1uJXqFxCxdCOWpfwmH4";
const cx = 'f6af7e183df7e4704';
const word = 'Batman';

axios.get(`https://www.googleapis.com/customsearch/v1`, {
    params: {
        q: word,
    
        imgType: 'photo',
        searchType: 'image',
        key: API_KEY,
        cx: cx
    }
})
.then(response => {
    
    // data.items contains an array of image links
    const imageLinks = response.data.items.map(item => item.link);
    // do something with the image links
    console.log(imageLinks);
    // do something with the members list
    fs.writeFileSync('images.json', JSON.stringify([]), 'utf8')

fs.readFile('images.json', 'utf8', function(err, jsonString) {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
        // parse the JSON string into an object
        var jsonData = JSON.parse(jsonString)
    } catch (e) {
        console.log('Error parsing JSON string:', e)
    }

    // add new data to the object
    jsonData.push(imageLinks);

    // convert the object back to a JSON string
    jsonString = JSON.stringify(jsonData);

    // write the JSON string to the file
    fs.writeFile('images.json', jsonString, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.")
            return console.log(err);
        }
        console.log("JSON file has been updated.");
    });
})
    console.log(imageLinks);
})
.catch(error => {
    console.log(error);
})


