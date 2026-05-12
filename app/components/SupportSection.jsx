"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { HiOutlinePhone } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";

/* ─── team data ──────────────────────────────────────────── */
const TEAM = [
  {
    nameKey: "Mohammad Songit",
    roleKey: "Support Executive",
    descKey: "Netfee is the software with Possibilities and Songit Mia is working as a Senior Executive to achieve higher goals.",
    img:   "/images/support/mohammad-Songit.png",
    phone: "01896192221",
    fb:    "https://www.facebook.com/md.sohag.rana.561548/",
  },
  {
    nameKey: "Ibnul Zarrah",
    roleKey: "Support Executive",
    descKey: "Ibnul Zarrah has been serving in the marketing team with confidence as well as providing technical support.",
    img:   "/images/support/ibnul-zarrah.jpeg",
    phone: "01896192293",
    fb:    "https://www.facebook.com/netfeebd",
  },
  {
    nameKey: "Muhammad Abu Hasan",
    roleKey: "Support Executive",
    descKey: "Netfee is the software with Possibilities and Muhammad Abu Hasan is working as a Junior Executive to achieve higher goals.",
    img:   "/images/support/mr_abu_hasan.jpeg",
    phone: "01896192225",
    fb:    "https://www.facebook.com/muhammadabuhasann",
  },
  {
    nameKey: "Sohel Rana",
    roleKey: "Support Executive",
    descKey: "Netfee is the software with Possibilities and Sohel Rana is working as a Junior Executive to achieve higher goals.",
    img:   "/images/support/sohel rana.png",
    phone: "01896192229",
    fb:    "https://www.facebook.com/tonmoy.ahamed.693547",
  },
  {
    nameKey: "Rashidul Islam",
    roleKey: "Support Executive",
    descKey: "Netfee is a software developed by Possibilities, where Rashidul Islam is working as a Junior Executive to achieve higher goals.",
    img:   "/images/support/Rashed.jpg",
    phone: "01896192227",
    fb:    "https://www.facebook.com/netfeebd",
  },
  {
    nameKey: "Mst. Mouri Khatun",
    roleKey: "Support Executive",
    descKey: "Netfee is a software developed by Possibilities, where Ms. Mst. Mouri Khatun is working as a Junior Executive to achieve higher goals.",
    img:   "/images/support/Mouri Khatun.jpeg",
    phone: "01896192208",
    fb:    "https://www.facebook.com/netfeebd",
  },
];

/* ─── card ───────────────────────────────────────────────── */
function MemberCard({ member, idx, inView, t, font }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.09, ease: "easeOut" }}
      className="group relative bg-background rounded-3xl border border-border
                 px-6 pt-10 pb-7 flex flex-col items-center text-center
                 hover:border-primary/50
                 shadow-sm hover:shadow-2xl hover:shadow-primary/15
                 transition-all duration-300"
    >
      {/* top accent line */}
      <div className="absolute top-0 left-8 right-8 h-0.75 rounded-b-full
                      bg-primary scale-x-0 group-hover:scale-x-100
                      transition-transform duration-400 origin-center" />

      {/* circular image */}
      <div className="relative mb-6">
        {/* outer decorative ring — always visible, thicker on hover */}
        <div className="absolute -inset-2 rounded-full
                        border-[3px] border-primary/40
                        group-hover:border-4 group-hover:border-primary
                        group-hover:scale-105
                        shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30
                        transition-all duration-300" />

        {/* inner white gap ring */}
        <div className="absolute -inset-0.5 rounded-full
                        bg-background" />

        {/* image */}
        <div className="relative w-52 h-52 rounded-full overflow-hidden
                        shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20
                        transition-shadow duration-300">
          <Image
            src={member.img}
            alt={t(member.nameKey)}
            fill
            className="object-cover object-top
                       group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* name */}
      <h3 className={`text-lg font-bold text-foreground mb-1 ${font}`}>
        {t(member.nameKey)}
      </h3>

      {/* role badge */}
      <span className={`inline-flex items-center px-3 py-1 rounded-full
                        bg-primary/10 text-primary text-xs font-semibold
                        mb-4 ${font}`}>
        {t(member.roleKey)}
      </span>

      {/* description */}
      <p className={`text-sm text-muted leading-relaxed line-clamp-3 mb-6 ${font}`}>
        {t(member.descKey)}
      </p>

      {/* divider */}
      <div className="w-full h-px bg-border mb-5" />

      {/* contact row */}
      <div className="flex items-center justify-center gap-3 w-full">
        {/* phone */}
        <a
          href={`tel:${member.phone}`}
          className="flex items-center gap-2 text-sm text-muted
                     hover:text-primary transition-colors group/ph"
        >
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center
                           justify-center group-hover/ph:bg-primary/20 transition-colors">
            <HiOutlinePhone className="w-4 h-4 text-primary" />
          </span>
          <span className={`font-medium ${font}`}>{member.phone}</span>
        </a>

        {/* facebook */}
        {member.fb && (
          <a
            href={member.fb}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center
                       justify-center hover:bg-blue-500 hover:text-white
                       text-blue-500 transition-all duration-200 ml-auto"
            aria-label="Facebook"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function SupportSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="support"
      className="relative overflow-hidden bg-surface py-20 lg:py-28"
    >
      {/* bg dot grid */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.5,
           }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75
                      rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(46,135,223,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-primary/10 border border-primary/20 mb-5 ${font}`}>
            <HiOutlineCheckBadge className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              {t("Support Team")}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                          text-foreground mb-4 ${font}`}>
            {t("Our Expert Support Team")}
          </h2>

          <div className="flex items-center justify-center gap-1.5">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>
        </motion.div>

        {/* ── grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, idx) => (
            <MemberCard
              key={member.nameKey}
              member={member}
              idx={idx}
              inView={inView}
              t={t}
              font={font}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
