import "./main.css"
import data from "../../datos/datos"
const {skills, Educacion, Experiencia, Proyectos } = data


const main = () => `

<main>
    
    <article class = "" id = "habilidades">
        <h1 id = "skills" class = ""> <i>my</i>Skills</h1>
        <ul id = "listaHabilidades">
            <li class = "skillslista" class "">
                ${skills[0].tecnologia}
                <img src = "${skills[0].logo}" alt = "logo html5" />
            </li>

            <li class = "skillslista" class "">
                ${skills[1].tecnologia}
                <img src = "${skills[1].logo}" alt = "logo html5" />
            </li>

            <li class = "skillslista" class "">
                ${skills[2].tecnologia}
                <img src = "${skills[2].logo}" alt = "logo html5" />
            </li>

            <li class = "skillslista" class "">
                ${skills[3].tecnologia}
                <img src = "${skills[3].logo}" alt = "logo html5" />
            </li>

        </ul>
       
    </article>

    <article id = "Formacion">
        <ul id = "formacionLista" class = "">
            <h2 id = "formacion" class = "">Formación</h2>
            <li>
                 <i class = "cursivalista" class = "">${Educacion[0].Graduación}</i>-${Educacion[0].Título}
            </li>

             <li>
                 <i class = "cursivalista" class = "">${Educacion[1].Graduación}</i>-${Educacion[1].Título}
            </li>

             <li>
                 <i class = "cursivalista" class = "">${Educacion[2].Graduación}</i>-${Educacion[2].Título}
            </li>
        </ul> 

        <ul id = "experienciaLista" class = "">
            <h2 id = "experiencia" class = "">Experiencia</h2>
            <li>
                <i class = "cursivalista" class = "">${Experiencia[0].Inicio}</i>-${Experiencia[0].Compañía}-${Experiencia[0].Posicion}
            </li>

            <li>
                <i class = "cursivalista" class = "">${Experiencia[1].Inicio}</i>-${Experiencia[1].Compañía}-${Experiencia[1].Posicion}
            </li>

            <li>
                <i class = "cursivalista" class = "">${Experiencia[2].Inicio}</i>-${Experiencia[2].Compañía}-${Experiencia[2].Posicion}
            </li>
        </ul> 
    
    </article id = "articuloProyecto">
    
    <h1 id = "Proyectos" class = ""><i>my</i>Proyects</h1>
    <div id = "divisor">
        <article class = "articuloProyectos" class = "">
            <img src="${Proyectos[0].imagen}"/>
            <h2 class = "proyectoH2" class = "">${Proyectos[0].nombre}</h2>
            <p class = "proyectoParrafo" class = "">${Proyectos[0].descripcion}</p>
             <a href = "${Proyectos[0].url}">Repositorio</a>
         </article>

         <article class = "articuloProyectos" class = "">
            <img src="${Proyectos[1].imagen}"/>
            <h2 class = "proyectoH2" class = "">${Proyectos[1].nombre}</h2>
            <p class = "proyectoParrafo" class = "">${Proyectos[1].descripcion}</p>
             <a href = "${Proyectos[1].url}">Repositorio</a>
         </article>

         <article class = "articuloProyectos" class = "">
            <img src="${Proyectos[2].imagen}"/>
            <h2 class = "proyectoH2" class = "">${Proyectos[2].nombre}</h2>
            <p class = "proyectoParrafo" class = "">${Proyectos[2].descripcion}</p>
             <a href = "${Proyectos[2].url}">Repositorio</a>
         </article>
    </div>
    
</main>


`
export default main