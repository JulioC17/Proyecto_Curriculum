import './style.css'
import header from "./componentes/header/header.js"
import main from "./componentes/main/main.js"
import footer from "./componentes/footer/footer.js"

document.querySelector("body").innerHTML = `

${header()}
${main()}
${footer()}
`
const btnOscuro = document.querySelector("#oscuro")
const btnClaro = document.querySelector("#claro")
const headerUlLight = document.querySelector("#ulHeader")
const articulo1 = document.querySelector("#articulo1")
const headerH1 = document.querySelector("#HeaderH1")
const links = document.querySelectorAll("a")
const mainH1 = document.querySelector("#skills")
const mainArticle = document.querySelector("#habilidades")
const skillsLista = document.querySelectorAll(".skillslista")
const formacion = document.querySelector("#formacion")
const experiencia = document.querySelector("#experiencia")
const formacionLista = document.querySelector("#formacionLista")
const experienciaLista = document.querySelector("#experienciaLista")
const cursivaLista = document.querySelectorAll(".cursivalista")
const body = document.querySelector("body")
const proyectosH1 = document.querySelector("#Proyectos")
const articuloProyectos = document.querySelectorAll(".articuloProyectos")
const proyectoH2 = document.querySelectorAll(".proyectoH2")
const proyectoParrafo = document.querySelectorAll(".proyectoParrafo")
const pie = document.querySelector("#pie")
const footerh1 = document.querySelector("#footerh1")



btnClaro.addEventListener("click", () => {
    btnClaro.classList.toggle("light")
    btnOscuro.classList.toggle("light")
    headerUlLight.classList.toggle("light")
    articulo1.classList.toggle("light")
    headerH1.classList.toggle("light")
        for (const link of links) {
            link.classList.toggle("light")
        }
     mainH1.classList.toggle("light")
     mainArticle.classList.toggle("light")
        for (const skill of skillsLista) {
        skill.classList.toggle("light")
        }
    formacionLista.classList.toggle("light")
    experienciaLista.classList.toggle("light")
    formacion.classList.toggle("light")
    experiencia.classList.toggle("light")
        for (const cursiva of cursivaLista) {
        cursiva.classList.toggle("light")
        }
    body.classList.toggle("light")
    proyectosH1.classList.toggle("light")
        for (const articulo of articuloProyectos) {
        articulo.classList.toggle("light")
        }
        for (const h2 of proyectoH2) {
            h2.classList.toggle("light")
        }
        for (const parrafo of proyectoParrafo) {
            parrafo.classList.toggle("light")
        }
    pie.classList.toggle("light")
    footerh1.classList.toggle("light")
})

btnOscuro.addEventListener("click", () => {
    btnClaro.classList.toggle("light")
    btnOscuro.classList.toggle("light")
    headerUlLight.classList.toggle("light")
    articulo1.classList.toggle("light")
    headerH1.classList.toggle("light")
        for (const link of links) {
            link.classList.toggle("light")
        }
     mainH1.classList.toggle("light")
     mainArticle.classList.toggle("light")
        for (const skill of skillsLista) {
        skill.classList.toggle("light")
        }
    formacionLista.classList.toggle("light")
    experienciaLista.classList.toggle("light")
    formacion.classList.toggle("light")
    experiencia.classList.toggle("light")
        for (const cursiva of cursivaLista) {
        cursiva.classList.toggle("light")
        }
    body.classList.toggle("light")
    proyectosH1.classList.toggle("light")
        for (const articulo of articuloProyectos) {
        articulo.classList.toggle("light")
        }
        for (const h2 of proyectoH2) {
            h2.classList.toggle("light")
        }
        for (const parrafo of proyectoParrafo) {
            parrafo.classList.toggle("light")
        }
    pie.classList.toggle("light")
    footerh1.classList.toggle("light")
})









