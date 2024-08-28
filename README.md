
# Encriptador de Texto

Este proyecto es una aplicación web para encriptar y desencriptar texto con una interfaz visual atractiva que incluye animaciones y un diseño adaptable a diferentes tamaños de pantalla. El proyecto utiliza HTML, CSS y JavaScript para ofrecer una experiencia de usuario interactiva.

## Características

- **Encriptación y Desencriptación**: Permite al usuario encriptar y desencriptar texto con animaciones visuales.
- **Animaciones**: Incluye animaciones de máquina de escribir, humo y rotación para mejorar la experiencia visual.
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla, desde computadoras de escritorio hasta dispositivos móviles.
- **Modo Oscuro y Claro**: Soporta un interruptor de tema para cambiar entre modo oscuro y claro.
- **Interfaz de Usuario**: Incluye contenedores para texto y resultados, botones interactivos y un footer con íconos de redes sociales.

## Estructura del Proyecto

- **`index.html`**: Contiene la estructura HTML de la aplicación.
- **`styles.css`**: Incluye los estilos CSS para el diseño y las animaciones.
- **`script.js`**: Maneja la lógica de encriptación, desencriptación y las animaciones.
- **`img/`**: Carpeta que contiene las imágenes utilizadas en el proyecto.

## Uso

1. **Encriptar Texto**:
   - Escribe el texto en el área de entrada.
   - Presiona el botón de encriptar para ver el texto encriptado en el área de resultados.

2. **Desencriptar Texto**:
   - Escribe el texto encriptado en el área de entrada.
   - Presiona el botón de desencriptar para ver el texto desencriptado.

3. **Copiar Texto**:
   - Utiliza el botón de copiar para copiar el texto encriptado o desencriptado al portapapeles.

4. **Cambiar el Tema**:
   - Usa el interruptor de tema para alternar entre el modo oscuro y claro.

## Estilos Responsivos

El diseño se adapta a diferentes tamaños de pantalla usando una sola media query para simplificar el código:

```css
/* Estilos Responsivos */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 10px;
        padding: 5px;
    }

    .text-section,
    .image-or-result-section {
        width: 100%;
    }

    footer {
        height: auto;
        padding: 15px;
        font-size: 14px;
    }

    .social-buttons img {
        width: 30px;
        height: 30px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 24px; /* Ajuste de tamaño del título para dispositivos móviles */
    }
}
```
