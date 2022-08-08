import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header><Navbar /></header>
      <main className="h-full overflow-y-scroll p-16"><Outlet /></main>
      <Footer />
    </div>
  )
}

export default PublicLayout;