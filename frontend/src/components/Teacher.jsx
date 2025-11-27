import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import Footer from "./Footer";

export default function Teacher() {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);

  // SAMPLE FALLBACK DATA
  const sampleData = [
    {
      _id: "t001",
      mname: "Ahamed Jamil",
      email: "ahamed@example.com",
      position: "Math Teacher",
      description:
        "A passionate mathematics teacher with 10+ years of experience helping students excel in arithmetic and algebra.",
      image:
        "https://res.cloudinary.com/delx0bz9t/image/upload/v1764263696/user_on76lm.png",
      location: "mangaf",
    },
    {
      _id: "t002",
      mname: "Nausheen Farzana",
      email: "nausheen@example.com",
      position: "Science Teacher",
      description:
        "Encourages creative science learning with practical experiments and easy explanations.",
      image:
        "https://res.cloudinary.com/delx0bz9t/image/upload/v1764263696/user_on76lm.png",
      location: "mangaf",
    },
    {
      _id: "t003",
      mname: "Mohammed Riyas",
      email: "riyas@example.com",
      position: "English Teacher",
      description:
        "Expert in grammar, spoken English, and creative writing with a student-friendly approach.",
      image:
        "https://res.cloudinary.com/delx0bz9t/image/upload/v1764263696/user_on76lm.png",
      location: "abasiya",
    },
    {
      _id: "t004",
      mname: "Suhail Khan",
      email: "suhail@example.com",
      position: "Computer Trainer",
      description:
        "Specialized in teaching basic computer skills and coding for kids.",
      image:
        "https://res.cloudinary.com/delx0bz9t/image/upload/v1764263696/user_on76lm.png",
      location: "salmiya",
    },
    {
      _id: "t005",
      mname: "Shamina Beevi",
      email: "shamina@example.com",
      position: "Hindi Teacher",
      description:
        "Dedicated Hindi teacher helping students improve vocabulary and writing.",
      image:
        "https://res.cloudinary.com/delx0bz9t/image/upload/v1764263696/user_on76lm.png",
      location: "abuhalifa",
    },
  ];

  // FETCH TEACHERS
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/teacher`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch teachers");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTeacher(data);
        } else {
          setTeacher(sampleData);
        }
      })
      .catch(() => {
        setTeacher(sampleData);
      })
      .finally(() => setLoading(false));
  }, []);

  // GROUP TEACHERS
  const grouped = {
    Mangaf: teacher.filter((t) => t.location?.toLowerCase() === "mangaf"),
    Abasiya: teacher.filter((t) => t.location?.toLowerCase() === "abasiya"),
    Salmiya: teacher.filter((t) => t.location?.toLowerCase() === "salmiya"),
    Abuhalifa: teacher.filter((t) => t.location?.toLowerCase() === "abuhalifa"),
  };

  // RENDER SECTION
  const renderSection = (placeName, list) => (
    <div className="mb-20">
      <motion.h2
        className="text-3xl font-extrabold text-blue-700 text-center mb-10 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {placeName}
      </motion.h2>

      <motion.div
        className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
        viewport={{ once: true }}
      >
        {list.map((item, idx) => (
          <motion.div
            key={item._id || idx}
            className="group relative rounded-xl overflow-hidden bg-white/80 backdrop-blur-xl shadow-md hover:shadow-xl border border-slate-200 transition-all duration-500"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[3/5] sm:aspect-[3/4] overflow-hidden bg-blue-50">
              <motion.img
                src={item.image}
                alt={item.mname}
                className="w-full h-full object-cover transition-transform scale-90 duration-700 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3 sm:p-6 text-center">
              <h2 className="text-sm sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                {item.mname}
              </h2>

              <p className="text-gray-600 mt-1 sm:mt-3 text-xs sm:text-sm leading-relaxed italic line-clamp-3">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {list.length === 0 && (
        <p className="text-center text-gray-500 italic mt-5">
          No teachers available in this location.
        </p>
      )}
    </div>
  );

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100 pt-24 px-6 overflow-hidden">
        <BackgroundBlobs />

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Teacher's <span className="text-blue-700">Committee</span>
        </motion.h1>

        {loading && (
          <p className="text-center text-gray-500 text-lg animate-pulse">
            Loading Teachers...
          </p>
        )}

        {!loading && (
          <div className="space-y-24">
            {renderSection("Mangaf", grouped.Mangaf)}
            {renderSection("Abasiya", grouped.Abasiya)}
            {renderSection("Salmiya", grouped.Salmiya)}
            {renderSection("Abuhalifa", grouped.Abuhalifa)}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
