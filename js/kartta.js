function searchPlace() {
    var address = document.getElementById("getAddress").value;
    var city = document.getElementById("getCity").value;

    console.log(address);
    console.log(city);

    document.getElementById("showPlace").src = address.url;
    document.getElementById("showPlace").src = city.url;
    var src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';

    document.getElementById("kartta").src = src;
}

window.onload = function () {
    var src = 'https://www.google.com/maps?q=Yliopistonkatu34+Lappeenranta&output=embed';
    document.getElementById("kartta").src = src;
}
