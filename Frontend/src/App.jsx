import { Routes, Route, Navigate } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { Inicio } from "./pages/Inicio";
import { Biografia } from "./pages/Biografia";
import { Clases } from "./pages/Clases";
import { Videos } from "./pages/Videos";
import { Contacto } from "./pages/Contacto";

// Rutas admin
import { AdminLayout } from './layouts/AdminLayout';
import { LoginAdmin } from './pages/LoginAdmin';
import { MensajesAdmin } from './layouts/MensajesAdmin';

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path='biografia' element={<Biografia />} />
        <Route path='clases' element={<Clases />} />
        <Route path='videos' element={<Videos />} />
        <Route path='videos/:videoId' element={<Videos />} />
        <Route path='contacto' element={<Contacto />} />
      </Route>

      {/* Admin */}
      <Route path="admin/login" element={<LoginAdmin />} />
      <Route path="admin" element={<AdminLayout />}>
        {/* Redirige /admin a /admin/mensajes */}
        <Route index element={<Navigate to="mensajes" replace />} />
        <Route path="mensajes" element={<MensajesAdmin />} />
      </Route>

      {/* Ruta 404 */}
      <Route path='*' element={<h1 className='text-8xl'>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
