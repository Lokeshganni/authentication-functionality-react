import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
