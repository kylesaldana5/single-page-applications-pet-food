"use strict";


function getFoods() {
    var request = new XMLHttpRequest();
    request.open("GET", "dogfood.json", true)
    
    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log('data',data.dog_brands );
            getBrands(data.dog_brands)
            
            
        }
    }
    request.send()
    function getBrands(dogArry) {
        dogArry.forEach( brand => {
            let displayInfo = document.getElementById("displayBrands");
            displayInfo.innerHTML += `<h3>${brand.name}</h3>`;

            brand.types.forEach(item =>{
            let displayItems = document.getElementById("displayItems");
            displayItems.innerHTML += `<h3>${item.type}</h3>`    

            item.volumes.forEach(VP =>{
            let displayVolume = document.getElementById("displayVolume");
            displayVolume.innerHTML += `<h3>${VP.name}<br>${VP.price}</h3>`
            });
            });
        });
    };
   
};

getFoods()