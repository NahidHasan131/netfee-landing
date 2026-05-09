"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { HiOutlineCheckBadge } from "react-icons/hi2";

/* ─── pricing data ───────────────────────────────────────── */
const PLANS = [
  { pkg: "Package1",  customers: "100",   otc: "4,000",  std: "600",   premium: "800",   olt: "1"  },
  { pkg: "Package2",  customers: "200",   otc: "4,000",  std: "1,000", premium: "1,200", olt: "1"  },
  { pkg: "Package3",  customers: "300",   otc: "4,000",  std: "1,400", premium: "1,500", olt: "2"  },
  { pkg: "Package4",  customers: "400",   otc: "4,000",  std: "1,700", premium: "1,800", olt: "3"  },
  { pkg: "Package5",  customers: "500",   otc: "6,000",  std: "2,000", premium: "2,100", olt: "3"  },
  { pkg: "Package6",  customers: "800",   otc: "6,000",  std: "2,700", premium: "3,000", olt: "5"  },
  { pkg: "Package7",  customers: "1,000", otc: "6,000",  std: "3,000", premium: "3,500", olt: "6"  },
  { pkg: "Package8",  customers: "1,500", otc: "10,000", std: "4,000", premium: "4,500", olt: "7"  },
  { pkg: "Package9",  customers: "2,000", otc: "10,000", std: "4,500", premium: "5,000", olt: "8"  },
  { pkg: "Package10", customers: "3,000", otc: "10,000", std: "6,000", premium: "6,500", olt: "10" },
  { pkg: "Package11", customers: "4,000", otc: "10,000", std: "7,000", premium: "8,000", olt: "11" },
  { pkg: "Package12", customers: "5,000", otc: "10,000", std: "8,000", premium: "9,000", olt: "12" },
];

/* pkg label: Package1 → P1 */
const pkgLabel = (key) => key.replace("Package", "P");

/* ─── table row ──────────────────────────────────────────── */
function PlanRow({ plan, idx, inView, t, font }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.05 + idx * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default transition-colors duration-200"
      style={{
        background: hovered
          ? "linear-gradient(90deg, rgba(46,135,223,0.08) 0%, rgba(46,135,223,0.04) 100%)"
          : "transparent",
      }}
    >
      {/* left accent bar on hover */}
      <td className="relative py-3 px-4 text-center">
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full
                     bg-primary transition-all duration-200"
          style={{ height: hovered ? "70%" : "0%" }}
        />
        <span className={`text-sm font-bold text-foreground ${font}`}>
          {pkgLabel(plan.pkg)}
        </span>
      </td>

      <td className={`py-3 px-4 text-center text-sm text-foreground ${font}`}>
        {t(plan.customers)}
      </td>

      <td className={`py-3 px-4 text-center text-sm text-foreground ${font}`}>
        {t(plan.otc)} TK
      </td>

      <td className={`py-3 px-4 text-center text-sm text-foreground ${font}`}>
        {t(plan.std)} TK
      </td>

      {/* premium monthly — highlighted */}
      <td className="py-3 px-4 text-center">
        <span className={`text-sm font-bold text-primary ${font}`}>
          {t(plan.premium)} TK
        </span>
      </td>

      {/* OLT — highlighted */}
      <td className="py-3 px-4 text-center">
        <span className={`text-sm font-bold text-primary ${font}`}>
          {t(plan.olt)}
        </span>
      </td>
    </motion.tr>
  );
}

export default function PricingSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* bg decoration */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.4,
           }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]
                      rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(46,135,223,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-primary/10 border border-primary/20 mb-5 ${font}`}>
            <HiOutlineCheckBadge className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              {t("Pricing")}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                          text-foreground mb-4 ${font}`}>
            {t("Great Pricing Plans")}
          </h2>

          {/* accent lines */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>

          <p className={`text-base text-muted max-w-xl mx-auto ${font}`}>
            {t("We have some exciting packages and plans for you.")}
          </p>
        </motion.div>

        {/* ── table ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              {/* ── thead ── */}
              <thead>
                <tr style={{ background: "linear-gradient(135deg, var(--primary), #1a6bbf)" }}>
                  <th rowSpan={2}
                      className={`py-3.5 px-4 text-center text-sm font-bold text-white
                                  border-r border-white/20 ${font}`}>
                    {t("Package")}
                  </th>
                  <th rowSpan={2}
                      className={`py-3.5 px-4 text-center text-sm font-bold text-white
                                  border-r border-white/20 ${font}`}>
                    {t("Customer Limit")}
                  </th>
                  <th rowSpan={2}
                      className={`py-3.5 px-4 text-center text-sm font-bold text-white
                                  border-r border-white/20 ${font}`}>
                    {t("OTC Charge")}
                  </th>
                  <th rowSpan={2}
                      className={`py-3.5 px-4 text-center text-sm font-bold text-white
                                  border-r border-white/20 ${font}`}>
                    {t("Standard Monthly Fee")}
                  </th>
                  <th colSpan={2}
                      className={`py-3.5 px-4 text-center text-sm font-bold text-white ${font}`}>
                    {t("Premium")}
                  </th>
                </tr>
                <tr style={{ background: "linear-gradient(135deg, #1a6bbf, var(--primary))" }}>
                  <th className={`py-2.5 px-4 text-center text-xs font-bold text-white
                                  border-r border-white/20 ${font}`}>
                    {t("Monthly Fee")}
                  </th>
                  <th className={`py-2.5 px-4 text-center text-xs font-bold text-white ${font}`}>
                    {t("OLT Limit")}
                  </th>
                </tr>
              </thead>

              {/* ── tbody ── */}
              <tbody className="divide-y divide-border bg-background">
                {PLANS.map((plan, idx) => (
                  <PlanRow
                    key={plan.pkg}
                    plan={plan}
                    idx={idx}
                    inView={inView}
                    t={t}
                    font={font}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`text-center font-semibold text-sm text-muted mt-5 ${font}`}
        >
          * All prices are in BDT (Bangladeshi Taka). OTC = One Time Charge.
        </motion.p>

      </div>
    </section>
  );
}
