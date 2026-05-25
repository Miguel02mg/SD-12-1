// Task 4: delUser(number)
// URL del endpoint users
const URL = "http://localhost:3000/users";

/**
 * Elimina un usuario por ID
 */
async function delUser(id) {
    // Petición DELETE al usuario específico
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
    // Mensaje en consola
    console.log(`Usuario con ID ${id} eliminado`);
}
// Exportamos la función
export {
    delUser
};