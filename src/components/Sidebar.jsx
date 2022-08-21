import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo";

library.add(faDoorOpen);

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-1/5 bg-black">
      <div className="flex flex-col my-5 gap-5">
        <Logo white={true} minimal={true} classParams="m-auto w-40"/>
        <ul>
          <Link to="/admin"><li className="admin-li">Home</li></Link>
          <Link to="vehicles"><li className="admin-li">Vehicles</li></Link>
          <Link to="customers"><li className="admin-li">Customers</li></Link>
        </ul>
      </div>
      <div className="admin-li"><Link to="/" ><FontAwesomeIcon icon="fa-solid fa-door-open" /> Sign out</Link></div>
    </div>
  )
}

export default Sidebar;