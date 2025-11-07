import { useState } from "react"
import { HeaderTitle } from "./HeaderTitle" // Componente que muestra una imagen y título
import { MobileNavBar } from "./MobileNavBar" // Menú de navegación para dispositivos pequeños
import { NavBar } from "./NavBar" // Menú de navegación para dispositivos grandes

export function Header() {
  const [isOpen, setIsOpen] = useState(false) // Estado para controlar si el menú móvil está abierto
  const handleClick = () => setIsOpen(!isOpen) // Función que alterna el menú

  return (
   <header className="relative w-full border-b border-dorado">
     <div className="flex flex-row lg:flex-row justify-between items-center w-full relative">
       {/* Imagen + título */}
       <HeaderTitle />

       {/* Nav desktop */}
       <div className="hidden lg:flex flex-1">
         <NavBar />
       </div>

       {/* Botón hamburguesa móvil */}
       <button
         className={`lg:hidden ${
           isOpen ? "fixed top-4 right-4 z-2000" : "absolute top-2 right-2"
         } w-6 h-6`}
         onClick={handleClick}
       >
         {/* Línea superior de la hamburguesa */}
         <span
           className={`z-2000 absolute top-0 left-0 block h-0.5 w-full bg-dorado transform transition duration-300 origin-center ${
             isOpen ? "rotate-45 top-2.5" : ""
           }`}
         />
         {/* Línea del medio */}
         <span
           className={`absolute top-2.5 left-0 block h-0.5 w-full bg-dorado transition-opacity duration-300 ${
             isOpen ? "opacity-0" : ""
           }`}
         />
         {/* Línea inferior */}
         <span
           className={`absolute bottom-0 left-0 block h-0.5 w-full bg-dorado transform transition duration-300 origin-center ${
             isOpen ? "-rotate-45 top-2.5" : ""
           }`}
         />
       </button>
     </div>

     {/* Menú lateral móvil */}
     <div
       className={`lg:hidden fixed top-0 right-0 h-full w-64 z-1500 bg-stone-800 shadow-lg transform transition-transform duration-300 ${
         isOpen ? "translate-x-0" : "translate-x-full"
       }`}
     >
       <div className="flex flex-col items-center justify-start mt-24 gap-6">
         {/* Contenido del menú móvil */}
         <MobileNavBar />
       </div>
     </div>
   </header>
  )
}
