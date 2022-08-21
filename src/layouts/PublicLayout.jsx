import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Outlet } from 'react-router-dom';
import Logo from "components/Logo";

const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="flex justify-between bg-black px-5 items-center"><Logo classParams="h-6" white={true} minimal={true}/><Navbar /></header>
      <main className="h-full overflow-y-scroll p-16"><Outlet /></main>
      <Footer />
    </div>
  )
}

export default PublicLayout;