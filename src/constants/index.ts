import project1 from "../assets/projects/inventory.webp";
import project2 from "../assets/projects/battleship.webp";
import project3 from "../assets/projects/message.webp";
import project4 from "../assets/projects/weatherapp.webp";
import project5 from "../assets/projects/calculator.webp";
import project6 from "../assets/projects/tictactoe.webp";
import project7 from "../assets/projects/etchasketch.webp";
import project8 from "../assets/projects/todolist.webp";

export const HERO_CONTENT = `Soy un desarrollador Fullstack con conocimientos en Node.js, Express, React y PostgreSQL, con un enfoque especial en el backend. Me apasiona crear aplicaciones eficientes, escalables y bien estructuradas, y me esfuerzo por escribir código limpio y optimizado. Mi formación en ingeniería civil me brinda una mentalidad analítica que aplico en el desarrollo de software.`;

export const PROJECTS = [
  {
    title: "Inventory-application",
    image: project1,
    description:
      "Un sistema de gestión de inventario para una tienda, desarrollado con Express, PostgreSQL y Prisma ORM, siguiendo la arquitectura MVC y con capacidades completas de CRUD.",
    technologies: ["EJS", "Express", "PostgreSQL", "Prisma", "CSS", "Passport"],
    link: "https://inventory-application-production-7b1c.up.railway.app/",
  },
  {
    title: "Battleship",
    image: project2,
    description:
      "Este proyecto implementa el clásico juego de Batalla Naval utilizando principios de Desarrollo Dirigido por Pruebas (TDD). La aplicación está desarrollada con un enfoque en código limpio, diseño modular y desarrollo basado en funcionalidad.",
    technologies: ["HTML", "CSS", "JavaScript", "Jest"],
    link: "https://federicotempo.github.io/battleship/",
  },
  {
    title: "Message-board",
    image: project3,
    description:
      "Un tablero de mensajes interactivo construido con Express y PostgreSQL. Los usuarios pueden publicar mensajes en tiempo real. Diseño limpio y modular con componentes reutilizables para la renderización dinámica de contenido.",
    technologies: ["EJS", "Express", "PostgreSQL", "CSS"],
    link: "https://message-board-federicotempo.koyeb.app/",
  },

  {
    title: "Weather app",
    image: project4,
    description:
      "Aplicación del clima desarrollada con JavaScript, HTML y CSS. La app utiliza una función asincrónica para obtener datos del clima desde la API de Visual Crossing. Cuenta con un diseño responsive, adaptándose a distintos tamaños de pantalla, y cambia dinámicamente la imagen de fondo según la condición climática actual.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://federicotempo.github.io/weather-app/",
  },

  {
    title: "Calculator app",
    image: project5,
    description:
      "Una calculadora interactiva creada con JavaScript, HTML y CSS, que permite realizar operaciones matemáticas básicas. Se diseñó para funcionar tanto con clics en los botones como con entradas del teclado. La interfaz incluye una pantalla para mostrar los valores y resultados, con un límite de 8 caracteres para ciertas operaciones. La lógica del proyecto se organizó de manera modular, utilizando eventos para manejar las interacciones del usuario de forma eficiente.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://federicotempo.github.io/calculator/",
  },
  {
    title: "Todo List",
    image: project8,
    description:
      "Herramienta de gestión de tareas diseñada para ser funcional y visualmente organizada. Las tareas se muestran como barras que contienen detalles clave como título, descripción, fecha de vencimiento y prioridad. La app está construida con constructores de objetos, lo que permite una creación de tareas reutilizable y escalable. Incluye una librería de formato de fechas, asegurando una visualización clara y consistente. Además, utiliza localStorage para guardar las tareas de forma persistente.La aplicación es completamente responsive. En dispositivos más pequeños, incorpora una barra lateral colapsable para mejorar la navegación.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://federicotempo.github.io/todo-list/",
  },

  {
    title: "Tic Tac Toe",
    image: project6,
    description:
      "Tablero interactivo basado en una lógica limpia y modular utilizando funciones fábrica e IIFEs. Permite a los jugadores personalizar sus nombres, detecta victorias, empates y valida movimientos. Incluye un botón de reinicio y muestra los resultados finales. Se utilizan funciones fábrica para crear jugadores, e IIFEs para gestionar el tablero y mantener el código modular. Las IIFEs encapsulan instancias únicas, como el controlador del juego. Luego, la lógica se integró con el DOM para hacerlo jugable en el navegador.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://federicotempo.github.io/tic-tac-toe/",
  },
  {
    title: "Etch a Sketch",
    image: project7,
    description:
      "Un proyecto de Etch-a-Sketch interactivo creado con JavaScript, HTML y CSS. Permite a los usuarios dibujar en una cuadrícula dinámica con el cursor, cambiando el color de las celdas al pasar sobre ellas. Incluye opciones para ajustar el tamaño de la cuadrícula y restablecer el dibujo. La lógica del proyecto se basa en la manipulación del DOM y el uso de eventos para detectar la interacción del usuario. El diseño es minimalista y responsive.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://federicotempo.github.io/etch-a-sketch/",
  },
];

export const CONTACT = {
  address: "Buenos Aires, Argentina",
  phoneNo: "+5493364297670",
  email: "federicotempo98@gmail.com",
};
