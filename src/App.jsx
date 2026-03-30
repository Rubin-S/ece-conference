import { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Header";
import SiteBackground from "./components/layout/SiteBackground";

const Home = lazy(() => import("./pages/Home"));
const Nopage = lazy(() => import("./components/Nopage"));
const CallForPapers = lazy(() => import("./pages/CallForPaper"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/Contact"));
const CommitteesPage = lazy(() => import("./pages/Committees"));
const Registration = lazy(() => import("./pages/Registration"));
const ImportantDates = lazy(() => import("./pages/ImportantDates"));
const RegistrationPortal = lazy(() => import("./pages/RegistrationPortal"));
const SubmissionPage = lazy(() => import("./pages/SubmissionPage"));
const Publication = lazy(() => import("./pages/Publication"));
const SponsorsPage = lazy(() => import("./pages/Sponsors"));

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div key={location.pathname} className={isHome ? "" : "pt-28 md:pt-32"}>
        <Outlet />
      </div>
    </>
  );
};

const RouteFallback = () => (
  <div className="container py-14">
    <div className="mx-auto max-w-xl border-t border-light-divider/80 px-0 py-8 text-center">
      <p className="site-eyebrow">Loading</p>
      <p className="mt-4 text-sm leading-7 text-light-st">
        Preparing IConSCEPT 2026.
      </p>
      <div className="mx-auto mt-6 h-[2px] w-32 rounded-full bg-primary-500" />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-clip">
        <SiteBackground />
        <div className="relative z-10">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="call-for-papers" element={<CallForPapers />} />
                <Route path="important-dates" element={<ImportantDates />} />
                <Route path="about-us" element={<About />} />
                <Route path="committees" element={<CommitteesPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="registration/form" element={<RegistrationPortal />} />
                <Route path="submission" element={<SubmissionPage />} />
                <Route path="publications" element={<Publication />} />
                <Route path="sponsors" element={<SponsorsPage />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<Nopage />} />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
