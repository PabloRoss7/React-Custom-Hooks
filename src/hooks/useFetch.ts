import { useEffect, useState } from "react"

export const useFetch = () => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null as Error | null
  })

  const { data, isLoading, error } = state

  const fetchData = async (url: string, method: string, bodyData:any = null) => {
    if (!url) return
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: bodyData ? JSON.stringify(bodyData) : null
      }  //Los navegadores rechazan o ignoran requests GET con body.

      const res = await fetch(url, options);
      const data = await res.json();
      setState({
        data: data,
        isLoading: false,
        error: null
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error as Error
      })
    }
  }

  return {
    data,
    isLoading,
    error,
    fetchData}
}
