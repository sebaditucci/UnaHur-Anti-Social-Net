# 📌 UnaHur Anti-Social Net - Backend

## 📝 Descripción
Este proyecto consiste en el desarrollo de un sistema **backend** para una red social llamada **“UnaHur Anti-Social Net”**.  
La aplicación permite a los usuarios realizar publicaciones (posts), asociar imágenes y etiquetas, y recibir comentarios de otros usuarios.  

Está diseñado como un **MVP (Producto Mínimo Viable)** con el objetivo de ser fácilmente extensible y portable a distintas bases de datos.  

---

## 🚀 Funcionalidades principales
- **Usuarios (Users):**  
  - Registro de usuarios con `id` como clave primaria.  
  - Cada usuario posee un `nickName` único para identificación pública.  

- **Publicaciones (Posts):**  
  - Los usuarios pueden realizar publicaciones con descripción obligatoria.  
  - Se pueden asociar imágenes a los posts (inicialmente mediante URLs).  
  - Es posible agregar o eliminar imágenes posteriormente.  

- **Imágenes (Post_Images):**  
  - Se almacenan como URLs asociadas a un post.  

- **Comentarios (Comments):**  
  - Los usuarios pueden comentar publicaciones.  
  - Se registra fecha de creación y estado de visibilidad.  

- **Etiquetas (Tags):**  
  - Los posts pueden asociarse a múltiples etiquetas y viceversa (relación muchos a muchos).  

- **Seguidores (Followers - Bonus):**  
  - Un usuario puede seguir a otros y ser seguido por muchos (relación muchos a muchos).  

---

## 🛠️ Modelado de Datos

### Entidades principales
- **User**  
  - `id` (PK)  
  - `nickName` (único)  
  - `email`  
  - `passwordHash`  
  - `createdAt`  

- **Post**  
  - `id` (PK)  
  - `userId` (FK → User)  
  - `description`  
  - `createdAt`  

- **Post_Images**  
  - `id` (PK)  
  - `postId` (FK → Post)  
  - `url`  

- **Comment**  
  - `id` (PK)  
  - `postId` (FK → Post)  
  - `userId` (FK → User)  
  - `text`  
  - `createdAt`  
  - `isVisible`  

- **Tag**  
  - `id` (PK)  
  - `name` (único)  

- **Post_Tags**  
  - Tabla intermedia `postId` - `tagId`  

- **User_Follows**  
  - Tabla intermedia `followerId` - `followingId`  

---

## 🔗 Endpoints principales

### Users
- `POST /users` → Crear usuario  
- `GET /users/:id` → Obtener usuario por ID  
- `PUT /users/:id` → Actualizar usuario  
- `DELETE /users/:id` → Eliminar usuario  
- `POST /users/:id/follow/:targetId` → Seguir a otro usuario  
- `DELETE /users/:id/unfollow/:targetId` → Dejar de seguir  

### Posts
- `POST /posts` → Crear publicación  
- `GET /posts/:id` → Obtener publicación  
- `PUT /posts/:id` → Actualizar publicación  
- `DELETE /posts/:id` → Eliminar publicación  
- `POST /posts/:id/images` → Asociar imágenes  
- `POST /posts/:id/tags` → Asociar etiquetas  

### Comments
- `POST /posts/:id/comments` → Agregar comentario a un post  
- `GET /posts/:id/comments` → Listar comentarios de un post  
- `DELETE /comments/:id` → Eliminar comentario  

### Tags
- `POST /tags` → Crear etiqueta  
- `GET /tags` → Listar etiquetas  
- `DELETE /tags/:id` → Eliminar etiqueta  

---

## ⚙️ Requerimientos Técnicos
- **Base de datos:** SQLite (con posibilidad de migrar fácilmente a otro motor).  
- **ORM recomendado:** Sequelize.  
- **Configuración por variables de entorno:**  
  - Puerto del servidor (`PORT`).  
  - Parámetros de conexión a base de datos.  

---

## 📑 Documentación
- La API debe estar documentada en **Swagger (YAML)**.  
- Se entregan colecciones de prueba en **Postman** o archivos JSON.  

---

## 🎁 Bonus
- **Upload de imágenes:**  
  Se puede permitir el upload directo de imágenes, almacenándolas en una carpeta del servidor en lugar de solo URLs.  

- **Optimización de consultas:**  
  Dado que la información de los posts no cambia constantemente, se pueden aplicar estrategias de **caching** (por ejemplo: Redis o cache en memoria) para evitar consultas repetitivas a la base de datos.