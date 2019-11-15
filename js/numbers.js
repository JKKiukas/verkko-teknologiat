var numbersURL = "http://numbersapi.com/random/trivia";

$("#buttonInfo").click(function () {
    $.ajax({
        type: "GET",
        url: numbersURL,
        dataType: "text",
        success: function (response) {
            $("#buttonDiv").css("display", "block");
            $("#numberInfo").append("<br><br>" + "<i>" + response + "</i>");
        },
    });
});
