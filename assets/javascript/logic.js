// JavaScript & JQuery doc //

// My Array of "Interesting" topics
var topics = ["eastbound and down", "silicon valley", "broken lizard", "workaholics", "Always Sunny"];

// Function to capture data attribute 
function addTopic() {
$(this).attr("data-name");
}

// Function to create my topic buttons
function renderButtons() {

// Empties/deletes the original topics from Array to prevent duplicate buttons
$("#buttons-here").empty();

// Looping through the topics Array
for (var i = 0; i < topics.length; i++) {

// Creating my button tags
    var a = $("<button>");
// Adding a class of "topic"
    a.addClass("topic");
// Adding the data attribute for button
    a.attr("data-name", topics[i]);
// Adds the text to the button
    a.text(topics[i]);
// Appends the button(s) to the HTML in the "buttons-here" Div
    $("#buttons-here").append(a);
  }
}

// Function to add user's topic buttons and gifs
$("#add-topic").on("click", function(event) {

// Prevents the button's natural function
    event.preventDefault();

// Takes in the user's input and stores it in Variable "Topic"
    var topic = $("#topic-input").val().trim();

// Adds users topic to my Array
    topics.push(topic);

// Call to render buttons
    //renderButtons();

// Clears the form after user's topic is submitted to allow for more data entry - no backspacing needed
    $("form").trigger("reset");

    if (topic !== "") {
        renderButtons();
    }

    else {
        alert("You NEED to use your WORDS if you wanna be a RIPPER");
    }

});
    
$(document).on("click", ".topic", addTopic);

// Displays initial topic buttons
renderButtons();

// // Giphy URL and API for queries
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=Y3sxw8kSnw3e58WeHUYixdPhCumDZsUt&limit=10";
    
//     $.ajax({
//     url: queryURL,
//     method: "GET"
//     })
    
//     .then(function(response) {
        
//     var results = response.data;
    
    
    
//     // // Looping over every result item
//     for (var j = 0; j < results.length; j++) {
    
//         // Only taking action if the photo has an appropriate rating
//         if (results[i].rating) {
//           // Creating a div for the gif
//           var gifDiv = $("<div id='gifStyle'>");
    
//           // Storing the result item's rating
//           var rating = results[i].rating;
    
//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + rating);
    
//           // Creating an image tag
//           var topicImage = $("<img>");
    
//           // Giving the image tag an src attribute of a proprty pulled off the
//           // result item
//          topicImage.attr("src", results[i].images.fixed_height.url);
    
//           // Appending the paragraph and personImage we created to the "gifDiv" div we created
          
//           gifDiv.append(topicImage);
//           gifDiv.append(p);
    
//           // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//           $("#gifs-appear-here").prepend(gifDiv);
//         }
//         }
//         });
    
  