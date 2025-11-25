import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import Footer from "./Footer";

export default function Gallery() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/members`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch members");
        return res.json();
      })
      .then((data) => setMembers(Array.isArray(data) ? data : []))
      .catch(() => setError("Could not load members"))
      .finally(() => setLoading(false));
  }, []);

  // ------------------ Name Matcher ------------------
  function byName(name) {
    return members.find((m) =>
      m.mname?.toLowerCase().includes(name.toLowerCase())
    );
  }

  // ------------------ Rows ------------------
  const row1 = [byName("Senthai Ravi"), byName("Devi Ravi")];
  const row2 = [byName("Makesh"), byName("Gopukumar"), byName("Ganesh")];
  const row3 = [
    byName("Alavudeen"),
    byName("Balamurugan"),
    byName("Saravanan"),
  ];
  const row4 = [byName("Guna"), byName("Mr. Murugan")];

  // ------------------ Active Committee ------------------
  const committeeRow1 = [
    byName("Asok"),
    byName("Romelues"),
    byName("Namachsivayam"),
    byName("Tamilmaran"),
  ];

  const committeeRemaining = [
    "Vijayakala Saravanan",
    "Vijayalakshmi Murugan",

    "Pradeepa Vignesh",

    "Mangayarkarasi Jhon Sathesh",
  ].map((name) => byName(name));

  // ------------------ Member Card ------------------
  function MemberCard({ item }) {
    if (!item) return null;

    return (
      <motion.div
        className="group relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl 
        shadow-md hover:shadow-xl border border-slate-200 transition-all duration-500 
        flex flex-col h-full"
        whileHover={{ y: -6, scale: 1.02 }}
      >
        <div className="relative w-full h-72 overflow-hidden bg-blue-50">
          <motion.img
            src={
              item.image || "https://via.placeholder.com/300x200?text=Member"
            }
            alt={item.mname || "Unnamed Member"}
            className="w-full h-full object-contain rounded-2xl scale-100"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t 
            from-slate-900/50 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition duration-500"
          ></div>
        </div>

        <div className="p-6 text-center flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
            {item.mname}
          </h2>

          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mt-2">
            {!["Active committee", "Active Committee"].includes(item.position)
              ? item.position
              : ""}
          </p>

          <p className="text-gray-600 mt-3 text-sm italic line-clamp-3 flex-grow">
            {item.description || "No description available."}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100 pt-24 px-6">
        {/* <BackgroundBlobs />  */}

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Executive{" "}
          <span className="text-blue-700">
            Committee
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#5e15fa"
              strokeWidth="3"
            />
          </span>
        </motion.h1>

        {loading && (
          <p className="text-center text-gray-500 text-lg animate-pulse">
            Loading members…
          </p>
        )}

        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {!loading && !error && (
          <>
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
              {row1.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
              {row2.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
              {row3.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
              {row4.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>

            {/* Active Members */}
            <h2 className="text-3xl font-bold text-center text-slate-700 mt-20 mb-10">
              Commitee{" "}
              <span className="relative">
                Members
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-12">
              {committeeRow1.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-20">
              {committeeRemaining.map((item, idx) => (
                <MemberCard key={idx} item={item} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
