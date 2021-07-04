const fetch = require("node-fetch");

function Get() {
    fetch('http://www.raydelto.org/agenda.php').then(data => data.json()).then(data => {
        for (const userInfo of data) {
            console.log(`Nombre: ${userInfo.nombre} Apellido: ${userInfo.apellido} Telefono: ${userInfo.telefono}`)
        }
    })
}

Get()

// Yo soy duro

// function Post() {
        // Fill the nombre value with name you want to put do the same for the other values.
//     const newContact = {
//         nombre: 'Leuris',
//         apellido: 'Castillo',
//         telefono: '111-222-3333',
//     }

//     fetch('http://www.raydelto.org/agenda.php', {
//         method: 'POST',
//         body: JSON.stringify(newContact),
//         headers: {
//             "content-type": "text/plain"
//         }
//     }).then(res => res.json()).then(res => console.log(res))
// }

// Post()
