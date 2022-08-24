import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo";
import useActiveRoute from "hooks/useActiveRoute";

library.add(faDoorOpen);

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-1/5 bg-black">
      <div className="flex flex-col my-5 gap-5">
        <Logo white={true} minimal={true} classParams="m-auto w-40"/>
        <ul>
          <AdminLink path="profile" text="Profile" />
          <AdminLink path="vehicles" text="Vehicles" />
          <AdminLink path="sales" text="Sales" />
          <AdminLink path="customers" text="Customers" />
        </ul>
      </div>
      <div className="admin-li"><Link to="/" ><FontAwesomeIcon icon="fa-solid fa-door-open" /> Sign out</Link></div>
    </div>
  )
}

const AdminLink = ({ path, text }) => {
  const isActive = useActiveRoute(path);
  return (
    <Link to={ path }>
      <li 
        className={
          isActive ? "admin-li-active" : "admin-li"
        }>
          { text }
        </li>
    </Link>
  )
}

export default Sidebar;