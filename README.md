🎹 Brenda Wu – Sitio Web Oficial

Proyecto final – Full Stack (React + Django + MySQL)

Este es un sitio web dedicado a la pianista Brenda Wu, que permite a los usuarios navegar por distintas secciones, ver videos, conocer sobre sus clases y enviar mensajes a través de un formulario de contacto conectado a un backend en Django.

El proyecto incluye:

✅ Sitio web responsive
✅ Formulario de contacto con validaciones
✅ Almacenamiento de mensajes en base de datos
✅ Panel de administración para gestionar los mensajes
✅ Frontend deployado en Vercel
✅ Backend deployado en Railway (Django + MySQL)
📁 Estructura del proyecto

Frontend: React + Vite + TailwindCSS

Backend: Django + Django REST Framework

Base de datos: MySQL

Contenedores: Docker para entorno local

Deploy: Vercel (frontend) y Railway (backend)

🚀 Características principales
Frontend

Diseñado en React + Vite

Completamente responsive

Navegación con dos layouts:

Desktop (≥1024px) – menú visible

Mobile (<1024px) – menú hamburguesa animado

Embeds de videos de YouTube

Barra de redes sociales

Formulario de contacto con validaciones:

Nombre

Apellido

Email

Motivo (select)

Mensaje

Checkbox de términos y condiciones

Envío al backend mediante fetch/Axios

Backend

API REST desarrollada en Django

Endpoint para recibir y almacenar mensajes

Panel /admin para gestionar contenido

Validaciones de servidor

Seguridad mediante CORS y configuración de hosts

Base de datos en Railway

🛠️ Instalación local
📌 Requisitos

Docker y Docker Compose

Node.js 18+

Python 3.12+

MySQL (solo si no usas Docker)

🐳 Backend (Django + MySQL con Docker)
1️⃣ Levantar la base y el backend:
docker-compose up --build

2️⃣ Crear superusuario para el admin:
docker-compose run --rm api python manage.py createsuperuser


El backend quedará disponible en:

http://localhost:8000

⚛️ Frontend (React + Vite)
1️⃣ Instalar dependencias:
cd frontend
npm install

2️⃣ Correr el servidor local:
npm run dev


El frontend estará disponible en:

http://localhost:5173

🔐 Variables de entorno
📌 Backend – Producción (Railway)

Crear archivo .env en Railway con:

DEBUG="False"
SECRET_KEY="<tu-secret>"
ALLOWED_HOSTS="<tu-backend>.up.railway.app,127.0.0.1"

CORS_ALLOWED_ORIGINS="https://<tu-frontend>.vercel.app,http://localhost:5173"

ENV="production"

DB_NAME="railway"
DB_USER="<proporcionado-por-railway>"
DB_PASSWORD="<proporcionado-por-railway>"
DB_HOST="mysql.railway.internal"
DB_PORT="3306"

DJANGO_SUPERUSER_USERNAME="admin"
DJANGO_SUPERUSER_EMAIL="admin@example.com"
DJANGO_SUPERUSER_PASSWORD="<password>"

📌 Backend – Desarrollo

Archivo .env.local:

DEBUG="True"
SECRET_KEY="dev-secret-key"
ALLOWED_HOSTS="*"

DB_NAME="db_formulario_contacto_django"
DB_USER="uade_user"
DB_PASSWORD="mysqluade"
DB_HOST="mysql"
DB_PORT="3306"

📌 Frontend – Producción (Vercel)

Agregar en “Environment Variables”:

VITE_API_URL="https://<tu-backend>.up.railway.app"

📌 Frontend – Desarrollo

Archivo .env:

VITE_API_URL="http://localhost:8000"

🌐 Endpoints principales
✔️ Crear mensaje (POST)
POST /api/messages/


Retorna:

201 → mensaje creado

400 → datos inválidos

✔️ Admin Django
/admin

📦 Deploy
🚀 Frontend (Vercel)

Importar el repo desde GitHub

Configurar variables de entorno

Deploy automático

🛠️ Backend (Railway)

Crear servicio Django

Conectar MySQL

Agregar variables de entorno

Railway hace build + deploy automáticamente


👨‍💻 Autor

Proyecto desarrollado por Aaron Wu
Diplomatura Desarrollo Web Full Stack – UADE