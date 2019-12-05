var discountFactors = [
    {
        "group": "Normaalihinta",
        "discountFactor": 16.00
    },

    {
        "group": "Alle 7 vuotiaat",
        "discountFactor": 1.00
    },

    {
        "group": "7-15 Vuotiaat",
        "discountFactor": 0.50
    },

    {
        "group": "65-vuotiaat ja yli",
        "discountFactor": 0.50
    },

    {
        "group": "Mtk-jäsenet",
        "discountFactor": 0.15
    },

    {
        "group": "Varusmiehet",
        "discountFactor": 0.50
    },

    {
        "group": "Opiskelijat",
        "discountFactor": 0.45
    }
];

/* Globaalit muuttujat */
var age;
var mtkMember;
var militaryServicer;
var student;

/* Funktio laskee käyttäjälle lipun hinnan */
function calculateTicketPrice() {
    age = document.getElementById("customerAge").value;
    mtkMember = document.getElementById("mtkMember").checked;
    militaryServicer = document.getElementById("militaryServicer").checked;
    student = document.getElementById("student").checked;

    var discount = 0.00;

    var firstGroup = discountFactors[0].discountFactor;
    var secondGroup = discountFactors[1].discountFactor;
    var thirdGroup = discountFactors[2].discountFactor;
    var fourthGroup = discountFactors[3].discountFactor;
    var fifthGroup = discountFactors[4].discountFactor;
    var sixthGroup = discountFactors[5].discountFactor;
    var seventhGroup = discountFactors[6].discountFactor;
    var eighthGroup = fifthGroup + seventhGroup;

    if (age <= 7) {
        discount = secondGroup;
    }

    if (age >= 65) {
        discount = thirdGroup;
    }

    if (age >= 7 && age <= 15) {
        discount = fourthGroup;
    }

    if (mtkMember) {
        discount = fifthGroup;
    }

    if (militaryServicer && age >= 18) {
        discount = sixthGroup;
    }

    if (student) {
        discount = seventhGroup;
    }

    if (mtkMember && student) {
        discount = eighthGroup;
    }

    var totalPrice = firstGroup - (firstGroup * discount);

    /* Tulostaa lipun hinnan käyttäjälle. toFixed(2) pyöristää hinnan kahteen desimaaliin. */
    document.getElementById("printPrice").innerHTML = totalPrice.toFixed(2) + " €";
}

/* Käyttäjä pääsee näkemään, kuinka alennukset muodostuvat nappia painamalla. */
function showDiscounts() {
    var getDiscounts = document.getElementsByClassName("openDiscountDialog");
    var i;

    for (i = 0; i < getDiscounts.length; i++) {
        getDiscounts[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

/* Tulostaa käyttäjän syöttämät tiedot näkyviin. */
function saveCustomerInfo() {
    document.getElementById("printFirstName").innerHTML = document.getElementById('customerFirstName').value;
    document.getElementById("printLastName").innerHTML = document.getElementById('customerLastName').value;
    document.getElementById("printAge").innerHTML = document.getElementById('customerAge').value;

    if (mtkMember === true) {
        document.getElementById("printIfMTKMember").innerHTML = "Kyllä";
    } else {
        document.getElementById("printIfMTKMember").innerHTML = "Ei";
    }

    if (militaryServicer === true) {
        document.getElementById("printIfMilitaryServicer").innerHTML = "Kyllä";
    } else {
        document.getElementById("printIfMilitaryServicer").innerHTML = "Ei";
    }

    if (student === true) {
        document.getElementById("printIfStudent").innerHTML = "Kyllä";
    } else {
        document.getElementById("printIfStudent").innerHTML = "Ei";
    }
}

/* Jos käyttäjä on varusmies, muita alennuksia ei voi valita */
function disableStudentAndMTKCheckbox() {
    document.getElementById("mtkMember").disabled = true;
    document.getElementById("student").disabled = true;
}

/* Jos käyttäjä on opiskelija tai MTK:n jäsen, varusmiehen alennusta ei voi valita. */
function disableMilitaryServicerCheckbox() {
    document.getElementById("militaryServicer").disabled = true;
}
