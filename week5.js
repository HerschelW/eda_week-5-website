console.log("js");
var collection = [];

function addToCollection(title, artist, year) {
   collection.push({ Title: title, Artist: artist, Year: year });
   return { Title: title, Artist: artist, Year: year };
}

function findRecord(title) {
   for (let i in collection) {
      if (collection[i].Title == title) {
         return i;
      }
   }
   return false;
}

// Psuedocode time!
// allBy(Artist) function.
function allBy(artist) {
   // Create new array according to Artist name. Let var keeps array within scope of function.
   let artistArr = [];
   // Search all elements of collection array for matching artist name.
   collection.forEach((element) => {
      // If Artist name of object matches given artist name, Push object into Artist array.
      if (element.Artist == artist) {
         artistArr.push(element);
      }
   });
   // If no records are found, return "No matching records."
   if (artistArr.length < 1) {
      return "No matching records.";
   } else {
      return artistArr;
   }
}

// search(criteria) function.
function search(criteria) {
   // Create new array to take objects matching search criteria.
   let criteriaArr = [];
   // Loop through each element.
   collection.forEach((element) => {
      // Check if Title, Artist, or Year match criteria.
      // If any of them match, push to new array.
      if (element.Title == criteria) {
         criteriaArr.push(element);
      } else if (element.Artist == criteria) {
         criteriaArr.push(element);
      } else if (element.Year == criteria) {
         criteriaArr.push(element);
      }
   });
   // If nothing matches, return "No Matches Found".
   if (criteriaArr.length < 1) {
      return "No matches found";
   } else {
      return criteriaArr;
   }
}

addToCollection("Thriller", "Michael Jackson", "1982");
addToCollection("Back in Black", "AC/DC", "1980");
addToCollection("Bat Out of Hell", "Meat Loaf", "1977");
addToCollection("The Dark Side of the Moon", "Pink Floyd", "1973");
addToCollection("The Bodyguard", "Whitney Houston", "1992");
addToCollection("Greatest Hits", "The Eagles", "1976");
addToCollection("Satuday Night Fever", "The Bee Gees", "1977");
addToCollection("Bad", "Michael Jackson", "1987");
addToCollection("Hotel California", "The Eagles", "1976");

document
   .getElementById("myBtn")
   .addEventListener("click", function addToCollection2() {
      let albumName = document.getElementById("albumName").value;
      let artistName = document.getElementById("artistName").value;
      let albumYear = document.getElementById("albumYear").value;
      collection.push({ Name: albumName, Artist: artistName, Year: albumYear });
      console.log(collection);
   });
