import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PrivateLayout