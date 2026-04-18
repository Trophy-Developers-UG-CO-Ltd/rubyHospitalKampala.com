"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/utils/animations";
import paediatricsImage from "./Paediatrics.png";
import obstetricsImage from "./obstetricsGynecology.png";
import cardiologyImage from "./Cardiology.png";
import orthopaedicsImage from "./Orthopaedics.png";
import oncologyImage from "./Oncology.png";
import neurologyImage from "./neurology.png";
import urologyImage from "./Urology.png";
import entImage from "./ent.png";
import surgeryImage from "./general-surgery.png";

type Department = {
  title: string;
  image: StaticImageData;
  href: string;
};

const departments: Department[] = [
  {
    title: "Paediatrics",
    image: paediatricsImage,
    href: "/en/departments/paediatrics",
  },
  {
    title: "Obstetrics & Gynaecology",
    image: obstetricsImage,
    href: "/en/departments/obstetrics-gynaecology",
  },
  {
    title: "Cardiology",
    image: cardiologyImage,
    href: "/en/departments/cardiology",
  },
  {
    title: "Orthopaedics",
    image: orthopaedicsImage,
    href: "/en/departments/orthopaedics",
  },
  {
    title: "Oncology",
    image: oncologyImage,
    href: "/en/departments/oncology",
  },
  {
    title: "Neurology",
    image: neurologyImage,
    href: "/en/departments/neurology",
  },
  {
    title: "Urology",
    image: urologyImage,
    href: "/en/departments/urology",
  },
  {
    title: "ENT",
    image: entImage,
    href: "/en/departments/ent",
  },
  {
    title: "General Surgery",
    image: surgeryImage,
    href: "/en/departments/general-surgery",
  },
];

export default function MedicalDepartmentsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <motion.div
          className="grid gap-6 border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-[0.95fr_1.05fr] md:items-end lg:p-8"
          style={{ borderRadius: "4px" }}
          {...fadeUp(0, !!reduceMotion, {
            amount: 0.18,
            distance: 24,
            duration: 0.55,
            reducedDuration: 0,
          })}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Our Medical Departments
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Specialist departments delivering precise, coordinated hospital care in Kampala.
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            We bring together experienced doctors, modern diagnostics, surgery, emergency response, maternity care,
            and recovery support to deliver trusted medical care for patients in Kampala and across Uganda.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => (
            <motion.article
              key={department.title}
              className="group overflow-hidden border border-slate-200 bg-white"
              style={{ borderRadius: "4px" }}
              {...fadeUp(0.04 * (index + 1), !!reduceMotion, {
                amount: 0.18,
                distance: 24,
                duration: 0.55,
                reducedDuration: 0,
              })}
            >
              <Link href={department.href} className="block">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={department.image}
                    alt={department.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/18 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 pr-3 text-lg font-semibold text-white">{department.title}</h3>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold text-red-600 transition group-hover:text-red-700">
                    Learn about {department.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-red-600 transition group-hover:translate-x-1 group-hover:text-red-700" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/en/departments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700"
          >
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
