import React, { useState } from 'react';

function App() {
  const [selectedMode, setSelectedMode] = useState("0");
  const [consultedUser, setConsultedUser] = useState();
  const [idUser, setIdUser] = useState();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const addUser = (e) => {

    fetch('http://localhost:8080/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Cliente creado con éxito.");
        } else {
          console.error("Error al crear el cliente.");
        }
      })
      .catch((error) => {
        console.error("Error al conectarse al servidor:", error);
      });

    setUserData({
      firstName: '',
      lastName: '',
      email: '',
    });
  };

  const updateUser = (e) => {

    fetch('http://localhost:8080/api/v1/users/' + idUser, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Cliente modificado con éxito.");
        } else {
          console.error("Error al modificado el cliente.");
        }
      })
      .catch((error) => {
        console.error("Error al conectarse al servidor:", error);
      });
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
    });
    setIdUser('');
  };

  const removeUser = (e) => {

    fetch('http://localhost:8080/api/v1/users/' + idUser, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Cliente eliminado con éxito.");
        } else {
          console.error("Error al eliminar el cliente.");
        }
      })
      .catch((error) => {
        console.error("Error al conectarse al servidor:", error);
      });

    setIdUser('');
  };

  const getUser = (e) => {

    fetch('http://localhost:8080/api/v1/users/' + idUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error al consultar el cliente.");
      })
      .then((data) => {
        setConsultedUser(data);
        console.log("Cliente consultado con éxito:", data);
      })
      .catch((error) => {
        console.error("Error al conectarse al servidor:", error);
      });

    setIdUser('');
  };

  return (
    <div className="mt-[10rem] mx-[8rem]  h-screen">

      <div className='flex justify-center items-center'>
        <h1 className='mr-5'>Opciones de Usuario: </h1>
        <select
          className='p-2'
          onChange={(e) => setSelectedMode(e.target.value)}>
          <option
            value={'0'}
          >
            Agregar
          </option>
          <option
            value={'1'}>
            Eliminar
          </option>
          <option
            value={'2'}>
            Modificar
          </option>
          <option
            value={'3'}>
            Consultar
          </option>
        </select>
      </div>

      <div className='flex justify-center items-center '>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-lg font-semibold mb-4">{selectedMode === "0" ? 'Agregar ' : selectedMode === "1" ? 'Eliminar ' : 'Modificar '}Usuario </h1>
          {(selectedMode === "0" || selectedMode === "2") && (
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                Nombre:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          )}

          {(selectedMode === "0" || selectedMode === "2") && (
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Apellido:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          )}

          {(selectedMode === "0" || selectedMode === "2") && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          )}

          {(selectedMode === "1" ||  selectedMode === "2" || selectedMode === "3") && (
            <div className="mb-4">
              <label htmlFor="id" className="block text-sm font-medium text-gray-600">
                ID:
              </label>
              <input
                type="id"
                id="id"
                name="id"
                value={idUser}
                onChange={(e) => setIdUser(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          )}

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={selectedMode === "0" ? addUser : selectedMode === "1" ? removeUser : selectedMode === "2" ? updateUser : getUser}
          >
            {selectedMode === "0" ? 'Agregar' : selectedMode === "1" ? 'Eliminar' : selectedMode === "2" ? 'Modificar' : 'Consultar'}
          </button>
        </div>
      </div>
      {consultedUser && (
        <div className='flex mt-10 justify-center items-center'>
          <div className='p-5 shadow-md shadow-gray-300 rounded-md'>
            <div>
              <label>
                Id: {consultedUser.id}
              </label>
            </div>
            <div>
              <label>
                Nombre: {consultedUser.firstName}
              </label>
            </div>
            <div>
              <label>
                Apellido: {consultedUser.lastName}
              </label>
            </div>
            <div>
              <label>
                Mail: {consultedUser.email}
              </label>
            </div>
            <button
              className="flex mt-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              onClick={() => setConsultedUser()}
            >
              Borrar Consulta
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;
