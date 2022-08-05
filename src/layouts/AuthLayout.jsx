import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <Outlet />
    </div>
  )
}

export default AuthLayout