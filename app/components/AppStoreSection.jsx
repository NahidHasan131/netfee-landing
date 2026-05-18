"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { HiOutlineCheckBadge } from "react-icons/hi2";

/* ─── app data ───────────────────────────────────────────── */
const APPS = [
  {
    slug:       "admin-app",
    titleKey:   "app.admin.title",
    versionKey: "app.admin.version",
    descKey:    "app.admin.desc",
    img:        "/logo/netFee.png",
    apk:        "/apk/netFee_Mikrotik_filtering_14_may.apk",
    color:      "from-blue-500/10 to-primary/5",
    iconBg:     "bg-blue-500/10",
    badge:      "bg-blue-500/15 text-blue-600",
  },
  {
    slug:       "client-app",
    titleKey:   "app.client.title",
    versionKey: "app.client.version",
    descKey:    "app.client.desc",
    img:        "/logo/netFeeClient.png",
    apk:        "/apk/NetFeeCustomer.apk",
    color:      "from-emerald-500/10 to-teal-500/5",
    iconBg:     "bg-emerald-500/10",
    badge:      "bg-emerald-500/15 text-emerald-600",
  },
  {
    slug:       "sms-responder",
    titleKey:   "app.sms.title",
    versionKey: "app.sms.version",
    descKey:    "app.sms.desc",
    img:        "/logo/smsResponder.jpeg",
    apk:        "/apk/netFee_SMS_Responder_13_April.apk",
    color:      "from-violet-500/10 to-purple-500/5",
    iconBg:     "bg-violet-500/10",
    badge:      "bg-violet-500/15 text-violet-600",
  },
];

export default function AppStoreSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="app-store"
      className="relative overflow-hidden bg-surface py-20 lg:py-28"
    >
      {/* bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.4,
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
              {t("appstore.badge")}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                          text-foreground mb-4 ${font}`}>
            {t("appstore.headline")}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>

          <p className={`text-base text-muted max-w-xl mx-auto ${font}`}>
            {t("appstore.subheadline")}
          </p>
        </motion.div>

        {/* ── app cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {APPS.map((app, idx) => (
            <motion.div
              key={app.titleKey}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <div
                className={`group relative bg-linear-to-br ${app.color}
                            rounded-3xl border border-border overflow-hidden
                            hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                            transition-all duration-300 flex flex-col h-full`}
              >
                {/* top accent */}
                <div className="absolute top-0 left-8 right-8 h-0.75 rounded-b-full
                                bg-primary scale-x-0 group-hover:scale-x-100
                                transition-transform duration-400 origin-center" />

                {/* image area */}
                <div className="flex items-center justify-center pt-10 pb-6 px-8">
                  <div className={`w-28 h-28 rounded-2xl ${app.iconBg} flex items-center
                                   justify-center shadow-lg
                                   group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={app.img}
                      alt={t(app.titleKey)}
                      width={80}
                      height={80}
                      className="object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col flex-1 px-6 pb-7">
                  {/* title + version */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className={`text-lg font-bold text-foreground leading-tight ${font}`}>
                      {t(app.titleKey)}
                    </h3>
                    <span className={`shrink-0 text-xs font-bold px-2.5 py-1
                                      rounded-full ${app.badge} font-en`}>
                      {t(app.versionKey)}
                    </span>
                  </div>

                  {/* description */}
                  <p className={`text-sm text-muted leading-relaxed mb-6 flex-1 ${font}`}>
                    {t(app.descKey)}
                  </p>

                  {/* view details */}
                  <Link href={`/app-store/${app.slug}`} className={`group/btn relative overflow-hidden
                                  inline-flex items-center justify-center gap-2
                                  w-full py-3 rounded-2xl font-semibold text-sm
                                  border-2 border-primary text-primary
                                  group-hover:text-white cursor-pointer
                                  transition-colors duration-300 ${font}`}>
                    <span className="absolute inset-0 bg-primary
                                     translate-x-[-101%] group-hover:translate-x-0
                                     transition-transform duration-300 ease-out
                                     rounded-xl" />
                    <HiOutlineDownload className="relative z-10 w-4 h-4" />
                    <span className="relative z-10">
                      {isBn ? "বিস্তারিত দেখুন" : "View & Download"}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
