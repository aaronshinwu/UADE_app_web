import { NavLink } from "react-router"

export function MobileNavBar() {
  // Array con los enlaces del menú móvil
  const links = [
    { name: "Inicio", to: "/" },
    { name: "Biografía", to: "/biografia" },
    { name: "Clases", to: "/clases" },
    { name: "Videos", to: "/videos" },
    { name: "Contacto", to: "/contacto" },
  ]

  return (
    // Contenedor del menú
    <nav className="flex flex-col items-center gap-15">
      {links.map((link) => (
        <NavLink
          key={link.to} // Key única para cada enlace
          to={link.to} // Ruta a la que apunta el enlace
          className={({ isActive }) =>
            `text-[clamp(1.1rem,1.1vw,2rem)] font-inter transition duration-300 ${
            // Si el enlace está activo, cambia color y subrayado
            isActive ? "text-dorado underline underline-offset-4" : "text-gris"
            }`
          }
        >
          {link.name} {/* Nombre visible del enlace */}
        </NavLink>
      ))}
    </nav>
  )
}
