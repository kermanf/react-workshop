import { Badge, Card, Flex, Loader, Text } from "@mantine/core"
import { Dog } from "../hooks/useGetDogs"

type Props = {
  data: Dog[]
  isLoading: boolean
}

const DogList = ({ data, isLoading }: Props) => {
  return (
    <Flex
      direction='column'
      gap={10}
      style={{
        overflow: "scroll",
      }}
    >
      {!isLoading ? (
        data.map(dog => (
          <Card
            key={dog.id}
            shadow='sm'
            radius='md'
            style={{ flexShrink: 0 }}
            withBorder
          >
            <Card.Section p='lg'>
              <Text c='blue' size='lg'>
                {dog.name}
              </Text>
              <Text size='sm'>{dog.origin}</Text>
              <Text size='sm'>{dog.life_span}</Text>
              <Flex gap={10}>
                {dog.temperament.split(", ").map(tmp => (
                  <Badge>{tmp}</Badge>
                ))}
              </Flex>
            </Card.Section>
          </Card>
        ))
      ) : (
        <Loader color='blue' />
      )}
    </Flex>
  )
}

export default DogList
