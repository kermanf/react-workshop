import { Flex } from "@mantine/core"
import { useState } from "react"
import { useGetDogs } from "../hooks/useGetDogs"
import DogSearch from "./DogSearch"
import DogList from "./DogList"

const Dashboard = () => {
  const [searchText, setSearchText] = useState("")
  const { data, isLoading } = useGetDogs(searchText)

  return (
    <Flex
      align='center'
      direction='column'
      style={{ height: "100vh", maxWidth: 1280, margin: "auto" }}
    >
      <DogSearch setSearchText={setSearchText} />
      <DogList data={data} isLoading={isLoading} />
    </Flex>
  )
}

export default Dashboard
