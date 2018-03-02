//Slider

var leftArrow = document.querySelector(".main-slider-prev");
var rightArrow = document.querySelector(".main-slider-next");
var blackPicture = document.querySelector(".black");
var redPicture = document.querySelector(".red")

leftArrow.addEventListener("click", function () {
    if (blackPicture.classList.contains("active")) {
        blackPicture.classList.remove("active");
        redPicture.classList.add("active");
    } else if (redPicture.classList.contains("active")) {
        redPicture.classList.remove("active");
        blackPicture.classList.add("active");
    }
});

rightArrow.addEventListener("click", function () {
    if (blackPicture.classList.contains("active")) {
        blackPicture.classList.remove("active");
        redPicture.classList.add("active");
    } else if (redPicture.classList.contains("active")) {
        redPicture.classList.remove("active");
        blackPicture.classList.add("active");
    }
});


//Znikanie elementów

var infoBoxy = document.querySelectorAll(".info-box");

for (var i = 0; i < infoBoxy.length; i++) {

    infoBoxy[i].addEventListener("mouseover", function () {

        var textContainer = this.querySelector(".info-box-cnt");
        textContainer.style.display = "none";

    });

    infoBoxy[i].addEventListener("mouseout", function () {

        var textContainer = this.querySelector(".info-box-cnt");
        textContainer.style.display = "block";

    });


}


//KALKULATOR

//Zmienne sumy

var sumField = document.querySelector(".sumtotal").querySelector("strong");

var sumFieldTotal = 0;


// Wybór produktu


var arrows = document.querySelectorAll(".list_arrow");


for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        var ulList = this.nextSibling.nextSibling;
        if (ulList.style.display === "none") {
            ulList.style.display = "block";
        } else {
            ulList.style.display = "none";
        }
    });
}

// Pole podsumowania

var typeOfChair = document.querySelector(".panel_left");


//Wybór typu krzesła
var arrayOfChairsOptions = document.querySelector(".chairs").children;


for (var i = 0; i < arrayOfChairsOptions.length; i++) {
    arrayOfChairsOptions[i].addEventListener("click", function () {
        var chairtext = this.innerText;

        var chairName = document.querySelector(".chairName");
        chairName.innerText = chairtext;
        var chairPrice = this.dataset.chairPrice;
        var chairPriceNumbers = parseInt(chairPrice);
        sumFieldTotal += chairPriceNumbers;
        console.log(sumFieldTotal);
        document.querySelector(".chair-value").innerText = chairPriceNumbers;
        sumField.innerText = sumFieldTotal;
    });
}

//Wybór koloru

var arrayOfColorOptions = document.querySelector(".color").children;

for (var i = 0; i < arrayOfColorOptions.length; i++) {
    arrayOfColorOptions[i].addEventListener("click", function () {
        var chairColorText = this.innerText;

        var chairColor = document.querySelector(".chairColor");
        chairColor.innerText = chairColorText;
        var colorPrice = this.dataset.fabricColor;
        var colorPriceNumbers = parseInt(colorPrice);
        sumFieldTotal += colorPriceNumbers;


        document.querySelector(".color-value").innerText = colorPriceNumbers;
        sumField.innerText = sumFieldTotal;
    });
}


//Wybór materiału


var arrayOfFabricOptions = document.querySelector(".fabric").children;


for (var i = 0; i < arrayOfFabricOptions.length; i++) {
    arrayOfFabricOptions[i].addEventListener("click", function () {
        var chairFabricText = this.innerText;

        var chairFabric = document.querySelector(".chairFabric");
        chairFabric.innerText = chairFabricText;

        var fabricPrice = this.dataset.fabricPrice;

        var priceOfFabric = parseInt(fabricPrice);

        sumFieldTotal += priceOfFabric;

        var priceInTable = document.querySelector(".pattern-value");

        priceInTable.innerText = priceOfFabric;

        sumField.innerText = sumFieldTotal;
    });

}


//Transport

var transportBox = document.querySelector(".checkbox2").querySelector("input");
console.log(transportBox);

var transportId = transportBox.id;

var transportPrice = transportBox.dataset.transportPrice;


var transportText = document.querySelector(".transportText");
var transportValue = document.querySelector(".transport-value");


if (transportBox.checked === true) {
    transportText.innerText = transportId;
    var transportPriceNumbers = parseInt(transportPrice);
    sumFieldTotal += transportPriceNumbers;
    sumField.innerText = sumFieldTotal;
    transportValue.innerText = transportPriceNumbers;
}
;





