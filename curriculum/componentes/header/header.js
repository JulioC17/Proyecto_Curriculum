import "./header.css"
import data from "../../datos/datos"
const {name, profesion, avatar, aboutMe} = data


const header = () => `

<header id = "home">
    <nav>
        <ul>
            <li>
                <a href = "#home">home</a>
            </li>
            <li>skills</li>
            <li>experiencia</li>
            <li>educacion</li>
            <li>proyectos</li>
            <li>contacto</li>
        </ul>
    </nav>
    <article id = "articulo1">
       <img src = "${avatar}" alt = ""mi foto/>
        <h1>${name}</h1>
        <h2>${profesion}</h2>
        <p>${aboutMe}</p>
    </article>
</header>


`




    
     
    




export default header