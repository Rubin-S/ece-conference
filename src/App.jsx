import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const Nopage = lazy(() => import("./components/Nopage"));
const CallForPapers = lazy(() => import("./pages/CallForPaper"));
const About = lazy(() => import("./pages/About"));
const TBDPage = lazy(() => import("./pages/TBD"));
const ContactUs = lazy(() => import("./pages/Contact"));
const CommitteesPage = lazy(() => import("./pages/Committees"));
const Registration = lazy(() => import("./pages/Registration"));
const ImportantDates = lazy(() => import("./pages/ImportantDates"));
const RegistrationForm = lazy(() => import("./pages/Submission"));
const SubmissionPage = lazy(() => import("./pages/SubmissionPage"));
const Publication = lazy(() => import("./pages/Publication"));

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const RouteFallback = () => (
  <div className="container py-12 text-center text-light-st dark:text-dark-st">
    Loading...
  </div>
);

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="call-for-papers" element={<CallForPapers />} />
                <Route path="important-dates" element={<ImportantDates />} />
                <Route path="about-us" element={<About />} />
                <Route path="committees" element={<CommitteesPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="registration/form" element={<RegistrationForm />} />
                <Route path="submission" element={<SubmissionPage />} />
                <Route path="publications" element={<Publication />} />
                <Route path="sponsors" element={<TBDPage />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<Nopage />} />
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
