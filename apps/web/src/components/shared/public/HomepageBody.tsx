"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Hospital,
  Activity,
  Brain,
  Bone,
  Baby,
  ShieldPlus,
  ScanLine,
  Stethoscope,
  HeartHandshake,
  Ambulance,
  Microscope,
  UserRound,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import MedicalDepartmentsSection from "./MedicalDepartmentsSection";
import StatsParallaxSection from "./StatsParallaxSection";
import DoctorsInfiniteSliderSection from "./DoctorsInfiniteSliderSection";

const services = [
  { title: "Intensive Care Unit", icon: ShieldPlus },
  { title: "Neurophysiology", icon: Brain },
  { title: "Urology", icon: Activity },
  { title: "Neurology", icon: Brain },
  { title: "Obstetrics & Gynaecology", icon: HeartHandshake },
  { title: "Orthopaedic Care", icon: Bone },
  { title: "Rehabilitation & Pain Management", icon: Activity },
  { title: "Paediatrics", icon: Baby },
  { title: "General Surgery", icon: Stethoscope },
  { title: "Cardiology", icon: HeartPulse },
  { title: "Emergency Care", icon: Ambulance },
  { title: "Neurosurgery & Spine", icon: Brain },
  { title: "Diagnostics & Imaging", icon: ScanLine },
  { title: "Wellness & Preventive Health", icon: HeartHandshake },
  { title: "Speciality Care", icon: Hospital },
];

const focusedCare = [
  {
    title: "Minimally Invasive Surgery",
    description: "Precision-led procedures designed to reduce trauma, improve recovery, and support better patient outcomes.",
    icon: Microscope,
  },
  {
    title: "In & Out Patient Care",
    description: "Seamless inpatient and outpatient coordination for consultations, procedures, monitoring, and follow-up.",
    icon: UserRound,
  },
  {
    title: "Radiology",
    description: "Advanced imaging and interpretation for early detection, treatment planning, and clinical confidence.",
    icon: ScanLine,
  },
];

const testimonials = [
  {
    name: "Patient from Kampala",
    note: "Excellent specialist care and a responsive emergency team.",
  },
  {
    name: "International Patient",
    note: "Clear communication and smooth coordination from admission to discharge.",
  },
  {
    name: "Returning patient",
    note: "Professional staff, modern diagnostics, and efficient follow-up support.",
  },
];

