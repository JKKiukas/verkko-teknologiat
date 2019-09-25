function writeLines() {
    console.log("Eka rivi");
    alert("Eka ilmoitus");
    console.log(Date())
}

function inputLetter() {

    var userInput = document.getElementById("getLetter").value;

    if (userInput === "a" || userInput === "A") {
        console.log("Oikea vastaus");
    } else {
        console.log("Väärä vastaus");
    }
}

function inputNumber() {

    var userValue = document.getElementById("getNumber").value;

    if (userValue === "1" || userValue === "2" || userValue === "3" || userValue === "4" || userValue === "5"
        || userValue === "6" || userValue === "7" || userValue === "8" || userValue === "9" || userValue === "10") {
        console.log("Oikea vastaus.","Syöttämäsi luku kerrottuna kahdella on", userValue, "* 2 =", userValue * 2);
    } else {
        console.log("Väärä vastaus");
    }
}
