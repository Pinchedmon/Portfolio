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
  const [isReady, setIsReady] = useState(false);

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
  }, [controlsHome, controlsContact, controlsAbout, controlsWorks]);

  return (
    <main className="flex w-full px-2 lg:w-[1024px] min-h-screen flex-col">
      <Nav />
      <div className="relative w-[1024px]  z-10">
        <motion.div
          ref={homeRef}
          id="home"
          initial={false} // Add this
          animate={controlsHome}
          transition={{ duration: 0.5 }}
          className="min-h-screen pt-[140px] w-full  md:pt-[120px]"
        >
          <Home />
        </motion.div>
        <motion.div
          ref={aboutRef}
          id="about"
          initial={false} // Add this
          animate={controlsAbout}
          transition={{ duration: 0.5 }}
          className="min-h-screen pt-[140px] w-full  md:pt-[120px]"
        >
          <About isReady={isReady} />
        </motion.div>
        <motion.div
          ref={worksRef}
          id="works"
          initial={false} // Add this
          animate={controlsWorks}
          transition={{ duration: 0.5 }}
          className="min-h-screen  w-full  md:pt-[120px]"
        >
          <Works />
        </motion.div>
        <motion.div
          ref={contactRef}
          id="contact"
          initial={false} // Add this
          animate={controlsContact}
          transition={{ duration: 0.5 }}
          className="min-h-screen  w-full  md:pt-[120px]"
        >
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
