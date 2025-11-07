import { ListItem } from "../components/main/ListItem"
import GalasDelRio from "../assets/pictures/GalasDelRio.jpg" // Imagen de Brenda tocando piano
import { useNavigate } from "react-router"

export const Clases = () => {
  const navigate = useNavigate(); // Función para navegar a otras rutas

  // Elementos de la lista de clases de piano
  const clasesItems = [
    "Todas las edades",
    "Niveles inicial-intermedio",
    "Técnica y repertorio clásico",
    "Lenguaje musical",
  ];

  // Elementos de la lista de modalidad
  const modalidadItems = [
    "Clases de 1 hora",
    "Semanales",
    "Presenciales o virtuales",
    "Teoría musica y técnica pianística",
  ];

  return (
    <main className="text-gris font-abhaya">
      {/* Sección superior: lista de clases + botón de inscripción */}
      <section className="flex flex-col justify-center items-center text-center py-[120px] border-b border-[#c0a064]">
        <h2 className="text-[55px] mb-[20px]">Clases de piano</h2>
        <ListItem
          items={clasesItems} // Lista de clases
          ulClass="pl-0 mx-auto mb-[50px] text-center list-disc list-inside"
          liClass="text-[30px] my-[5px] list-inside"
        />
        <button
          onClick={() => navigate("/contacto")} // Navega a la página de contacto
          className="no-underline text-black bg-[#C0A064] px-10 py-3 rounded-[30px] max-w-full text-[18px] text-center transition duration-300 hover:bg-[#DBA661] hover:scale-105"
        >
          INSCRIBIRME
        </button>
      </section>

      {/*Sección inferior*/}
      {/* Versión GRANDE: solo visible en pantallas lg+ */}
      <section className="hidden lg:flex max-h-[650px] justify-center items-center mb-[100px] border-b border-[#c0a064]">
        <img
          className="border-r border-[#c0a064] w-[50vw] flex-grow h-auto object-cover"
          src={GalasDelRio} // Imagen de Brenda tocando piano
          alt="Brenda Wu tocando piano de cola"
        />
        <div className="w-[50vw] flex-grow flex h-auto flex-col items-center justify-center">
          <h3 className="w-full text-[clamp(30px,4vw,55px)] mb-[1vw] pl-[23%]">Modalidad</h3>
          <ListItem
            items={modalidadItems} // Lista de modalidades
            ulClass="w-full list-disc list-inside"
            liClass="text-[clamp(20px,3vw,35px)]"
          />
        </div>
      </section>

      {/* Versión para dispositivos pequeños (solo visible en <lg) */}
      <section className="flex flex-col lg:hidden items-center justify-center mb-[100px]">
        <img
          className="w-full h-auto object-cover mb-16 border-b border-[#c0a064]"
          src={GalasDelRio} // Imagen adaptada a pantalla pequeña
          alt="Brenda Wu tocando piano de cola"
        />

        <div className="w-full flex flex-col items-center justify-center px-4">
          <h3 className="w-full text-[clamp(30px,4vw,55px)] mb-[1vw] text-center">Modalidad</h3>
          <ListItem
            items={modalidadItems} // Lista de modalidades adaptada a pantalla pequeña
            ulClass="w-full list-disc list-inside text-center"
            liClass="text-[clamp(20px,3vw,35px)]"
          />
        </div>
      </section>
    </main>
  )
}
