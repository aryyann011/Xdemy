import Navbar from "@/Components/Navbar1";
import Footer from "@/Components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-y-auto hide-scrollbar">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
