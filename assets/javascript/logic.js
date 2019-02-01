// JavaScript & JQuery doc //

$(document).ready(function() {

// My Array of "Interesting" topics
var topics = ["eastbound and down", "silicon valley", "broken lizard", "workaholics", "tim and eric"];

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

// Function to add user's topic buttons 
$("#add-topic").on("click", function(event) {

// Prevents the button's natural function
event.preventDefault();

// Takes in the user's input and stores it in Variable "Topic"
var topic = $("#topic-input").val().trim();

// Adds users topic to my Array
topics.push(topic);
    
// Clears the form after user's topic is submitted to allow for more data entry - no backspacing needed
$("form").trigger("reset");

    if (topic !== "") {
        renderButtons();
    }

    else {
        alert("You NEED to use your WORDS if you wanna be a RIPPER");
    }
});
    renderButtons();

 // Event listener for all button elements
$(document).on("click", ".topic", function() {
// In this case, the "this" keyword refers to the button that was clicked
var topic = $(this).attr("data-name");

// Giphy URL and API for queries
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=Y3sxw8kSnw3e58WeHUYixdPhCumDZsUt&limit=10";
    
$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response) {
    
var results = response.data;

// // Looping over every result item
for (var j = 0; j < results.length; j++) {
    

if (results[j].rating) {
    
    // Dynamic Div
    var gifDiv = $("<div>");

    // Stores rating of gif
    var rating = results[j].rating;

    // CDynamic Para
    var p = $("<p>").text("Rating: " + rating);

    // Dynamic Image
    var topicImage = $("<img>");

    // Setting Attributes for IMG - will also help enable pausing
    topicImage.attr("src", results[j].images.fixed_height_still.url);
    topicImage.attr('data-still', results[j].images.fixed_height_still.url);
    topicImage.attr('data-state', 'still');
    topicImage.addClass('gif');
    topicImage.attr('data-animate', results[j].images.fixed_height.url);

        // Appends Gif & Rating
    
    gifDiv.append(topicImage);
    gifDiv.append(p);

    // Sends to gifs-appear-here Div (HTML not Dynamic)
    $("#gifs-appear-here").prepend(gifDiv);
  }
}

// function for Gifs pausing
$(document).on("click", ".gif", function(){
var state = $(this).attr("data-state");
    if ( state == "still"){
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        }
    else{
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
        };
      });
    });
  })
});

    

    





 
    
  