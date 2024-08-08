import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact to="/login" component={Login} />
      <ProtectedRoute exact to="/" component={Home} />
      <ProtectedRoute exact to="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
