import piano from '../../assets/pictures/PianoHeader.jpeg'; // Imagen de fondo para el header
import { Link } from 'react-router'

export function HeaderTitle() {
  return (
    // Contenedor principal del header
    <div
      className="relative w-1/2 min-w-[min(500px,100%)] h-[200px] flex-[3] min-h-[200px]"
    >
      {/* Imagen de fondo de piano, con opacidad baja */}
      <img
        src={piano}
        alt="foto de piano"
        className="w-full h-full object-cover opacity-20"
      />

      {/* Título centrado sobre la imagen */}
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   font-abhaya text-[clamp(50px,5vw,120px)] text-dorado
                   drop-shadow-[2px_2px_5px_rgba(0,0,0,1)] whitespace-nowrap"
      >
        {/* Enlace al inicio de la página */}
        <Link to="/">Brenda Wu</Link>
      </h1>
    </div>
  )
}
