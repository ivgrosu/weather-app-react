import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../utils/ScrollToTop";

const RootPage = () => {
  return (
    <>
      <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default RootPage;
