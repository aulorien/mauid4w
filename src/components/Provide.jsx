import React from 'react';
import "./fontStyles.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Provide = () => {
  useGSAP(() => {
    const isMobile =
      /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
        navigator.userAgent
      );

    if (!isMobile && window.innerWidth > 768) {
      const card = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards",
          // markers: true,
          start: "top 90%",
          end: "bottom 90%",
          scrub: 2,
        },
      });

      card.from(".cards", {
        x: 700,
        duration: 1,
        opacity: 0,
        ease: "power3.in",
      });
    }
  }, []);

  return (
    <section className="backgroundCard mb-16 rounded-lg bg-gray-200 p-8 overflow-hidden">
      <h2 className="mb-6 text-center text-2xl font-semibold text-[#042880]">
        We Provide:
      </h2>

      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-center">
        {[
          {
            title: "Private, compliant identity systems",
            description: "with automatic regulation alignment—even as laws change",
          },
          {
            title: "Smart IP licensing",
            description: "so creators are paid fairly, automatically",
          },
          {
            title: "AI-powered moderation",
            description: "that’s scalable, ethical, and cheaper than manual review",
          },
          {
            title: "User-owned data controls",
            description: "that eliminate non-consensual surveillance",
          },
          {
            title: "Contextual AdTech",
            description: "enabling ethical monetization without spying or unfair practices",
          },
        ].map((item, index) => (
          <div key={index} className="rounded-lg bg-[#0076b8] p-4 shadow-md">
            <strong className="text-[#ffffffed]">{item.title}</strong>
            <p className="font-[personal2] text-[#ffffffcd]">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-[#0051a5] italic">
        With MAUI, platforms reduce costs, launch faster, monetize safely—and lead the next wave of regulatory-compliant, user-first innovation.
      </p>
    </section>
  );
};

export default Provide;
