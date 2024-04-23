import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Member } from "../pages/ourmember";
import MemberDetail from "../pages/memberdetail";
import { Fanletter } from "../pages/fanletter";
import { Merchandise } from "../pages/merch";
import { GalleryPhotos } from "../pages/gallery";
import { Schedule } from "../pages/schedule";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location} s>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/member" element={<Member />} />
        <Route path="/DetailMember/:callsign" element={<MemberDetail />} />
        <Route path="/fanletter" element={<Fanletter />} />
        <Route path="/gallery" element={<GalleryPhotos />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/merch" element={<Merchandise />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
