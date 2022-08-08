import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/5 bg-black">
      <ul>
        <Link to="/admin"><li className="admin-li">Home</li></Link>
        <Link to="vehicles"><li className="admin-li">Vehicles</li></Link>
        <Link to="customers"><li className="admin-li">Customers</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar;