"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, ShieldCheck, Stethoscope } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import bilalImage from "./dr/Bilal Omer Hani.png";
import darilImage from "./dr/Daril Arafet-DR ARAFET-p-500.png";
import blessingImage from "./dr/Dr- BLESSING-TAREMWA-p-1080.jpeg";
import marthaImage from "./dr/Martha Namugga.png";
import ntambiImage from "./dr/Ntambi-Rodger-.png";

type Doctor = {
  name: string;
  specialty: string;
  bio: string;
  image: StaticImageData;
  href: string;
};

const doctors: Doctor[] = [
  {
    name: "Dr Blessing",
    specialty: "Neurosurgeon",
    bio: "With extensive experience in neurosurgery, Dr. Blessing is committed to delivering exceptional, personalised care. His compassionate approach and advanced surgical expertise ensure treatment tailored to each patient’s needs.",
    image: blessingImage,
    href: "/en/doctors/dr-blessing",
  },
  {
    name: "Daril Arafet",
    specialty: "Orthopaedics",
    bio: "With extensive experience in orthopedics, Dr. Arafet delivers attentive, evidence-based musculoskeletal care tailored to each patient’s condition, treatment needs, and recovery goals.",
    image: darilImage,
    href: "/en/doctors/daril-arafet",
  },
  {
    name: "Martha Namugga",
    specialty: "Urologist",
    bio: "Dr. Namugga Martha Monicah is a general surgeon and urologist specializing in urinary tract and reproductive health, trauma care, women’s health, and equitable access to care.",
    image: marthaImage,
    href: "/en/doctors/martha-namugga",
  },
  {
    name: "Bilal Omer Hani",
    specialty: "Pediatric Specialist",
    bio: "Dr. Bilal Omer Hani provides consultations and surgical care for newborns, infants, children, and adolescents, with expertise in neonatal surgery, congenital abnormalities, trauma, and laparoscopic procedures.",
    image: bilalImage,
    href: "/en/doctors/bilal-omer-hani",
  },
  {
    name: "Dr. Ntambi Rogers",
    specialty: "Orthopaedic Spine Specialist",
    bio: "Dr Ntambi is an experienced spine surgeon specializing in minimally invasive and endoscopic spine surgery, spinal deformity correction, disc herniation, spinal stenosis, trauma management, and advanced surgical techniques.",
    image: ntambiImage,
    href: "/en/doctors/dr-ntambi-rogers",
  },
];

function fadeUp(delay = 0, reduced = false) {
  return reduced
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut", delay },
      };
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article
      className="group relative h-[670px] w-[320px] shrink-0 overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.06] shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:h-[710px] md:w-[360px]"
    >
      <div className="relative h-[300px] overflow-hidden md:h-[340px]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.78)_100%)]" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[4px] border border-white/10 bg-black/25 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-md">
          <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
          Our Experts
        </div>
      </div>

      <div className="relative flex h-[calc(100%-300px)] flex-col p-6 text-white md:h-[calc(100%-340px)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{doctor.name}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">{doctor.specialty}</p>
          </div>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/10 bg-white/5 text-white/82">
            <Stethoscope className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-5 h-36 overflow-hidden text-sm leading-7 text-white/74 md:h-40">{doctor.bio}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-5">
          <Link
            href="/en#home-booking-strip"
            className="inline-flex items-center gap-2 rounded-[4px] bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <CalendarDays className="h-4 w-4" />
            Make an appointment
          </Link>

          <Link href={doctor.href} className="text-sm font-semibold text-white/84 transition hover:text-red-300">
            View profile
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function DoctorsInfiniteSliderSection() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const duplicatedDoctors = useMemo(() => [...doctors, ...doctors], []);

  useEffect(() => {
    if (reduceMotion) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % doctors.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [isPaused, reduceMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-doctor-card='true']") as HTMLElement | null;
    if (!card) return;

    const gap = 16;
    const cardWidth = card.offsetWidth + gap;
    const targetLeft = activeIndex * cardWidth;

    track.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  function handlePrev() {
    setDirection(-1);
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  }

  function handleNext() {
    setDirection(1);
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % doctors.length);
  }

  return (
    <section className="overflow-hidden bg-[#0a0c10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          {...fadeUp(0, !!reduceMotion)}
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Our Experts</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Meet our doctors through a premium specialist showcase.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
              Explore leading specialists in neurosurgery, orthopaedics, urology, paediatrics, and spine care through
              an immersive doctor experience built for confidence and conversion.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous doctors"
              className="inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-white/10 bg-white/5 text-white transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next doctors"
              className="inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-white/10 bg-white/5 text-white transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#0a0c10_0%,rgba(10,12,16,0)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#0a0c10_0%,rgba(10,12,16,0)_100%)]" />

          <div
            ref={trackRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {duplicatedDoctors.map((doctor, index) => (
              <div key={`${doctor.name}-${index}`} data-doctor-card="true" className="snap-start">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeIndex}-${direction}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-white/60"
          >
            <div>
              Viewing specialist {activeIndex + 1} of {doctors.length}
            </div>
            <div className="flex items-center gap-2">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to doctor ${index + 1}`}
                  onClick={() => {
                    setIsPaused(true);
                    setActiveIndex(index);
                  }}
                  className={`h-2.5 w-8 transition ${
                    index === activeIndex ? "bg-red-500" : "bg-white/15 hover:bg-white/25"
                  } rounded-[4px]`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
