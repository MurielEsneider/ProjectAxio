import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Verifica si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUsersClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      navigate("/Users"); // Redirige a la página de usuarios si está autenticado
    }
  };

  const handleLogout = () => {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/Login"); // Redirige al inicio después de cerrar sesión
  };

  return (
    <>
      <nav className="border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 ml-2 mt-2 "
          >
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5f9b6c8-b7e9-4bc6-8aa5-4cecac07d1e5/ddenu54-abfc0af7-1ae0-47ca-a445-efea7c1ca689.png/v1/fill/w_894,h_894/halo_6_john_117_logo__gamer_profile_picture__by_unscjohnii_ddenu54-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2Y1ZjliNmM4LWI3ZTktNGJjNi04YWE1LTRjZWNhYzA3ZDFlNVwvZGRlbnU1NC1hYmZjMGFmNy0xYWUwLTQ3Y2EtYTQ0NS1lZmVhN2MxY2E2ODkucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YigaQzSLci79yFprh2_AJwy2hhFL6K0GmAx1xGDgleM"
              className="h-20"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Admin117
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse mr-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="relative px-4 py-2 font-semibold text-white bg-gray-600 rounded-sm group"
                >
                  <span className="absolute inset-0 w-full h-full transform scale-0 bg-white rounded-sm group-hover:scale-100"></span>
                  <span className="relative z-10 group-hover:text-black">
                    Cerrar Sesión
                  </span>
                </button>

                <button
                  onClick={handleUsersClick} 
                  className="relative px-4 py-2 font-semibold text-black bg-green-600 rounded-sm group hover:bg-green-950"
                >
                  <span className="absolute inset-0 w-full h-full transform scale-0 bg-green-800 rounded-sm group-hover:scale-100"></span>
                  <span className="relative z-10 group-hover:text-white">
                    Ver Usuarios
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </nav>
      {isAuthenticated && (
        <div className="flex h-96 items-center justify-center ">
          <br />
          <h2 className="font-semibold text-4xl text-white">Bienvenido, puedes ver los usuarios ahora.</h2>
        </div>
      )}
    </>
  );
}
