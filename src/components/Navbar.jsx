import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-black w-screen text-white p-5">
      <Link to="/user/login">Log in</Link>
    </header>
  )
}

export default Navbar