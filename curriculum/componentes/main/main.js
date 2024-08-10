import "./main.css"
import data from "../../datos/datos"
const {skills, Educacion, Experiencia, Proyectos } = data


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

    <article id = "Formacion">
        <ul>
            <h2>Formación</h2>
            <li>
                 <i>${Educacion[0].Graduación}</i>-${Educacion[0].Título}
            </li>

             <li>
                 <i>${Educacion[1].Graduación}</i>-${Educacion[1].Título}
            </li>

             <li>
                 <i>${Educacion[2].Graduación}</i>-${Educacion[2].Título}
            </li>
        </ul> 

        <ul>
            <h2>Experiencia</h2>
            <li>
                <i>${Experiencia[0].Inicio}</i>-${Experiencia[0].Compañía}-${Experiencia[0].Posicion}
            </li>

            <li>
                <i>${Experiencia[1].Inicio}</i>-${Experiencia[1].Compañía}-${Experiencia[1].Posicion}
            </li>

            <li>
                <i>${Experiencia[2].Inicio}</i>-${Experiencia[2].Compañía}-${Experiencia[2].Posicion}
            </li>
        </ul> 
    
    </article>
    
    <h1 id = "Proyectos"><i>my</i>Proyects</h1>
    <div id = "divisor">
        <article>
            <img src="${Proyectos[0].imagen}"/>
            <h2>${Proyectos[0].nombre}</h2>
            <p>${Proyectos[0].descripcion}</p>
             <a href = "${Proyectos[0].url}">Repositorio</a>
         </article>

         <article>
            <img src="${Proyectos[1].imagen}"/>
            <h2>${Proyectos[1].nombre}</h2>
            <p>${Proyectos[1].descripcion}</p>
             <a href = "${Proyectos[1].url}">Repositorio</a>
         </article>

         <article>
            <img src="${Proyectos[2].imagen}"/>
            <h2>${Proyectos[2].nombre}</h2>
            <p>${Proyectos[2].descripcion}</p>
             <a href = "${Proyectos[2].url}">Repositorio</a>
         </article>
    
    
    
    
    </div>
    






</main>


`
export default main