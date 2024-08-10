import "./header.css"
import data from "../../datos/datos"
const {name, profesion, avatar, aboutMe} = data


const header = () => `

<header id = "home">
    <nav>
        <ul class = "">
            <li>
                <a href = "#skills">Skills</a>
            </li>
            
            <li>
                <a href = "#Formacion">Experiencia</a>
            </li>
            
            <li>
                <a href = "#Formacion">Formación</a>
            </li>
            <li>
                <a href = "#Proyectos">Proyectos</a>
            </li>
            <li>Contacto</li>
        </ul>
    </nav>
    <article id = "articulo1" class ="">
       <img src = "${avatar}" alt = ""mi foto class =""/>
        <h1 class ="">${name}</h1>
        <h2>${profesion}</h2>
        <p>${aboutMe}</p>
    </article>
</header>


`
export default header