/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// selecting the paragraph element and storing it into a variable.
const errorElement = document.getElementById("error");

//selecting the unordered list and storing it into a variable.
const listElement =document.getElementById("list");

//chaining a .then() method to handle successful resolution
 getList()
 .then(function(result) {
  listElement .innerHTML = "";
  //iterate through each hobbit in the result array
  result.forEach(function(hobbit) {
    // Create a new list item element
    const listItem =document.createElement("li");

    //setting the text content to the hobbits name
    listItem.textContent = hobbit;

    //Appending the list item to the unordered list
    listElement.appendChild(listItem);
  });
 })//chaining a catch method to handle rejection
 .catch(function(error) {  
  //displaying the error message in the error paragraph
  errorElement.textContent = error.message;
 })

 
