import { Outlet, Navigate } from 'react-router';

export function AdminLayout() {
  // Paso 1: obtener token de localStorage
  const token = localStorage.getItem('accessToken');

  // Paso 2: si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Paso 3: si hay token, renderizar la ruta privada con fondo oscuro
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black text-white">
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
