//listens to any button clicked
$("button").on("click", function() {
    //specifies which button tht was clicked
    var movie = $(this).attr("data-movie");
    //searches via URL for the moivie gif that was added to the page
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "tpyfQ96kkjx3avvQ3PpQn1l7KklEceKd";

    //request to retrieve data from the server
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    //link up the search text box from .html to .js
    //create function that manipulates the .html by adding a new button with searched movie written on it
    //have those buttons retrieve corresponding movie gifs from the API

    //What do do with the data found in the API
    .then(function(dataReturn){
        //create a variable that stores the array of results found from the API
        var dataFound = dataReturn.data;
        //a loop needs to be created to run through all the data returned, through a created specified list of constraints
        for (var i = 0; dataFound.length; i++) {
            if (dataFound[i]) {

                //create more variables to organize/store the data
                //append the gifs to the created divs in .js
                //prepend the divs (that now contain the gifs) to the #gifs on the .html document
            }
        }

    });
});