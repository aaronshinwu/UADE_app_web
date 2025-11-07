export const VideoItem = ({ src, title, className }) => {
  return (
    // Contenedor del video que recibe clases adicionales desde props
    <div className={`video-item ${className}`}>
      <iframe
        className="w-[80%] aspect-[16/9]" // Tamaño y proporción del video
        src={src} // URL del video que se va a mostrar
        title={title} // Título del iframe para accesibilidad
        // Permisos para reproducir contenido y características de YouTube
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen // Permite que el video se vea en pantalla completa
      ></iframe>
    </div>
  )
}
