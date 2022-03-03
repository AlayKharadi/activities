//remove comment from  the index.html file

fetch('https://random-data-api.com/api/address/random_address')
    .then(response => {
        return response.json()
    })
    .then(data => {
        document.getElementById('main').innerHTML = JSON.stringify(data)
    })
    .catch(error => {
        document.getElementById('main').innerHTML = error
    });

//you can use headers, body, cache, referrer, credentials, redirect, intergrity
// fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=2&is_xml=true', {
//     method: 'GET',
//     mode: 'cors'
// })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         document.getElementById('main').innerHTML = JSON.stringify(data)
//     })
//     .catch(error => {
//         document.getElementById('main').innerHTML = error
//     });

// //you can use POST, DELETE and PUT method on a server according while adding appropriate data in body header of the options param
// fetch('https://random-data-api.com/api/omniauth/google_post', {
//     method: 'POST',
// })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         document.getElementById('main').innerHTML = JSON.stringify(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })