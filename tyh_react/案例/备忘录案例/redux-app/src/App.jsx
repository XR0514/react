import { useRoutes } from 'react-router-dom'
import routeConfig from './router'

const App = () => {
  const routes = useRoutes(routeConfig)
  return routes
}

export default App