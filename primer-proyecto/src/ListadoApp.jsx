import { useState } from "react"
import { AgregarTarea } from "./componentes/AgregarTarea"

const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre} {visto ? 'check' : 'x'}</li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: true}])
    }
    let listadoSecciones = [
        {nombre: "Instalaciones necesarias", visto:true},
        {nombre: "Uso de Vite", visto:true},
        {nombre: "Componentes", visto:true},
        {nombre: "Variables en JSX", visto:true},
        {nombre: "Props", visto:true},
        {nombre: "Eventos", visto:true},
        {nombre: "useState", visto:false},
        {nombre: "Redux", visto:false},
        {nombre: "customHooks", visto:false},
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    console.log(arreglo)
    return (
        <>
            <AgregarTarea></AgregarTarea>
            <h1>Listado de Temas del Curso</h1>
            <ol>
               {
                arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)
               }
            </ol>

          
        </>
    )
}
