import { useState, useEffect } from 'react'
import { UserList } from './componentes/userList'

export const UsersApp = () => {

    const [endPoint, setendPoint] = useState('users')

    const handleFetch = () => {
        setendPoint('comments')
    }

    console.log(endPoint)

    return (
        <> 
            <h1>Lista de usuarios</h1>
          
            <UserList endPoint={endPoint}></UserList>

            <button onClick={handleFetch}>Aqui se llama a la API</button>
        </>
    )
}
