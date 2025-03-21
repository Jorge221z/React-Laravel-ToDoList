# React-Laravel-ToDoList

Este es un proyecto que implementa una aplicación de lista de tareas (ToDo List) utilizando **Laravel** como backend y **React** como frontend. El entorno de desarrollo se maneja a través de **Laravel Sail** y **Docker**.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- **Docker** y **Docker Compose**
- **PHP** (si no usas Sail)
- **Node.js** (para la parte de React)
- **Composer** (para las dependencias de Laravel)

## Pasos para Poner en Marcha el Proyecto

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/React-Laravel-ToDoList.git
cd React-Laravel-ToDoList

2. Iniciar los contenedores de Docker

Si estás usando Laravel Sail, puedes iniciar los contenedores de Docker con el siguiente comando:

./vendor/bin/sail up -d

Este comando levanta los contenedores de Laravel y MySQL (o el contenedor de base de datos que hayas configurado) en segundo plano.

Si no estás usando Sail y prefieres ejecutar los servicios manualmente, asegúrate de que el contenedor de MySQL y el servidor Laravel estén activos.
3. Ejecutar migraciones y otras configuraciones

Una vez los contenedores estén en funcionamiento, ejecuta las migraciones para preparar la base de datos:

./vendor/bin/sail artisan migrate

Si no usas Sail, puedes ejecutar el siguiente comando (asegúrate de tener configurado el entorno correctamente):

php artisan migrate

4. Instalar las dependencias de Node.js

Una vez que la base de datos esté lista, instala las dependencias de React. Ejecuta el siguiente comando en la raíz del proyecto:

npm install

5. Ejecutar el servidor de desarrollo

Para iniciar el servidor de desarrollo de React y Laravel, usa:

npm run dev

Esto debería poner en marcha el servidor de Vite para la parte de React y permitirte ver la aplicación en tu navegador en http://localhost:5173.
6. Acceder a la aplicación

Ahora, accede a tu aplicación de ToDo List en el navegador:

    Frontend (React + Vite): http://localhost:5173
    Backend (Laravel): http://localhost:8000 (si usas php artisan serve o el servidor de Laravel configurado)

7. Configuración Adicional

Si utilizas Docker y Sail, asegúrate de que las variables de configuración de la base de datos en el archivo .env estén correctamente configuradas:

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=nombre_de_base_de_datos
DB_USERNAME=nombre_de_usuario
DB_PASSWORD=contraseña

Si tienes problemas de conexión a la base de datos, revisa que el contenedor de MySQL esté corriendo y que las credenciales sean correctas.
8. Detener los contenedores de Docker

Cuando termines de trabajar, puedes detener los contenedores de Docker con:

./vendor/bin/sail down

Esto detendrá y eliminará los contenedores en ejecución.
Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos:

    Realiza un fork de este repositorio.
    Crea una rama para tu nueva funcionalidad: git checkout -b nueva-funcionalidad.
    Haz tus cambios y confirma con git commit -am 'Añadir nueva funcionalidad'.
    Empuja los cambios a tu repositorio: git push origin nueva-funcionalidad.
    Crea un Pull Request desde tu rama a la rama principal.

Licencia

Este proyecto está bajo la MIT License - consulta el archivo LICENSE para más detalles.


### Resumen de lo que contiene el `README.md`:

1. **Descripción del proyecto**.
2. **Requisitos previos**: lo que necesitas tener instalado.
3. **Pasos detallados para la configuración y puesta en marcha**:
   - Clonación del repositorio.
   - Iniciar contenedores de Docker con Sail.
   - Ejecutar migraciones de la base de datos.
   - Instalación de dependencias de Node.js y ejecución de Vite.
4. **Acceso a la aplicación**: URLs para acceder a frontend y backend.
5. **Configuración adicional**: cómo ajustar el archivo `.env` para la base de datos.
6. **Detener contenedores**.
7. **Instrucciones de contribución**.

Este `README.md` debería ayudar a cualquier persona que quiera ejecutar el proyecto, proporcionan
