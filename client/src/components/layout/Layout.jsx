import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <>
    <Navbar />
    <main style={{ minHeight: "calc(100vh - 68px)" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
