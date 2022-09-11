import React, { useEffect } from "react";
import { Footer } from "../../components";
import "./styles.scss";
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion";
import { Header, Hero, MultiCard, MissionCard } from "../../components";
import { useState } from "react";
import { Preloader } from "../../components";

function LandingPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <div className="landing">
      <AnimatePresence exitBeforeEnter onExitComplete={() => setLoading(false)}>
        {loading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Hero />
      <MissionCard />
      <MultiCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
