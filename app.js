const $main = document.querySelector("main");
const url = "https://hp-api.onrender.com/api/characters";

fetch(url)
.then((respuesta) => {
    return respuesta.json();
})
.then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
        $main.innerHTML += `
        <div class="card">
            <div class="card_img">
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
            <div>
                <h3>${personaje.name}</h3>
                <p>Birthday: ${personaje.dateOfBirth}</p>
                <p>House: ${personaje.house}</p>
                <p>Gender: ${personaje.gender}</p>
            </div>
        </div>
        `;
    });    
});
