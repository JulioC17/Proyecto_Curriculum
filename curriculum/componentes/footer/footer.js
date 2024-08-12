import "./footer.css"
import data from "../../datos/datos"
const {telefono, address, email, GitHub} = data


const footer = () => `

<footer id = "pie" class = "">
    <h1 id = "footerh1" class = ""><i>my</i>Contact</h1>
    <ul id = "contacto">
        <li>
            <img src = "https://img.icons8.com/ios/50/ringer-volume.png" alt = "icono de telefono"/>
            <h3>${telefono}</h3>
        </li>

         <li>
            <img src = "https://img.icons8.com/ios/50/new-post--v1.png" alt = "icono de email"/>
            <h3>${email}</h3>
        </li>

         <li>
            <img src = "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-delivery-pin-for-parcel-delivery-location-making-delivery-regular-tal-revivo.png" alt = "icono de Localizacion"/>
            <h3>${address}</h3>
        </li>

         <li>
            <img src = "https://img.icons8.com/sf-black-filled/64/github.png" alt = "icono de Github"/>
            <h3>${GitHub}</h3>
        </li>
    </ul>
</footer>
`

export default footer