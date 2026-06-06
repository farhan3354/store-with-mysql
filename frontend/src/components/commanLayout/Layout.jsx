import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1 w-full pt-[74px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
