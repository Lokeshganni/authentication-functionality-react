import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-main-container">
    <ul>
      <Link className="link-ele" to="/">
        <li>Home</li>
      </Link>
      <Link className="link-ele" to="/">
        <li>About</li>
      </Link>
    </ul>
  </div>
)

export default Header
