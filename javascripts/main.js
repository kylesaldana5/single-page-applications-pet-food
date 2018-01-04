"use strict";

let displayInfo = document.getElementById("displayInfo");

function getFoods(data) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        data = JSON.parse(this.Responsetext);
        let brand = data.brand;
    });
};
