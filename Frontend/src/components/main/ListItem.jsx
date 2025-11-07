export function ListItem({ titulo, items, ulClass = "", liClass = "" }) {
  return (
    <div>
      {/* Si se pasa un título, se muestra en un h3 */}
      {titulo && <h3>{titulo}</h3>}
      
      {/* Lista de elementos */}
      <ul className={ulClass}> {/* Se pueden pasar clases personalizadas para el <ul> */}
        {items.map((item, index) => (
          <li key={index} className={liClass}> {/* Cada <li> puede tener clases personalizadas */}
            {item} {/* Contenido del elemento de la lista */}
          </li>
        ))}
      </ul>
    </div>
  )
}
