import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Sidebar } from '../components/main/SideBar' // Barra lateral fija
import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'

export function MainLayout() {
    const location = useLocation(); // Obtiene la ruta actual

    useEffect(() => {
        // Cambia el título de la página según la ruta actual
        const path = location.pathname.slice(1) || "inicio"; // Quita la barra inicial o usa "inicio"
        const titulo = path.charAt(0).toUpperCase() + path.slice(1); // Pone en mayúscula la primera letra
        document.title = `Brenda Wu - ${titulo}`; // Actualiza el título del documento
    }, [location]);

    return (
        // Contenedor principal
        <div className='flex flex-col min-h-screen overflow-hidden bg-black'>
            <Header /> {/* Header con logo y navegación */}
            <main className='flex-1'>
                <Sidebar /> {/* Barra lateral con enlaces a redes sociales */}
                <Outlet /> {/* Aca se renderizan los componentes de las rutas hijas */}
            </main>
            <Footer />
        </div>
    )
}