function HeroBookingBar() {
  const frontendOnlyBooking = process.env.NEXT_PUBLIC_FRONTEND_ONLY_BOOKING !== "false";
  const [form, setForm] = useState({
    department: "",
    doctor: "Any Available Doctor",
    date: "",
    fullName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const calendarWrapRef = useRef<HTMLDivElement | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);

  const showContactFields = Boolean(form.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const departments = [
    "General Surgery",
    "Cardiology",
    "Neurology",
    "Neurophysiology",
    "Urology",
    "Obstetrics & Gynaecology",
    "Orthopaedic Care",
    "Paediatrics",
    "Diagnostics & Imaging",
    "Emergency Care",
  ];

  const doctors = [
    "Any Available Doctor",
    "Dr Blessing",
    "Daril Arafet",
    "Martha Namugga",
    "Bilal Omer Hani",
    "Dr. Ntambi Rogers",
  ];

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const selectedDate = form.date ? new Date(`${form.date}T00:00:00`) : undefined;

  function handleDoctorChange(event: React.ChangeEvent<HTMLSelectElement>) {
    updateField("doctor", event.target.value);

    requestAnimationFrame(() => {
      setIsCalendarOpen(true);
    });
  }

  function handleDateSelect(date: Date | undefined) {
    if (!date) return;
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const value = `${yyyy}-${mm}-${dd}`;
    updateField("date", value);
    setIsCalendarOpen(false);

    requestAnimationFrame(() => {
      fullNameRef.current?.focus();
    });
  }

  useEffect(() => {
    if (!isCalendarOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (calendarWrapRef.current && !calendarWrapRef.current.contains(target)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.department || !form.doctor || !form.date || !form.fullName || !form.email || !form.phone) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setSubmitError(null);

    try {
      if (!frontendOnlyBooking) {
        const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
        const endpoint = apiBase
          ? `${apiBase.replace(/\/+$/, "")}/appointments/bookings/public`
          : "/api/v1/appointments/bookings/public";

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            department: form.department,
            doctor: form.doctor,
            appointmentDate: form.date,
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            specialRequest: form.specialRequest,
            source: "homepage-horizontal-strip",
          }),
        });

        if (!response.ok) {
          const message = response.status >= 500
            ? "Server error while submitting your booking."
            : "Booking request failed. Please review your details and try again.";
          setSubmitError(message);
          return;
        }
      }

      setIsSuccess(true);
      setForm({
        department: "",
        doctor: "Any Available Doctor",
        date: "",
        fullName: "",
        email: "",
        phone: "",
        specialRequest: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitError("Unable to submit booking right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="home-booking-strip" className="relative z-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:mt-12 lg:mb-12 xl:px-8">
        <motion.form
          layout
          onSubmit={handleSubmit}
          transition={{
            layout: {
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="border  border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.10)] xl:p-5"
          style={{ borderRadius: "4px" }}
        >
          <div className="grid lg:-mt-12 gap-3 xl:grid-cols-[1.25fr_1.25fr_1fr_auto] xl:items-end xl:gap-4">
            <motion.label layout className="grid gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Department
              </span>
              <select
                name="department"
                value={form.department}
                onChange={(event) => updateField("department", event.target.value)}
                required
                className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                style={{ borderRadius: "4px" }}
              >
                <option value="" disabled>
                  Select a medical service
                </option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </motion.label>

            <motion.label layout className="grid gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Doctor
              </span>
              <select
                name="doctor"
                value={form.doctor}
                onChange={handleDoctorChange}
                className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                style={{ borderRadius: "4px" }}
              >
                {doctors.map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
            </motion.label>

            <motion.label layout className="grid gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Appointment Date
              </span>
              <div className="relative" ref={calendarWrapRef}>
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen((prev) => !prev)}
                  className="inline-flex h-14 w-full items-center justify-between border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                  style={{ borderRadius: "4px" }}
                >
                  <span>
                    {form.date
                      ? selectedDate?.toLocaleDateString("en-UG", { day: "2-digit", month: "short", year: "numeric" })
                      : "Select appointment date"}
                  </span>
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                </button>
                {isCalendarOpen ? (
                  <div
                    className="absolute left-0 top-[calc(100%+8px)] z-40 w-max border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.16)]"
                    style={{ borderRadius: "4px" }}
                  >
                    <DayPicker
                      className="hero-booking-calendar"
                      mode="single"
                      numberOfMonths={2}
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      defaultMonth={selectedDate ?? new Date()}
                      captionLayout="dropdown"
                      fromDate={today}
                      startMonth={today}
                      disabled={{ before: today }}
                      styles={{
                        day_button: {
                          width: "52px",
                          height: "52px",
                          fontSize: "1rem",
                          borderRadius: "4px",
                        },
                        month_caption: {
                          fontSize: "1.05rem",
                          fontWeight: 700,
                        },
                        weekday: {
                          fontSize: "0.8rem",
                          color: "#64748b",
                        },
                      }}
                      classNames={{
                        months: "hero-booking-calendar-months",
                        month: "hero-booking-calendar-month",
                        day: "hero-booking-calendar-day",
                        day_button: "hero-booking-calendar-day-button",
                      }}
                      modifiersClassNames={{
                        selected: "hero-booking-calendar-day-selected",
                        today: "hero-booking-calendar-day-today",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </motion.label>

            <motion.div layout className="grid gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-transparent">
                Action
              </span>

              <button
                type="submit"
                disabled={!showContactFields || isSubmitting}
                className={`
                  inline-flex h-14 items-center justify-center bg-red-600 px-6 text-sm font-semibold text-white
                  transition
                  ${showContactFields
                    ? "hover:bg-red-700"
                    : "cursor-not-allowed"}
                `}
                style={{ borderRadius: "4px" }}
              >
                {isSubmitting ? "Submitting..." : "Book My Appointment"}
              </button>
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {showContactFields ? (
              <motion.div
                key="contact-row"
                layout
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mt-4 grid gap-3 xl:grid-cols-[1fr_1fr_0.9fr_1.35fr] xl:items-end xl:gap-4"
              >
                <label className="grid gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Full Name
                  </span>
                  <input
                    ref={fullNameRef}
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    placeholder="Enter full name"
                    required
                    className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                    style={{ borderRadius: "4px" }}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="eg: xyz@gmail.com"
                    required
                    className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                    style={{ borderRadius: "4px" }}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="+256"
                    required
                    className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                    style={{ borderRadius: "4px" }}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Special Request
                  </span>
                  <input
                    type="text"
                    name="specialRequest"
                    value={form.specialRequest}
                    onChange={(event) => updateField("specialRequest", event.target.value)}
                    placeholder="Describe your special request"
                    className="h-14 w-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-red-400"
                    style={{ borderRadius: "4px" }}
                  />
                </label>

              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {isSuccess ? (
              <motion.div
                key="success"
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-4 flex items-center gap-2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                style={{ borderRadius: "4px" }}
              >
                <CheckCircle2 className="h-4 w-4" />
                {frontendOnlyBooking
                  ? "Your appointment details were captured successfully. Our team will contact you shortly."
                  : "Your appointment request has been sent successfully."}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {submitError ? (
              <motion.div
                key="error"
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                style={{ borderRadius: "4px" }}
              >
                {submitError}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

export default function HomepageBody() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] as const };
  const [servicesPage, setServicesPage] = useState(0);
  const [servicesPerView, setServicesPerView] = useState(3);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateServicesPerView = () => {
      setServicesPerView(mediaQuery.matches ? 6 : 3);
    };

    updateServicesPerView();
    mediaQuery.addEventListener("change", updateServicesPerView);
    return () => {
      mediaQuery.removeEventListener("change", updateServicesPerView);
    };
  }, []);

  const totalServicePages = Math.ceil(services.length / servicesPerView);
  const visibleServiceItems = services.slice(
    servicesPage * servicesPerView,
    servicesPage * servicesPerView + servicesPerView,
  );

  useEffect(() => {
    setServicesPage((prev) => Math.min(prev, Math.max(totalServicePages - 1, 0)));
  }, [totalServicePages]);

  function handlePreviousServicesPage() {
    if (totalServicePages <= 1) return;
    setServicesPage((prev) => (prev - 1 + totalServicePages) % totalServicePages);
  }

  function handleNextServicesPage() {
    if (totalServicePages <= 1) return;
    setServicesPage((prev) => (prev + 1) % totalServicePages);
  }

  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-red-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:pb-28 lg:pt-20 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition}
            className="max-w-3xl"
          >
            <p className="eyebrow rounded-[4px] border border-white/20 bg-white/10 px-3 py-1 text-white/85">
              RUBY HOSPITAL KAMPALA
            </p>
            <h1 className="mt-12 mb-12 text-4xl font-bold tracking-[-0.03em] sm:text-5xl text-uppercase">
              Specialist healthcare: 24/7 hospital delivering patient-centered care.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={"/en#home-booking-strip" as Route} className="btn-primary">
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <HeroBookingBar />

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-900">Clinical Departments & Services</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePreviousServicesPage}
                disabled={totalServicePages <= 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Previous services"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNextServicesPage}
                disabled={totalServicePages <= 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Next services"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <motion.div
            key={`${servicesPage}-${servicesPerView}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
            className="grid grid-cols-3 gap-3 lg:grid-cols-6"
          >
            {visibleServiceItems.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...transition, delay: reduceMotion ? 0 : i * 0.03 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <Icon className="h-7 w-7 text-red-600 lg:h-8 lg:w-8" />
                  <p className="mt-3 text-sm font-medium text-slate-800">{service.title}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="mt-5 flex justify-end">
            <Link href="/en/specialties" className="text-sm font-semibold text-red-600 hover:text-red-700">View all</Link>
          </div>
        </div>
      </section>

      <MedicalDepartmentsSection />
      <StatsParallaxSection />
      <DoctorsInfiniteSliderSection />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 xl:px-8">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-900">Focused Advanced Care</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {focusedCare.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : i * 0.05 }}
                className="rounded-[24px] border border-slate-200 p-6"
              >
                <Icon className="h-6 w-6 text-red-600" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Patient Experience & Trust</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Quote className="h-5 w-5 text-red-400" />
                <p className="mt-3 text-sm leading-7 text-white/80">{item.note}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="inline-flex text-yellow-400"><Star className="h-4 w-4" /></span>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 xl:px-8">
        <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-6 md:grid-cols-3">
          <div className="inline-flex items-center gap-3 text-sm text-slate-700">
            <MapPin className="h-4 w-4 text-red-600" />
            Plot 40 Lugogo By Pass
          </div>
          <div className="inline-flex items-center gap-3 text-sm text-slate-700">
            <Mail className="h-4 w-4 text-red-600" />
            info@rubyhospitalkampala.com
          </div>
          <div className="inline-flex items-center gap-3 text-sm text-slate-700">
            <Phone className="h-4 w-4 text-red-600" />
            +(256) 800-388111
          </div>
        </div>
      </section>
    </main>
  );
}
