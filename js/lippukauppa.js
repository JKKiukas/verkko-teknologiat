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


function calculateTicketPrice() {
    var age = document.getElementById("customerAge").value;
    var mtkMember = document.getElementById("mtkMember").checked;
    var militaryServicer = document.getElementById("militaryServicer").checked;
    var student = document.getElementById("student").checked;

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

    if (militaryServicer) {
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
