import "./header.css"
import data from "../../datos/datos"
const {name, profesion, avatar, aboutMe} = data


const header = () => `

<header id = "home">
    <nav>
        <ul id = "ulHeader" class = "">
            <li>
                <a class = "" href = "#skills">Skills</a>
            </li>
            
            <li>
                <a class = "" href = "#Formacion">Experiencia</a>
            </li>
            
            <li>
                <a class = "" href = "#Formacion">Formación</a>
            </li>
            <li>
                <a class = "" href = "#Proyectos">Proyectos</a>
            </li>
            <li>
                <a  href = "#footer">Contacto</a>
            </li>
            <button id = "claro" class = "">
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2.png"/>
            </button>
            <button id = "oscuro" class = "light">
                <img src="https://img.icons8.com/ultraviolet/40/bright-moon.png"/>
            </button>
        </ul>
    </nav>
    <article id = "articulo1" class ="">
       <img src = "${avatar}" alt = "mi foto class" =""/>
        <h1 id = "HeaderH1" class ="">${name}</h1>
        <h2>${profesion}</h2>
        <p>${aboutMe}</p>
    </article>
</header>


`
export default header