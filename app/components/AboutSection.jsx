"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineChartBar,
} from "react-icons/hi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { GrAchievement } from "react-icons/gr";


/* ─── animated counter ───────────────────────────────────── */
function Counter({ end, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(decimals)));
    }, step);
    return () => clearInterval(timer);
  }, [inView, end, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

/* ─── feature cards data ─── */
const CARDS = [
  {
    icon: <HiOutlineLightBulb className="w-6 h-6" />,
    titleKey: "about.card1.title",
    descKey:  "about.card1.desc",
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/20",
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    titleKey: "about.card2.title",
    descKey:  "about.card2.desc",
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/20",
  },
  {
    icon: <HiOutlineChartBar className="w-6 h-6" />,
    titleKey: "about.card3.title",
    descKey:  "about.card3.desc",
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/20",
  },
];

/* ─── stats ─── */
const STATS = [
  { end: 800,   suffix: "+",  decimals: 0, labelKey: "about.stats.users"  },
  { end: 99.99, suffix: "%",  decimals: 2, labelKey: "about.stats.uptime" },
  { end: 150,   suffix: "+",  decimals: 0, labelKey: "about.stats.isp"    },
];

/* ─── animation variants ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ── subtle bg decoration ── */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(46,135,223,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-125 h-125 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(107,31,139,0.07) 0%, transparent 60%)",
          }}
        />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══ TOP: headline left | body right ═══ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">

          {/* Left */}
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            {/* badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-primary/10 border border-primary/20 mb-5 ${font}`}>
              <HiOutlineCheckBadge className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                {t("about.badge")}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                            leading-[1.12] text-foreground mb-5 ${font}`}>
              {t("about.headline")}
            </h2>

            {/* accent line */}
            <div className="flex items-center gap-2 mb-0">
              <div className="w-10 h-1 rounded-full bg-primary" />
              <div className="w-4 h-1 rounded-full accent-dot" />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <p className={`text-lg font-semibold text-foreground mb-4 ${font}`}>
              {t("about.subheadline")}
            </p>
            <p className={`text-base text-muted leading-relaxed ${font}`}>
              {t("about.body")}
            </p>
          </motion.div>
        </div>

        {/* ═══ FEATURE CARDS ═══ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i * 0.5}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className={`group relative p-7 rounded-2xl border ${card.border}
                          bg-linear-to-br ${card.color}
                          hover:shadow-lg hover:-translate-y-1
                          transition-all duration-300`}
            >
              {/* icon */}
              <div className={`inline-flex items-center justify-center
                               w-12 h-12 rounded-xl bg-background
                               shadow-sm mb-5 ${card.iconColor}`}>
                {card.icon}
              </div>

              <h3 className={`text-lg font-bold text-foreground mb-3 ${font}`}>
                {t(card.titleKey)}
              </h3>
              <p className={`text-sm text-muted leading-relaxed ${font}`}>
                {t(card.descKey)}
              </p>

              {/* hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full
                              bg-primary scale-x-0 group-hover:scale-x-100
                              transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* ══ TRUSTED BANNER — bg image + overlay ══ */}
        <motion.div
          variants={fadeUp} custom={3}
          initial="hidden" animate={inView ? "visible" : "hidden"}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* bg image */}
          <Image
            src="/images/aboutImg/world-isp-banner.png"
            alt="Bangladesh ISP"
            fill
            className="object-cover"
          />

          {/* gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(46,135,223,0.75) 50%, rgba(15,23,42,0.92) 100%)",
            }}
          />

          {/* content */}
          <div className="relative z-10 px-8 py-14 lg:px-16 lg:py-14">
            <div className="grid lg:grid-cols-[60%_40%] gap-10 items-center">

              {/* left — text + stats */}
              <div>
                 <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                bg-white/10 border border-white/20 mb-5 ${font}`}>
                  <GrAchievement className="w-4 h-4 text-white" />

                  <span className="text-xs font-semibold text-white tracking-wide uppercase">
                    {t("about.track")}
                  </span>
                </div>
                <h3 className={`text-2xl sm:text-3xl lg:text-5xl font-extrabold
                                text-white leading-tight mb-4 ${font}`}>
                  {t("about.trusted")}
                </h3>
                <p className={`text-slate-300 text-base leading-relaxed
                               max-w-lg mb-10 ${font}`}>
                  {t("about.trusted.desc")}
                </p>

                {/* stats row */}
                <div className="grid grid-cols-3 gap-5 sm:gap-8 max-w-xl">
                  {STATS.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className={`text-3xl sm:text-4xl font-black text-white ${font}`}>
                        <Counter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                      </span>
                      <span className={`text-xs sm:text-sm text-slate-400 mt-1 ${font}`}>
                        {t(stat.labelKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right — image */}
              <div className="hidden lg:flex items-end justify-start h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: [0, -12, 0] } : {}}
                  transition={{
                    opacity: { duration: 0.7, delay: 0.3 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  }}
                >
                  <Image
                    src="/images/aboutImg/about-trust-right-img.png"
                    alt="About NetFee"
                    width={600}
                    height={500}
                    className="object-contain drop-shadow-2xl w-full max-h-96"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
