import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);

const AuthLayout = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <Link to="/" className="p-10 text-xl"><FontAwesomeIcon icon="fa-solid fa-house" /></Link>
      <Outlet />
    </div>
  )
}

export default AuthLayout