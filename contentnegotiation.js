import fetch from "node-fetch";
var query = 'https://swapi.dev/api/people';

    fetch(query, {
        method: 'GET',
        headers: {
            'content-type': 'application/xml',
            'accept': 'application/json',
            'user-agent': '*'
        },
    })
    .then(function(response){
        console.log(`response = ${response}`);
        return response.text();
    })
    .then(function(xml){
        console.log(`Json = ${xml}`);
    })
    .catch((error) =>{
        console.error('Error:', error);
    });