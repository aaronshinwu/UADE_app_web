import PlayingPiano from "../assets/pictures/PlayingPiano.jpg" // Imagen de Brenda tocando el piano

export function Inicio() {
  return (
    // Contenedor principal
    <main className="flex flex-col-reverse lg:flex-row justify-center items-center px-6 lg:px-24 py-10 lg:py-15">
      
      {/* Imagen de Brenda tocando el piano */}
      <img
        src={PlayingPiano} // Fuente de la imagen
        alt="Brenda Wu tocando el piano"
        className="w-full max-w-[500px] lg:max-w-[50vw] z-0 lg:-mr-[1.5vw] lg:border-r lg:border-dorado mt-6 lg:mt-0"
      />

      {/* Sección de bienvenida*/}
      <section className="p-[5%] bg-dorado-muy-oscuro z-10 w-full font-abhaya tracking-normal">
        <h2 className="text-[clamp(24px,2vw,40px)] text-gris mb-[5%]">
          ¡Bienvenidos a mi página web!
        </h2>
        <p className="text-[clamp(16px,2vw,30px)] text-gris">
          Con más de 10 años de experiencia en el ámbito de la enseñanza, me
          apasiona guiar a mis estudiantes en su desarrollo musical, adaptando
          cada lección a sus necesidades y objetivos.
        </p>
      </section>
    </main>
  )
}
