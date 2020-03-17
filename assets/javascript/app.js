$(document).ready(function(){

    //create the array of games
    var topics = ["League of Legends", "Apex", "Overwatch", "Fortnite", "Halo Reach", "Far Cry 5", "Call of Duty", "Rocket League",
    "Borderlands", "Stardew Valley", "Animal Crossing", "Sims 4", "Minecraft", "Runescape", "Club Penguin", "Hearthstone"];

    //create root div to hold app components
    const app = document.getElementById('gifs');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);

    console.log(app)

        $(document).ready(function() {

        //loop through the topics array and assign a button to the container
        topics.forEach(topic =>{
            const setTopics = document.createElement('button');
            setTopics.setAttribute('type', 'button');
            setTopics.setAttribute('class', 'btn btn-info');
            setTopics.setAttribute('data-game', topic)
            setTopics.textContent = topic;

            container.appendChild(setTopics);

        })

    const gifs = document.createElement('div');
    gifs.setAttribute('id', 'list-gifs');

    container.appendChild(gifs);
   
        $("button").on("click", function(){
            $('#list-gifs').empty();
            var videoGame = $(this).attr("data-game");
            var qURL = "http://api.giphy.com/v1/gifs/search?q=" + videoGame + "&api_key=kz3EgsMqT33hUlh4lISAf8x4BdsetIqh&limit=10"

            $.ajax({
            url: qURL,
            method: "GET"
            }).then(function(response){

            var results = response.data;
                //populates the gifs once buttons are clicked on
                for(var i = 0; i < results.length; i++) {
                    // var gifDiv = $("<div>");
                    var rating = results[i].rating;

                    var h4 = $("<h4>").text("Gif Rating: " + rating);

                    var gameImg = $("<img>");

                    gameImg.attr("src", 
                    //images now made static with _still
                    results[i].images.fixed_height_still.url);
                    h4.append(gameImg);

                    $("#list-gifs").prepend(h4);
                }
            })
        })
    //changes the game.Img.attr("src". results[i].images.fixed_height_still.url) to animate
        //within the if statement is broken... I think the syntax at line 67 is correct and 68 is incorrect

        //was trying to change the attribute of the game image to run instead of still at line 68
            //tried $(this).html(gameImg.attr(results[i].images.fixed_height.url))
            //tried  $(this).html(gameImg.attr(animate()))

    function runGif() {
        if ($(this).attr("src") === "still") {
            $(this).html(gameImg.animate())
            console.log("animate")
        }
    }
    $(document).on("click", runGif);
    console.log(runGif)

    //create search and submit gif buttons
        // $("#submit").on("click", function(){
        //     $("#submit").empty();
        //     var input = $("#submit").val();
        //     var qURL = "http://api.giphy.com/v1/gifs/search?q=" + videoGame + "&api_key=kz3EgsMqT33hUlh4lISAf8x4BdsetIqh&limit=10"
        //     topics.push(input)
        //     console.log(input)
        // })
    //Gif buttons working, search and submit button is not
    //need to append

    });
})