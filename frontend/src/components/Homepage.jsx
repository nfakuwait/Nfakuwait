import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import bgimage from "../assets/Kuwait-City-HD-Wallpaper-86353.jpg";
import logo from "../assets/logo.png";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isTamil, setIsTamil] = useState(false);

  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  // fetch events
  useEffect(() => {
    let mounted = true;
    fetch(`${import.meta.env.VITE_API_URL}/notifications`)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const today = new Date();
        const upcoming = [];
        const past = [];

        (data || []).forEach((event) => {
          const eventDate = new Date(event.date);
          if (!isNaN(eventDate)) {
            if (eventDate >= today) upcoming.push(event);
            else past.push(event);
          }
        });

        upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
        past.sort((a, b) => new Date(b.date) - new Date(a.date));

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    return () => (mounted = false);
  }, []);

  // pointer drag support for marquee (works for touch & mouse)
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e) => {
      isDown = true;
      el.classList.add("is-dragging");
      startX = e.pageX || (e.touches && e.touches[0].pageX) || 0;
      scrollLeft = el.scrollLeft;
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const x = e.pageX || (e.touches && e.touches[0].pageX) || 0;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onPointerUp = () => {
      isDown = false;
      el.classList.remove("is-dragging");
    };

    el.addEventListener("mousedown", onPointerDown);
    el.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    return () => {
      el.removeEventListener("mousedown", onPointerDown);
      el.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [marqueeRef.current, upcomingEvents]);

  const scrollToEvents = () => {
    const section = document.getElementById("events-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center">
        <motion.img
          src={logo}
          className="h-24 w-24 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
        <p className="mt-4 text-white text-xl font-semibold">Loading…</p>
      </div>
    );
  }

  return (
    <>
      {/* global tiny styles for marquee + scrollbar hide */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* reduce pointer grabbing cursor on small screens */
        .is-dragging { cursor: grabbing !important; }
      `}</style>

      {/* HERO */}
      <section className="relative  min-h-screen md:h-[100vh] flex items-center justify-center overflow-hidden text-white">
        <img
          src={bgimage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.img
            src={logo}
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full shadow-xl mx-auto border border-white/20"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            {isTamil ? "நந்தவனம்" : "Nandhavanam"}
          </h1>

          <p className="mt-2 text-base sm:text-lg md:text-xl opacity-90">
            {isTamil ? "தமிழ் குடும்ப சங்கம்" : "Family Association"}
          </p>

          <motion.button
            onClick={() => navigate("/about")}
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-yellow-400 text-black font-bold shadow-md hover:bg-yellow-500"
          >
            {isTamil ? "மேலும் அறிய" : "Learn More"}
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-20 cursor-pointer"
          onClick={scrollToEvents}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={40} className="text-white opacity-90" />
        </motion.div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-green-100/40 relative">
        {/* BACKGROUND TEXT */}
        <h1 className="absolute text-[60px] sm:text-[120px] lg:text-[160px] font-extrabold text-gray-300/40 top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          EVENTS
        </h1>

        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 sm:mb-12">
          Events & Announcements
        </h2>

        {/* INFINITE AUTO-SCROLL (horizontal scroll fallback on small screens) */}
        <div className="relative">
          <div ref={marqueeRef} className="no-scrollbar overflow-x-auto py-4">
            <div className="flex gap-5 items-stretch w-max animate-marquee">
              {[...upcomingEvents, ...upcomingEvents, ...upcomingEvents].map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedEvent(event)}
               className="
  min-w-[180px] 
  max-w-[210px]
  sm:min-w-[220px] 
  sm:max-w-[240px]
  md:w-64 
  lg:w-80
  lg:max-w-[700px]
  bg-white 
  rounded-3xl 
  shadow-lg 
  cursor-pointer 
  overflow-hidden 
  border 
  border-gray-200
"

               >
                  {event.image ? (
                    <img src={event.image} alt={event.event} className="w-full h- sm:h- object-cover rounded-t-3xl" />
                  ) : (
                    <div className="w-full h-48 sm:h-56 bg-slate-100 rounded-t-3xl flex items-center justify-center text-sm text-gray-400">No image</div>
                  )}

                  <div className="p-4 sm:p-5">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-gray-900 line-clamp-1">
                      {event.event}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {event.post}
                    </p>

                    <p className="mt-3 text-blue-600 font-semibold">Read More →</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* show left/right fade on large screens to indicate movement */}
          <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />
        </div>

        {/* UPCOMING */}
        <div className="relative mt-20 sm:mt-28">
          <h1 className="absolute text-[48px] sm:text-[110px] lg:text-[150px] font-extrabold text-gray-300/20 -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none">UPCOMING</h1>

          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Upcoming Events</h3>

          {upcomingEvents.length === 0 ? (
            <p className="text-center text-gray-500">No upcoming events.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedEvent(event)}
                  className="rounded-2xl bg-white shadow-md hover:shadow-xl cursor-pointer overflow-hidden border border-slate-200"
                >
                  {event.image ? (
                    <img src={event.image} alt={event.event} className="w-full h- scale-90 rounded-xl sm:h- object-cover" />
                  ) : (
                    <div className="w-full h-44 sm:h-48 bg-slate-100 flex items-center justify-center text-sm text-gray-400">No image</div>
                  )}

                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold">{event.event}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-3">{event.post}</p>
                    <button className="mt-3 text-blue-700 font-semibold">Read More →</button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* PAST EVENTS */}
        {pastEvents.length > 0 && (
          <div className="relative mt-20 sm:mt-28">
            <h1 className="absolute text-[48px] sm:text-[110px] lg:text-[150px] font-extrabold text-gray-300/20 -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none">PAST EVENTS</h1>

            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Past Events</h3>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pastEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedEvent(event)}
                  className="rounded-2xl bg-slate-100 shadow-md hover:shadow-xl cursor-pointer overflow-hidden border border-slate-200"
                >
                  {event.image ? (
                    <img src={event.image} alt={event.event} className="w-full h- sm:h- object-cover opacity-90" />
                  ) : (
                    <div className="w-full h-44 sm:h-48 bg-slate-200 flex items-center justify-center text-sm text-gray-400">No image</div>
                  )}

                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold">{event.event}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-3">{event.post}</p>
                    <button className="mt-3 text-gray-700 font-semibold">Read More →</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* MODAL (responsive) */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end  sm:items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-h-[92vh] overflow-hidden flex flex-col"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute right-3 top-3 text-2xl text-gray-700 hover:text-red-500 z-10"
                aria-label="close"
              >
                ×
              </button>

              {selectedEvent.image ? (
                <img src={selectedEvent.image} alt={selectedEvent.event} className="w-full scale-90 sm:h- object-cover" />
              ) : (
                <div className="w-full h-44 sm:h-56 bg-slate-100" />
              )}
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto">
              <h2 className="text-lg sm:text-2xl font-bold text-center mb-3">{selectedEvent.event}</h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base">{selectedEvent.post}</p>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
}
