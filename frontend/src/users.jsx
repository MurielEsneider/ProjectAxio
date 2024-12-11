import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); 
  const [editingUser, setEditingUser] = useState(null); // Usuario que se está editando
  const [newName, setNewName] = useState(""); // Nuevo nombre para edición

  // Cargar los usuarios desde el backend
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token
      const response = await axios.get("http://localhost:4000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      // Validación de la respuesta
      if (response.data && Array.isArray(response.data)) {
        setUsers(response.data); // Actualiza el estado con la lista de usuarios
      } else {
        setError("No se encontraron usuarios.");
      }
    } catch (error) {
      console.error("Error al cargar los usuarios:", error.message);
      setError(
        `Hubo un error al cargar los usuarios: ${
          error.response ? error.response.data.error : error.message
        }`
      );
    } finally {
      setLoading(false); 
    }
  };

  // Eliminar un usuario
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user._id !== id)); 
    } catch (error) {
      console.error("Error al eliminar usuario:", error.message);
      setError(
        `Hubo un error al eliminar el usuario: ${
          error.response ? error.response.data.error : error.message
        }`
      );
    }
  };

  // Edición de un usuario
  const startEdit = (user) => {
    setEditingUser(user);
    setNewName(user.nombre); //actualizar con nombre actual
  };

  // Guardar los cambios de edición
  const handleEdit = async () => {
    if (!editingUser) return;

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:4000/api/users/${editingUser._id}`,
        { nombre: newName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Actualizar el usuario en el estado
      setUsers(
        users.map((user) =>
          user._id === editingUser._id ? { ...user, nombre: newName } : user
        )
      );
      setEditingUser(null); // Cerrar el modal de edición
    } catch (error) {
      console.error("Error al editar usuario:", error.message);
      setError(
        `Hubo un error al editar el usuario: ${
          error.response ? error.response.data.error : error.message
        }`
      );
    }
  };

  // Cargar usuarios cuando el componente se monta
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Cargando usuarios...</p>;
  }

  return (
    <div className="relative overflow-x-auto rounded-sm bg-black">
      <div className="m-8 flex-column flex-wrap md:flex-row space-y-4 md:space-y-0  rounded-t-lg">
        <h2 className="text-2xl flex items-center justify-center font-semibold text-center  text-white">
          USUARIOS REGISTRADOS
        </h2>
      </div>

      {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

      <table className="w-full text-sm text-left rtl:text-right  text-white">
        <thead className="text-xs uppercase border-b border-t  border-white bg-gray-700 dark:bg-zinc-700">
          <tr>
            <th scope="col" className="px-6 py-3 text-white">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Correo
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Editar
            </th>
            <th scope="col" className="px-6 py-3 text-white">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user._id}
                className=" border-b  dark:hover:bg-zinc-900 transition-colors duration-200"
              >
                <td className="px-6 py-4">{user.nombre}</td>
                <td className="px-6 py-4">{user.correo}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => startEdit(user)}
                    className="relative px-4 py-2 font-semibold text-black bg-green-600 rounded-sm shadow-md group transition-transform duration-300 ease-in-out hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800"
                  >
                    Editar
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="relative px-4 py-2 font-semibold text-black bg-white rounded-sm shadow-md group transition-transform duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 hover:text-white"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No hay usuarios disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-4 rounded-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-white ">EDITAR USUARIO</h3>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border rounded p-2 w-full mb-4 text-black"
            />
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Guardar
            </button>
            <button
              onClick={() => setEditingUser(null)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
