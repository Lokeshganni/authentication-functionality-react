import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    console.log('home-route')
    return <Redirect to="/login" />
  }
  console.log('home-route-ok')
  return <Route {...props} />
}

export default ProtectedRoute
