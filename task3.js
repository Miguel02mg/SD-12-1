// Task 3: addUser(first_name, last_name, email)
const URL = "http://localhost:3000/users";

/**
 * Agrega un nuevo usuario
 */
async function addUser(firstName, lastName, email) {
    // Obtener usuarios actuales
    const response = await fetch(URL);
    const users = await response.json();
    // Obtener último ID
    const lastUser = users[users.length - 1];
    // Crear nuevo ID secuencial
    const newId = String(Number(lastUser.id) + 1);
    // Nuevo usuario
    const newUser = {
        id: newId,
        first_name: firstName,
        last_name: lastName,
        email: email
    };
    // POST
    const postResponse = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    const data = await postResponse.json();
    console.log(data);
}
export {
    addUser
};
