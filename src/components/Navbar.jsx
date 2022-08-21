import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-end text-white font-medium py-5 px-14">
      <ul>
        <li><Link to="/user/login">Log in</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar