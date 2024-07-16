"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Nav from "@/components/nav";
import Works from "@/components/works";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const controlsHome = useAnimation();
  const controlsContact = useAnimation();
  const controlsAbout = useAnimation();
  const controlsWorks = useAnimation();
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === homeRef.current) {
              controlsHome.start({ opacity: 1, y: 0 });
            } else if (entry.target === aboutRef.current) {
              controlsAbout.start({ opacity: 1, y: 0 });
            } else if (entry.target === worksRef.current) {
              setIsReady(true);
              controlsWorks.start({ opacity: 1, y: 0 });
            } else if (entry.target === contactRef.current) {
              controlsContact.start({ opacity: 1, y: 0 });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (worksRef.current) {
      observer.observe(worksRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [controlsHome, controlsContact]);

  return (
    <main className="flex w-[1024px] min-h-screen flex-col">
      <Nav />
      <div className="relative w-[1024px] z-10">
        <motion.div
          ref={homeRef}
          id="home"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsHome}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
          style={{ paddingTop: "120px" }}
        >
          <Home />
        </motion.div>
        <motion.div
          ref={aboutRef}
          id="about"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsAbout}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
          style={{ paddingTop: "120px" }}
        >
          <About isReady={isReady} />
        </motion.div>
        <motion.div
          ref={worksRef}
          id="works"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsWorks}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
          style={{ paddingTop: "120px" }}
        >
          <Works />
        </motion.div>
        <motion.div
          ref={contactRef}
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsContact}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
          style={{ paddingTop: "120px" }}
        >
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
