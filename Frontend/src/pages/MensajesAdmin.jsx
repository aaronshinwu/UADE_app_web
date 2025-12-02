import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function MensajesAdmin() {
  const [mensajes, setMensajes] = useState([]);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/admin/login");
  };

  const fetchMensajes = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return navigate("/admin/login");

    try {
      const res = await axios.get(`${API}/api/Mensajes/admin/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data.data ? res.data.data : [];
      setMensajes(data);
    } catch (err) {
      console.error(err);
      handleLogout();
    }
  };

  useEffect(() => {
    fetchMensajes();
  }, []);

  // Borrar mensaje
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas borrar este mensaje?")) return;

    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${API}/api/Mensajes/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // quitar del state (usando mensaje_id correcto)
      setMensajes((prev) => prev.filter((m) => m.mensaje_id !== id));
    } catch (err) {
      console.error("Error al borrar mensaje:", err.response?.data || err);
      alert("No se pudo borrar el mensaje.");
    }
  };

  return (
    <section className="px-5 py-20 md:mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-dorado font-abhaya text-[3rem]">
            Mensajes Admin
          </h1>
          <button
            onClick={handleLogout}
            className="text-black bg-[#C0A064] hover:bg-[#DBA661] border-0 px-4 py-2 rounded-lg cursor-pointer font-['Abhaya_Libre'] text-lg font-normal transition hover:font-semibold"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#C0A064] text-black">
              <tr>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Apellido</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Motivo</th>
                <th className="p-3 text-left">Mensaje</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mensajes.length > 0 ? (
                mensajes.map((m) => (
                  <tr
                    key={m.mensaje_id}
                    className="odd:bg-[#1A1A1A] even:bg-[#2A2A2A] text-white"
                  >
                    <td className="p-3">{m.persona.nombre}</td>
                    <td className="p-3">{m.persona.apellido}</td>
                    <td className="p-3">{m.persona.email}</td>
                    <td className="p-3">{m.motivo}</td>
                    <td className="p-3">{m.mensaje}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleDelete(m.mensaje_id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-semibold"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="p-6 text-center text-gray-400 italic"
                  >
                    No hay mensajes aún
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
