import {NavLink} from 'react-router'

export function CustomNavLink({name,to}) {
  return (
    <NavLink
      to={to} // Ruta a la que apunta el enlace
      className={({isActive}) =>
        `text-[clamp(1.1rem,1.1vw,2rem)] font-inter transition duration-300
         ${
           // Si el enlace está activo, aplica color y subrayado dorado
           isActive 
             ? 'text-dorado underline underline-offset-4' 
             // Si no está activo, color gris y efecto hover dorado
             : 'text-gris hover:text-dorado hover:underline hover:underline-offset-4'
         }`
      }
    >
      {name} {/* Texto visible del enlace */}
    </NavLink>
  )
}
