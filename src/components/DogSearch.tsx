import { Button, Flex, Input } from "@mantine/core"
import React, { useState } from "react"

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const DogSearch = ({ setSearchText }: Props) => {
  const [inputText, setInputText] = useState("")

  return (
    <Flex gap={10} mt={50} mb={50}>
      <Input
        placeholder='Start typing...'
        value={inputText}
        onChange={event => setInputText(event.target.value)}
      />
      <Button onClick={() => setSearchText(inputText)}>Search</Button>
    </Flex>
  )
}

export default DogSearch
