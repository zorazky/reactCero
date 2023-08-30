import { useEffect, useState } from "react"
import { fetchdata } from "../helpers/fetchdata"
 
 export const useFetchData = (endPoint) => {
  

   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getData = async () => {
      const { data, isLoading } = await fetchdata(endPoint)
      setData(data)
      setIsLoading(isLoading)
   }

   useEffect( () => {
      getData()
   },[endPoint])

   return {
    data,
    isLoading
   }

 }
 