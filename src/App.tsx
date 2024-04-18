import { MantineProvider, createTheme } from "@mantine/core"
import Dashboard from "./components/Dashboard"
import "@mantine/core/styles.css"

const theme = createTheme({})

function App() {
  return (
    <MantineProvider theme={theme}>
      <Dashboard />
    </MantineProvider>
  )
}

export default App
