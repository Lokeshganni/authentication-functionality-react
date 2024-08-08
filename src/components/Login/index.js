import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    console.log(errMsg)
  }

  onClickLogin = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: 'rahul',
        password: 'rahul@2021',
      }),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-main-container">
        <h1>Please Login</h1>
        <button onClick={this.onClickLogin} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
