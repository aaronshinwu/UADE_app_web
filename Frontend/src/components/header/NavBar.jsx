import { CustomNavLink } from "./NavLink" // Componente personalizado para enlaces de navegación

export function NavBar() {
    // Array con los enlaces del menú de escritorio
    const links = [
        { name: 'Inicio', to: '/' },
        { name: 'Biografía', to: '/biografia' },
        { name: 'Clases', to: '/clases' },
        { name: 'Videos', to: '/videos' },
        { name: 'Contacto', to: '/contacto' },
    ];

    return (
        // Contenedor del menú de navegación
        <nav className="flex flex-[2]">
            <ul className="flex flex-1 gap-8 justify-around items-center mx-[4vw] list-none">
                {links.map(link => (
                    <li key={link.to}>
                        {/* Enlace individual usando el componente CustomNavLink */}
                        <CustomNavLink name={link.name} to={link.to} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
