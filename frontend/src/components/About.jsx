import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="relative pt-24 min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100 text-gray-800 px-4 sm:px-6 md:px-10 py-16 overflow-hidden">

        {/* Floating Blobs */}
        <motion.div
          className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-blue-300/20 rounded-full blur-3xl -top-10 -left-10"
          animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[22rem] sm:w-[26rem] h-[22rem] sm:h-[26rem] bg-yellow-300/20 rounded-full blur-3xl top-1/2 right-0"
          animate={{ y: [0, -60, 0], x: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* INTRO SECTION */}
        <motion.section
          className="max-w-5xl mx-auto text-center mb-24 relative z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            About <span className="text-blue-700">Nandhavanam</span>
          </h1>

          <img
            src="https://res.cloudinary.com/delx0bz9t/image/upload/v1763916232/55649770_2211823662403487_6317640375494246400_n.jpg_emjly2.jpg"
            alt="Nandhavanam Group"
            className="rounded-2xl shadow-xl mx-auto mb-10 w-full max-w-4xl aspect-[16/9] object-cover"
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The <strong>Nandhavanam Family Association (NFA)</strong> is a vibrant,
            community-driven cultural organization established in <strong>2013</strong> with
            the mission of bringing together Indians living in Kuwait.
            NFA has become a home where tradition, culture, unity and service flourish.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Our association is officially registered with the{" "}
            <strong>Embassy of India, Kuwait</strong>, ensuring trust, transparency,
            and credibility in all our community-based initiatives.
          </p>

          <blockquote className="italic bg-white/70 backdrop-blur-sm shadow-md rounded-xl px-6 py-4 mt-10 border-l-4 border-yellow-500 mx-auto max-w-xl">
            "Registered under the Indian Embassy - INDEMB/KWT/ASSN/245, <br /> Kuwait on 12th August 2013."
          </blockquote>
          <blockquote className="italic bg-white/70 backdrop-blur-sm shadow-md rounded-xl px-6 py-4 mt-10 border-l-4 border-yellow-500 mx-auto max-w-xl">
            "Registered under the <strong>TAMIL VIRTUAL ACADEMY - <br /> Government of Tamilnadu</strong> , Chennai, India."
          </blockquote>
        </motion.section>

        

        {/* WHY CHOOSE US */}
        <motion.section
          className="max-w-6xl mx-auto mb-24 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
            Why Choose Nandhavanam?
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cultural Identity",
                text: "We preserve and celebrate Tamil traditions, literature, language and festivals.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917799/485172827_3816688548583649_5940145471073072162_n.jpg_koicqu.jpg",
              },
              {
                title: "Youth Empowerment",
                text: "Our events encourage creativity, leadership, discipline, and social responsibility.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917294/502526175_3891098774475959_4186534492424341966_n.jpg_nk5bvq.jpg",
              },
              {
                title: "Community Support",
                text: "We regularly support families in need, students, senior citizens and relief efforts.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917465/87954087_2461128790806305_8079673562199228416_n_jhcwtt.jpg",
              },
              {
                title: "Women Initiatives",
                text: "Empowering women through workshops, arts, cultural participation & leadership roles.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763916951/84622318_2447027055549812_7973316032917929984_n.jpg_hytamn.jpg",
              },
              {
                title: "Quality Events",
                text: "We host large-scale festivals, competitions & cultural celebrations with high standards.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917861/84316553_2445692029016648_2420959243826888704_n.jpg_ec0ywb.jpg",
              },
              {
                title: "Embassy Registered",
                text: "Our organization is officially recognized, making every event structured & reliable.",
                image:
                  "https://res.cloudinary.com/delx0bz9t/image/upload/v1763917954/image_mhzz25.webp",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-xl border rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full aspect-[4/3] object-cover mb-4"
                />

                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* KEY ACTIVITIES */}
        <motion.section
          className="max-w-6xl mx-auto mb-24 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
            Our Key Activities
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            NFA conducts year-round initiatives that enrich culture, language,
            community responsibility, education, arts and social awareness.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1764083819/Tamil-course-300x188_vnnjs9.png",
                title: "Promotion of Tamil",
                color: "text-blue-700",
                text: "We host debates, literature competitions, speech contests and Tamil language classes.",
                text2: "Children and adults participate actively to preserve linguistic roots.",
              },
              {
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763916759/86474768_2451796538406197_5511448638640881664_n.jpg_ldciza.jpg",
                title: "Social Welfare Drives",
                color: "text-green-700",
                text: "We support educational institutions, special-needs organizations and needy families.",
              },
              {
                img: "https://res.cloudinary.com/delx0bz9t/image/upload/v1763916487/502699303_3890807627838407_5854093378436387577_n_ljidxl.jpg",
                title: "Cultural Celebrations",
                color: "text-purple-700",
                text: "From Pongal to Tamil New Year, we organize vibrant festive programs & stage events.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-xl border rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center flex flex-col"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-full aspect-[4/3] object-cover mb-4"
                />

                <h3 className={`text-xl font-bold ${item.color} mb-3`}>
                  {item.title}
                </h3>

                <p className="text-gray-700 mb-2">{item.text}</p>
                {item.text2 && (
                  <p className="text-gray-700">{item.text2}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

            {/* TESTIMONIALS */}
        <motion.section
          className="max-w-6xl mx-auto mb-24 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            What Our Members Say
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Over the years, thousands of families have been a part of our journey.
            Here’s what some of our members feel about being associated with NFA.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Priya",
                text: "My children eagerly wait for every NFA event! It truly feels like an extended family.",
              },
              {
                name: "Karthik",
                text: "The cultural and language initiatives helped my daughter stay connected to Tamil heritage.",
              },
              {
                name: "Meena",
                text: "Their charity drives and community service inspire everyone to be better human beings.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-xl p-6 border rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                <p className="font-semibold text-blue-700 text-right">– {review.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA SECTION */}
        <motion.section
          className="text-center max-w-3xl mx-auto mb-10 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Join Our Growing Family
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're looking to stay connected with Indian culture,
            participate in community service, promote Tamil identity,
            or simply meet like-minded families —
            <strong>Nandhavanam welcomes you wholeheartedly.</strong>
          </p>

          <a
            href="/admission"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
          >
            Explore Admissions
          </a>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}
