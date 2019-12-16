var todoURL = "http://localhost:8080/tasks";

$("#buttonInfo").click(function () {
    $.ajax({
        type: "GET",
        url: todoURL,
        dataType: "json",
        success: function (response) {
            $.each(response, function (index, value) {
                console.log(value.title);
                console.log(JSON.stringify(value));
                $("#toDoList").append("<br>" + value.title + " "
                    + "<button onclick='taskInfo(" + value.id + ")'>More info</button>" + "<br>");
            });
        },
    });
});

function taskInfo(index) {
    $('#list').empty();
    $.ajax({
        type: "GET",
        url: todoURL + '/' + index,
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('#list').append("<br>" + "Description:" + " " + response.description + "<Br>" + "Completed:" + " "
                + response.complete + "<Br>" + "Canceled:" + " " + response.canceled + "<Br>" + "Date:" + " " + response.date);
        },
    });
}
