export function Sidebar() {
  // Array con los enlaces a redes sociales y sus clases de icono de Boxicons
  const socialLinks = [
    {
      href: "https://www.youtube.com/@BrendaWu-ub4yy/videos",
      iconClass: "bx bxl-youtube",
    },
    {
      href: "https://www.facebook.com/brenda.wu.357",
      iconClass: "bx bxl-facebook-circle",
    },
    {
      href: "https://www.instagram.com/bren_wu/",
      iconClass: "bx bxl-instagram",
    },
  ];

  return (
    // Contenedor fijo en la esquina inferior derecha
    <aside className="fixed bottom-15 right-0 flex flex-col bg-dorado-oscuro pl-1 pr-0.75 py-[5px] rounded-l-lg z-[1000]">
      {socialLinks.map((link, index) => (
        // Cada enlace abre la red social en una nueva pestaña
        <a
          key={index} // Key para cada elemento del map
          href={link.href} // URL de la red social
          target="_blank" // Abrir en nueva pestaña
          className="text-black text-[24px] px-[2px] py-[2.5px] text-center transition-colors duration-300 hover:text-dorado"
        >
          {/* Icono de Boxicons */}
          <i className={link.iconClass}></i>
        </a>
      ))}
    </aside>
  )
}
