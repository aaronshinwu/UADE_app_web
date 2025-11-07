import { VideoItem } from "../components/main/VideoItem" // Componente para mostrar un video
import { useParams } from "react-router"

export const Videos = () => {
  // Array con todos los videos disponibles
  const allVideos = [
    {
      src: "https://www.youtube.com/embed/nmr5F0Sv_nE",
      title: "C. Debussy - Estudio no 6: “pour les huit dedos” - Brenda Wu, piano."
    },
    {
      src: "https://www.youtube.com/embed/s9VQiWJ3nmo",
      title: "Béla Bartók 'Contrastes'"
    },
    {
      src: "https://www.youtube.com/embed/xHFkmDd3C58?list=RDxHFkmDd3C58",
      title: "Bartok, B. 15 canciones campesinas húngaras - B. Wu"
    },
    {
      src: "https://www.youtube.com/embed/r70JmbrfEfM?list=RDr70JmbrfEfM",
      title: "Kumok J. Variaciones Breves - B. Wu"
    }
  ];

  const { videoId } = useParams(); // Obtenemos el ID del video de la URL
  const videoIndex = videoId ? parseInt(videoId) - 1 : null; // Convertimos el ID a índice (empezando en 0)
  const video = videoIndex !== null ? allVideos[videoIndex] : null; // Seleccionamos el video correspondiente

  // Si hay un video específico según el ID
  if (video) {
    return (
      <main className="p-[10vh] px-[5vw] flex justify-center">
        <VideoItem
          src={video.src}
          title={video.title}
          className="flex flex-1 justify-center items-center aspect-[16/9]"
        />
      </main>
    );
  }

  // Si se pasa un ID que no corresponde a ningún video
  if (videoId) {
    return (
      <main className="p-[20vh] px-[5vw]">
        <p className="text-gris text-2xl text-center">Video no encontrado</p>
      </main>
    );
  }

  // Si no hay ID, mostramos todos los videos
  return (
   <main className="p-[10vh] px-[5vw]">
     {/* Layout para pantallas grandes (lg y superiores) */}
     <article className="hidden lg:flex justify-center items-center">
       <section className="flex-1 flex flex-col pb-[200px] border-r border-dorado">
         {/* Primer y segundo video en columna */}
         <VideoItem
           src={allVideos[0].src}
           title={allVideos[0].title}
           className="border-b border-dorado flex justify-center items-center aspect-[16/9]"
         />
         <VideoItem
           src={allVideos[1].src}
           title={allVideos[1].title}
           className="flex justify-center items-center aspect-[16/9]"
         />
       </section>

       <section className="flex-1 flex flex-col pt-[200px]">
         {/* Tercer y cuarto video en columna */}
         <VideoItem
           src={allVideos[2].src}
           title={allVideos[2].title}
           className="border-b border-dorado flex justify-center items-center aspect-[16/9]"
         />
         <VideoItem
           src={allVideos[3].src}
           title={allVideos[3].title}
           className="flex justify-center items-center aspect-[16/9]"
         />
       </section>
     </article>

     {/* Layout para pantallas pequeñas */}
     <article className="flex flex-col lg:hidden gap-8">
       {allVideos.map((video, index) => (
         <VideoItem
           key={index} // Key para cada elemento del map
           src={video.src}
           title={video.title}
           className="flex justify-center items-center aspect-[16/9]"
         />
       ))}
     </article>
   </main>
  )
}
