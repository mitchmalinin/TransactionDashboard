import { useState, useEffect } from "react"
import axios from "axios"

export const useAxios = (route = "") => {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState("")
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL + route}`
      )
      if (result.status === 200) {
        setResponse(result.data)
      }
      setloading(false)
    } catch (error) {
      setError(error)
      setloading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []) // execute once only

  return { response, error, loading }
}
