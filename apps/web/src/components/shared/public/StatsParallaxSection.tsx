"use client";

import { motion, useReducedMotion } from "framer-motion";
import aboutParallaxImage from "./rubyhospitalkampala-about-2048x1365.webp";

const stats = [
  {
    value: "7+",
    title: "Years of Experience",
    desc: "Ruby has been a trusted provider of exceptional healthcare services.",
  },
  {
    value: "50,000+",
    title: "Patient Visits Annually",
    desc: "We are proud to serve over 10,000+ patient visits annually.",
  },
  {
    value: "350k+",
    title: "Happy Patients",
    desc: "We take pride in the trust your health & happiness are our top priorities.",
  },
  {
    value: "15+",
    title: "Our Specialist Doctor",
    desc: "Each bringing a wealth of knowledge & expertise to provide you.",
  },
];

function fadeUp(delay = 0, reduced = false) {
  return reduced
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", delay },
      };
}

export default function StatsParallaxSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-24"
      style={{
        backgroundImage: `url(${aboutParallaxImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              {...fadeUp(i * 0.1, !!reduceMotion)}
              className="border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
              style={{ borderRadius: "4px" }}
            >
              <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">{stat.title}</p>
              <p className="mt-3 text-sm leading-6 text-white/80">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
