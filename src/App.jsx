import { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Header";
import SiteBackground from "./components/layout/SiteBackground";

const Home = lazy(() => import("./pages/Home"));
const Nopage = lazy(() => import("./components/Nopage"));
const CallForPapers = lazy(() => import("./pages/CallForPaper"));
const About = lazy(() => import("./pages/About"));
const TBDPage = lazy(() => import("./pages/TBD"));
const ContactUs = lazy(() => import("./pages/Contact"));
const CommitteesPage = lazy(() => import("./pages/Committees"));
const Registration = lazy(() => import("./pages/Registration"));
const ImportantDates = lazy(() => import("./pages/ImportantDates"));
const RegistrationPortal = lazy(() => import("./pages/RegistrationPortal"));
const SubmissionPage = lazy(() => import("./pages/SubmissionPage"));
const Publication = lazy(() => import("./pages/Publication"));

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const RouteFallback = () => (
  <div className="container py-14">
    <motion.div
      className="mx-auto max-w-xl rounded-[1.8rem] border border-light-divider/70 bg-white/80 px-6 py-8 text-center shadow-soft backdrop-blur-sm dark:border-dark-divider/70 dark:bg-dark-sb/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <p className="site-eyebrow">Loading</p>
      <p className="mt-4 text-sm leading-7 text-light-st dark:text-dark-st">
        Preparing IConSCEPT 2026.
      </p>
      <motion.div
        className="mx-auto mt-6 h-[2px] w-32 origin-left rounded-full bg-primary-500 dark:bg-primary-300"
        animate={{ scaleX: [0.35, 1, 0.35], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen overflow-x-clip">
          <SiteBackground />
          <div className="relative z-10 pt-28 md:pt-32">
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
                  <Route path="sponsors" element={<TBDPage />} />
                  <Route path="contact-us" element={<ContactUs />} />
                  <Route path="*" element={<Nopage />} />
                </Route>
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
