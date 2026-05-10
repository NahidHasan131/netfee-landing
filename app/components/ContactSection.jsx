"use client";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const OFFICES = [
  {
    nameKey:    "Dhaka Office",
    addressKey: "272/5, West Agargaon, Sher-e-Bangla Nagar, Dhaka-1207",
    phones:     ["01896192227", "01896488481"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0350680158153!2d90.36674007239229!3d23.781765540405996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15e9f448fe7%3A0xea077001b58b5803!2sShunno%20IT%20Dhaka%20Office!5e0!3m2!1sen!2sbd!4v1727696934572!5m2!1sen!2sbd",
  },
  {
    nameKey:    "Rajshahi Office",
    addressKey: "216/1, Talaimari, Kajla, Boalia, Rajshahi-6204",
    phones:     ["01896192221", "01896192222"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.5991727393284!2d88.6215621744123!3d24.360451365084792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef00627d4f99%3A0xe73eeb888ab08b14!2sShunno%20IT%20Rajshahi%20Office!5e0!3m2!1sen!2sbd!4v1727696751423!5m2!1sen!2sbd",
  },
];

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.35,
           }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
                      rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(46,135,223,0.09) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-primary/10 border border-primary/20 mb-5 ${font}`}>
            <HiOutlineCheckBadge className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              {t("Contact")}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                          text-foreground mb-4 ${font}`}>
            {t("Feel free to contact us at anytime.")}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-6">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>

          {/* email pill */}
          <a href="mailto:netfeebd@gmail.com"
             className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
                         bg-surface border border-border
                         hover:border-primary hover:shadow-lg hover:shadow-primary/10
                         transition-all duration-200 group ${font}`}>
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center
                             justify-center group-hover:bg-primary/20 transition-colors">
              <HiOutlineMail className="w-4 h-4 text-primary" />
            </span>
            <span className="text-sm font-semibold text-foreground
                             group-hover:text-primary transition-colors">
              netfeebd@gmail.com
            </span>
          </a>
        </motion.div>

        {/* ── offices ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={office.nameKey}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
              className="group rounded-3xl overflow-hidden border border-border
                         bg-surface shadow-sm
                         hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                         transition-all duration-300"
            >
              {/* map — top */}
              <div className="relative overflow-hidden border-b-2 border-primary/30"
                   style={{ height: "260px" }}>
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t(office.nameKey)}
                  className="w-full h-full"
                />
                {/* gradient fade into card */}
                <div className="absolute bottom-0 left-0 right-0 h-12
                                bg-linear-to-t from-surface to-transparent
                                pointer-events-none" />
              </div>

              {/* info — bottom */}
              <div className="p-6 pt-5">
                {/* office name with left accent */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 rounded-full bg-primary shrink-0" />
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center
                                     justify-center shrink-0">
                      <HiOutlineLocationMarker className="w-5 h-5 text-primary" />
                    </span>
                    <h3 className={`text-lg font-bold text-foreground ${font}`}>
                      {t(office.nameKey)}
                    </h3>
                  </div>
                </div>

                {/* address */}
                <p className={`text-sm text-muted leading-relaxed mb-5 pl-4 ${font}`}>
                  {t(office.addressKey)}
                </p>

                {/* phone chips */}
                <div className="flex flex-wrap gap-3 pl-4">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl
                                 bg-background border border-border
                                 hover:border-primary hover:bg-primary/5
                                 transition-all duration-200 group/ph"
                    >
                      <HiOutlinePhone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className={`text-sm font-medium text-muted
                                        group-hover/ph:text-primary transition-colors font-en`}>
                        {phone}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
