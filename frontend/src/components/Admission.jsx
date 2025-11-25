import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import BackgroundBlobs from "./BackgroundBlobs";

export function Admission() {
  const [ready, setReady] = useState(false);

  const images = [
    "https://www.roots.gov.sg/-/media/Roots/ich/ich-article-images/silambam/8-process_mvi-106_curavali-sutthal.ashx",
    "https://content3.jdmagicbox.com/comp/def_content_category/silambam-classes/507ff29daa-silambam-classes-3-33ggp.jpg",
    "https://content.jdmagicbox.com/v2/comp/mumbai/t7/022pxx22.xx22.240812143255.u9t7/catalogue/silambam-mumbai-mulund-west-mumbai-gyms-zq7nooe6d4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!ready)
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-700 text-xl font-semibold">
        Loading…
      </div>
    );

  return (
    <>
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-24 pb-20">

        {/* ===================== TITLE ===================== */}
        <motion.h1
          className="text-4xl md:text-5xl text-center font-extrabold text-slate-900 leading-tight"
        >
          Admissions <span className="text-blue-700">& Learning Programs</span>
        </motion.h1>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          Enroll into Kuwait Nandhavanam’s Tamil learning, Silambam martial arts,
          cultural education, and weekend enrichment programs.
        </p>

        {/* ===================== HERO IMAGES ===================== */}
        <div className="relative mt-12 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="https://res.cloudinary.com/delx0bz9t/image/upload/v1763998715/WhatsApp_Image_2025-11-24_at_8.52.19_PM_ib8wmj.jpg"
              className="rounded-3xl shadow-2xl w-full md:w-1/2 object-cover aspect-[4/3]"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              src="https://www.roots.gov.sg/-/media/Roots/ich/ich-article-images/silambam/8-process_mvi-106_curavali-sutthal.ashx"
              className="rounded-3xl shadow-2xl w-full md:w-1/2 object-cover aspect-[4/3]"
            />

          </div>
        </div>
<blockquote className="italic bg-white/70 backdrop-blur-sm text-center shadow-md rounded-xl px-6 py-4 mt-10 border-l-4 border-yellow-500 mx-auto max-w-xl">
            "Registered under the <strong>TAMIL VIRTUAL ACADEMY - <br /> Government of Tamilnadu</strong> , Chennai, India."
          </blockquote>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="/admissionform"
            target="_blank"
            className="bg-blue-700 hover:scale-105 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition"
          >
            Apply Online – Admission Form
          </a>
        </motion.div>

        {/* ===================== QUICK INFO ===================== */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["📘", "Tamil Classes"],
              ["🥋", "Silambam Training"],
              ["🗓️", "Weekend Batches"],
              ["🏫", "4 Locations"],
            ].map(([icon, title], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/90 p-6 rounded-2xl shadow-md text-center"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <p className="font-semibold text-slate-800">{title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===================== ADMISSION DETAILS ===================== */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg border border-slate-200 shadow-xl rounded-3xl p-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
              Admission Details
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>✔️ Academic year <strong>2024–2025</strong></li>
              <li>✔️ Tamil classes for Kids, Teens & Adults</li>
              <li>✔️ Silambam martial arts by certified masters</li>
              <li>✔️ Cultural & traditional learning</li>
              <li>✔️ Weekend batches</li>
              <li>✔️ Friendly child-safe environment</li>
              <li>✔️ Easy online application</li>
            </ul>
          </motion.div>
        </section>

        {/* ===================== LOCATIONS ===================== */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Tamil Class Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                name: "Mangaf",
                tamil: "மங்காப்",
                time: "9:30 AM – 11:30 AM",
                day: "Friday",
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763999806/WhatsApp_Image_2025-11-24_at_9.08.23_PM_z6mljd.jpg",
              },
              {
                name: "Abu Halifa",
                tamil: "அபுகலிபா",
                time: "10 AM – 12 PM",
                day: "Friday",
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917294/502526175_3891098774475959_4186534492424341966_n.jpg_nk5bvq.jpg",
              },
              {
                name: "Salmiya",
                tamil: "சால்மியா",
                time: "10 AM – 12 PM",
                day:" Saturday",
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763921827/502619109_3891098917809278_1226034848369323590_n.jpg_pusfej.jpg",
              },
              {
                name: "Abbasiya",
                tamil: "அப்பாசியா",
                time: "9:30 AM – 11:30 PM",
                day:" Saturday",
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763998592/WhatsApp_Image_2025-11-24_at_9.05.04_PM_jyhauz.jpg",
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-xl rounded-2xl overflow-hidden"
              >
                <img
                  src={loc.img}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {loc.name}{" "}
                    <span className="text-blue-700">({loc.tamil})</span>
                  </h3>
                  {loc.time && (
                    <p className="text-sm text-gray-600 mt-1">
                      {loc.day}, {loc.time}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ===================== SILAMBAM CAROUSEL (FIXED) ===================== */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* FIXED CAROUSEL */}
            <div className="relative w-full max-w-md h-full mx-auto overflow-hidden rounded-3xl shadow-xl">

              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: `${images.length * 100}%` }}
              >
                {images.map((src, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <img
                      src={src}
                      className="w-1/2 aspect-video object-cover"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Arrows */}
              {/* <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:scale-110"
              >
                ‹
              </button> */}

              {/* <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:scale-110"
              >
                ›
              </button> */}

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition 
                      ${currentIndex === index ? "bg-blue-600" : "bg-white/60"}`}
                  />
                ))}
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Silambam Training 🥋
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Silambam is one of Tamil Nadu’s most ancient martial arts.
                It builds stamina, speed, discipline, flexibility and confidence.
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔️ Certified trainers</li>
                <li>✔️ Safe stick drills</li>
                <li>✔️ Traditional & modern styles</li>
                <li>✔️ 2-hour weekend sessions</li>
              </ul>

              {/* <a
                href="/admissionform"
                className="mt-5 inline-block bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
              >
                Join Silambam →
              </a> */}
            </div>

          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

          <div className="space-y-4">
            {[
              ["What is the minimum age?", "Minimum age is 5 years for Tamil classes and 8 years for Silambam."],
              ["Are certificates given?", "Yes, Tamil & Silambam certificates provided."],
              ["How to enroll?", "Fill the online form — team will contact you."],
              ["Are classes only weekends?", "Yes, sessions are on Friday & Saturday."],
            ].map(([q, a], i) => (
              <details
                key={i}
                className="bg-white/80 backdrop-blur border rounded-xl p-5 shadow"
              >
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                  {q}
                </summary>
                <p className="mt-2 text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <div className="text-center mt-20">
          <a
            href="/admissionform"
            target="_blank"
            className="bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-110 hover:shadow-2xl transition"
          >
            Apply Online – Admission Form
          </a>
        </div>

      </div>

      {/* Page Background + Footer */}
      {/* <BackgroundBlobs /> */}
      <Footer />
    </>
  );
}
