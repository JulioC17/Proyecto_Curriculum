import "./main.css"
import data from "../../datos/datos"
const {skills} = data
const {tecnologia} = skills

const main = () => `

<main>
    
    <article id = "habilidades">
        <h1 id = "skills"> <i>my</i>Skills</h1>
        <ul id = "listaHabilidades">
            <li>
                ${skills[0].tecnologia}
                <img src = "${skills[0].logo}" alt = "logo html5" />
            </li>

            <li>
                ${skills[1].tecnologia}
                <img src = "${skills[1].logo}" alt = "logo html5" />
            </li>

            <li>
                ${skills[2].tecnologia}
                <img src = "${skills[2].logo}" alt = "logo html5" />
            </li>

            <li>
                ${skills[3].tecnologia}
                <img src = "${skills[3].logo}" alt = "logo html5" />
            </li>

        </ul>
       
        
    
    </article>
    






</main>


`
export default main