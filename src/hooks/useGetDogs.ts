import axios from "axios"
import { useEffect, useState } from "react"

export interface Dog {
  id: string
  name: string
  origin: string
  life_span: string
  temperament: string
}

export const useGetDogs = (searchText: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Dog[]>([])

  const fetchDogs = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<Dog[]>(
        "https://api.thedogapi.com/v1/breeds?limit=20"
      )
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchDogsWithSearch = async (searchText: string) => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<Dog[]>(
        "https://api.thedogapi.com/v1/breeds/search",
        {
          params: {
            q: searchText,
          },
        }
      )
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchText ? fetchDogsWithSearch(searchText) : fetchDogs()
  }, [searchText])

  return { data, isLoading }
}
