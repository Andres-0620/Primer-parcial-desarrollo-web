# Primer-parcial-desarrollo-web

# UrbanStyle - Primer Parcial Desarrollo Web

Proyecto de una tienda de ropa urbana colombiana (Streetwear) desarrollado con HTML, CSS y JavaScript puro, aplicando conceptos de fragmentos, plantillas y Web Components.

---

## 🧩 Fragmentos, Plantillas y Web Components

### Fragmentos (Fragments)
Los fragmentos son porciones de HTML que se pueden reutilizar o insertar dinámicamente en el DOM sin necesidad de recargar la página. En este proyecto, el header y el footer se insertan como fragmentos dentro de los `div` con `id="header"` e `id="footer"` en `index1.html`, evitando duplicar código en cada página.

### Plantillas (Templates)
Las plantillas permiten definir estructuras HTML reutilizables que se clonan y rellenan con datos dinámicos. En este proyecto, las tarjetas de productos se generan dinámicamente desde el archivo de datos en `data/`, usando JavaScript para construir e insertar el HTML correspondiente en el contenedor `#lista-productos`.

### Web Components
Los Web Components son elementos HTML personalizados y reutilizables definidos con JavaScript. En este proyecto se implementaron como componentes independientes:
- **`headerComponent.js`** – define e inyecta el encabezado de la página.
- **`footerComponent.js`** – define e inyecta el pie de página.

Estos componentes se registran y montan en `index1.html` mediante etiquetas `<script>`, siguiendo el patrón de componentes web nativos.

---

## 🔐 Implementación del Formulario de Inicio de Sesión

El formulario de login se encuentra en `index.html` y está compuesto por:

- Un campo de texto para el **usuario** (`id="user"`)
- Un campo de contraseña (`id="pass"`)
- Un botón de envío que dispara la validación
- Un párrafo `id="mensaje"` donde se muestra el resultado de la autenticación

La lógica de validación está separada en `js/login.js`, que escucha el evento `submit` del formulario (`id="loginForm"`), verifica las credenciales contra los datos almacenados (posiblemente en `data/`) y redirige al usuario a `index1.html` si el login es exitoso, o muestra un mensaje de error en caso contrario.
```html
<form id="loginForm">
  <input type="text" id="user" placeholder="Usuario" required>
  <input type="password" id="pass" placeholder="Contraseña" required>
  <button type="submit">Entrar</button>
</form>
<p id="mensaje"></p>
```

---

## ✅ Buenas Prácticas Aplicadas

- **Separación de responsabilidades**: HTML, CSS y JavaScript están organizados en carpetas independientes (`/css`, `/js`, `/components`, `/data`).
- **Componentización**: el header y footer son componentes reutilizables, evitando duplicación de código entre páginas.
- **Validación con `required`**: los campos del formulario usan el atributo `required` para validación nativa del navegador.
- **Datos separados de la lógica**: los productos se almacenan en la carpeta `/data`, desacoplados de la presentación.
- **Uso de `lang="es"`** en el `<html>` para correcta accesibilidad e indexación.
- **Nombres de archivos y carpetas en minúsculas**, coherentes y descriptivos.
- **Scripts cargados al final del `<body>`** para no bloquear la renderización de la página.

---

## 🤝 Evidencia de Colaboración en GitHub

El proyecto cuenta con **13 commits** registrados en la rama `main`, los cuales reflejan el avance progresivo del desarrollo:

> _(Agrega aquí capturas de pantalla del historial de commits en GitHub, o lista los commits más relevantes con sus mensajes y autores)_

Ejemplo de cómo documentarlo:

| Commit | Descripción | Autor |
|--------|-------------|-------|
| `abc1234` | Estructura inicial del proyecto | Andres-0620 |
| `def5678` | Implementación del formulario de login | Andres-0620 |
| `ghi9012` | Creación de componentes header y footer | Andres-0620 |

Para ver el historial completo: [Ver commits](https://github.com/Andres-0620/Primer-parcial-desarrollo-web/commits/main)

---

## 🗂️ Estructura del Proyecto
```
Primer-parcial-desarrollo-web/
├── components/        # Web Components (header, footer)
├── css/
│   └── styles.css     # Estilos globales
├── data/              # Datos de productos (JSON u otro formato)
├── js/
│   ├── login.js           # Lógica del formulario de inicio de sesión
│   ├── main.js            # Renderizado de productos
│   ├── headerComponent.js # Componente de encabezado
│   └── footerComponent.js # Componente de pie de página
├── index.html         # Página de login
└── index1.html        # Página principal (productos)
```

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
