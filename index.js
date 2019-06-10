'use strict';


function displayResults(jsonObj) {

    console.log(jsonObj);
}

function handleDogApp() {

    $('form').submit(e => {
        e.preventDefault();
        console.log("Number of dog pics requested is: " + $('#quantity').val());
        fetch(`https://dog.ceo/api/breeds/image/random/${$('#quantity').val()}`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
    })
}

$(handleDogApp);