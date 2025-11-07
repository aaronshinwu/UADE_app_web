import BiographyBrenda from "../assets/pictures/BiographyBrenda.jpeg" // Imagen de Brenda Wu

export const Biografia = () => {
  return (
    // Contenedor principal
    <main className="flex flex-col lg:flex-row justify-center items-center p-12 flex-grow">
      
      {/* Artículo con la biografía */}
      <article className="flex justify-around p-[3%] bg-dorado-muy-oscuro h-auto w-full lg:max-w-1/2 min-w-[300px] z-1 lg:-mr-[0.75vw]">
        <p className="text-[clamp(16px,1vw,24px)] text-gris font-abhaya">
          {/* Título en negrita con tamaño responsivo */}
          <strong className="text-[clamp(24px,2vw,36px)]">Brenda Wu</strong> (Buenos Aires, 1997) comenzó sus estudios con la
          Prof. Graciela Fulco en el Instituto Felix Fernando Bernasconi en el año 2004, y a partir del año 2010 pasó a
          estudiar bajo la guía del maestro Aldo Antognazzi. Actualmente cursa la licenciatura en piano en la cátedra
          del maestro Manuel Massone, en el DAMus y el profesorado de la Universidad Nacional de las Artes.
          <br /><br />
          Forma parte de la orquesta de la compañía de ópera Clásica del Sur e imparte clases de piano de manera
          particular. En 2012, obtuvo la Mención de Honor en el Concurso Nacional de Piano “Fundación Catedral de La
          Plata” y Segundo Premio, en 2013. Durante su participación en el curso de perfeccionamiento instrumental
          organizado por el Festival Galas del Río 2015 (La Paz, Entre Ríos) resultó seleccionada para participar con
          una grabación en el Proyecto Clementi, del maestro Antognazzi.
          <br /><br />
          A partir del año 2023, ha dictado clases de lenguaje musical y piano en la academia Colegas y participa del
          proyecto de investigación Generaciones Olvidadas, del maestro Manuel Massone. Ha realizado recitales en
          diversas salas como el Teatro Roma, la Alianza Francesa, Teatro Luz y Fuerza, Catedral de La Plata, entre
          otros.
        </p>
      </article>

      {/* Imagen de Brenda */}
      <img
        className="w-full max-w-[400px] h-auto z-0 lg:border-l border-dorado lg:-ml-[0.75vw] mt-6 lg:mt-0"
        src={BiographyBrenda} // Fuente de la imagen
        alt="Brenda Wu sentada en el piano"
      />
    </main>
  )
}
