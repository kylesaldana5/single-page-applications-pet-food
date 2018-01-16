(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const getCatFoods = function getCatFoods() {
    var request = new XMLHttpRequest();
    request.open("GET", "catfood.json", true);

    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log('data', data.cat_brands);
            getBrands(data.cat_brands);


        }
    };
    request.send();
    function getBrands(dogArry) {
        dogArry.forEach(brand => {
            let displayInfo = document.getElementById("displayCatBrands");
            displayInfo.innerHTML += `<h3>${brand.name}</h3>`;

            brand.types.forEach(item => {
                let displayItems = document.getElementById("displayCatItems");
                displayItems.innerHTML += `<h3>${item.type}</h3>`;

                item.volumes.forEach(VP => {
                    let displayVolume = document.getElementById("displayCatVolume");
                    displayVolume.innerHTML += `<h3>${VP.name}<br>${VP.price}</h3>`;
                });
            });
        });
    }

};

module.exports = { getCatFoods };
},{}],2:[function(require,module,exports){
"use strict";


const getDogFoods = function getDogFoods() {
    var request = new XMLHttpRequest();
    request.open("GET", "dogfood.json", true);

    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log('data', data.dog_brands);
            getBrands(data.dog_brands);


        }
    };
    request.send();
    function getBrands(dogArry) {
        dogArry.forEach(brand => {
            let displayInfo = document.getElementById("displayBrands");
            displayInfo.innerHTML += `<h3>${brand.name}</h3>`;

            brand.types.forEach(item => {
                let displayItems = document.getElementById("displayItems");
                displayItems.innerHTML += `<h3>${item.type}</h3>`;

                item.volumes.forEach(VP => {
                    let displayVolume = document.getElementById("displayVolume");
                    displayVolume.innerHTML += `<h3>${VP.name}<br>${VP.price}</h3>`;
                });
            });
        });
    }

};

module.exports = {getDogFoods};
},{}],3:[function(require,module,exports){
"use strict";
const dog = require('./dog.js');
const cat = require('./cat.js');

dog.getDogFoods();
cat.getCatFoods(); 
},{"./cat.js":1,"./dog.js":2}]},{},[3]);
