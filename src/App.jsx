import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/layout/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Nopage from "./components/Nopage";
import Footer from "./components/layout/Footer";
import CallForPapers from "./pages/CallForPaper";
import About from "./pages/About";
import TBDPage from "./pages/TBD";
import ContactUs from "./pages/Contact";
import CommitteesPage from "./pages/Committees";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="call-for-papers" element={<CallForPapers />} />
              <Route path="about-us" element={<About />} />
              <Route path="committees" element={<CommitteesPage />} />
              <Route path="registration" element={<TBDPage />} />
              <Route path="publications" element={<TBDPage />} />
              <Route path="sponsors" element={<TBDPage />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
