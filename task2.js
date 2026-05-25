// Task 2: listUsers()
// URL del endpoint users
const URL = "http://localhost:3000/users";
/**
 * Obtiene e imprime todos los usuarios
 */
async function listUsers() {

    // Hacemos petición GET al servidor
    const response = await fetch(URL);

    // Convertimos la respuesta a JSON
    const users = await response.json();

    // Imprimimos los usuarios en consola
    console.log(users);
}

// Exportamos la función
export {
    listUsers
};

