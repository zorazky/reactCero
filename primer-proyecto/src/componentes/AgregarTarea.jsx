import {useState} from 'react'

export const AgregarTarea = ( { agregarTarea }) => {

    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        
        event.preventDefault()
        agregarTarea(inputValue)
    }
  return (
   <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text"
            placeholder="Ingresa Tarea nueva"
            value={inputValue}
            onChange={ (event) => onInputChange(event)}
        />
   </form>  
  )
}
