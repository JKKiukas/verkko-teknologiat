var numbersURL = "http://api.icndb.com/jokes/random";

$("#buttonInfo").click(function () {
    $.ajax({
        type: "GET",
        url: numbersURL,
        dataType: "json",
        success: function (response) {
            $("#jokeButton").css("display", "block");
            $("#joke").append("<br><br>" + "<i>" + response.value.joke + "</i>");
        },
    });
});
