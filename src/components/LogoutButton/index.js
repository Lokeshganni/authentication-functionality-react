import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
