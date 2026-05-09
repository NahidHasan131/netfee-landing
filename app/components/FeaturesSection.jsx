"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { useTheme } from "../providers/ThemeProvider";

// icons
import { FaPhoneVolume, FaUsersBetweenLines, FaCommentSms,
         FaHandshakeSimple, FaMobileRetro, FaServer, FaStreetView } from "react-icons/fa6";
import { IoNotifications, IoDocumentTextSharp, IoSettingsSharp } from "react-icons/io5";
import { MdVisibility, MdEmail, MdPeopleAlt,
         MdManageAccounts, MdPayments, MdOutlineNetworkWifi } from "react-icons/md";
import { LuSquareUserRound } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { RiRobot2Fill } from "react-icons/ri";
import { SiDiagramsdotnet } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";

/* ─── features + positions (from demo code) ─────────────── */
const FEATURES = [
  { key: "Reports",                            Icon: TbReportSearch,        color: "text-indigo-500",  bg: "bg-indigo-500/10"  },
  { key: "User Friendly",                      Icon: FaUsersBetweenLines,   color: "text-green-500",   bg: "bg-green-500/10"   },
  { key: "Notifications",                      Icon: IoNotifications,       color: "text-yellow-500",  bg: "bg-yellow-500/10"  },
  { key: "Billing Management",                 Icon: IoDocumentTextSharp,   color: "text-orange-500",  bg: "bg-orange-500/10"  },
  { key: "Accessibility",                      Icon: MdVisibility,          color: "text-purple-500",  bg: "bg-purple-500/10"  },
  { key: "Customer Support Panel",             Icon: LuSquareUserRound,     color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Client Management",                  Icon: MdPeopleAlt,           color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Client Support & Ticketing",         Icon: MdEmail,               color: "text-cyan-500",    bg: "bg-cyan-500/10"    },
  { key: "Support 24/7",                       Icon: FaPhoneVolume,         color: "text-blue-500",    bg: "bg-blue-500/10"    },
  { key: "SMS Module",                         Icon: FaCommentSms,          color: "text-rose-500",    bg: "bg-rose-500/10"    },
  { key: "Basic Client Portal",                Icon: RiRobot2Fill,          color: "text-teal-500",    bg: "bg-teal-500/10"    },
  { key: "Accounts Management",                Icon: MdManageAccounts,      color: "text-violet-500",  bg: "bg-violet-500/10"  },
  { key: "Reseller Panel + App",               Icon: FaHandshakeSimple,     color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Client Mobile App",                  Icon: FaMobileRetro,         color: "text-green-500",   bg: "bg-green-500/10"   },
  { key: "Web Hook Payment System",            Icon: MdPayments,            color: "text-pink-500",    bg: "bg-pink-500/10"    },
  { key: "PPPoE & Static",                     Icon: MdOutlineNetworkWifi,  color: "text-sky-500",     bg: "bg-sky-500/10"     },
  { key: "Salary Management",                  Icon: IoSettingsSharp,       color: "text-amber-500",   bg: "bg-amber-500/10"   },
  { key: "Multiple Mikrotik Add",              Icon: FaServer,              color: "text-slate-500",   bg: "bg-slate-500/10"   },
  { key: "Customer Live Bandwidth",            Icon: FaStreetView,          color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Network Diagram",                    Icon: SiDiagramsdotnet,      color: "text-purple-500",  bg: "bg-purple-500/10"  },
  { key: "Payment Gateway Integration",        Icon: LuDatabaseBackup,      color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "bKash Instant Notification(Webhook)",Icon: MdPayments,            color: "text-pink-500",    bg: "bg-pink-500/10"    },
];

/* positions — scaled 1.4× from demo to give cards breathing room */
const POSITIONS = [
  { x: -214, y:  -64 },   //reports
  { x:  112, y: -224 },
  { x: -210, y:  112 },
  { x:  238, y:   98 },
  { x:  -84, y:  238 },
  { x:  182, y:  420 },
  { x:  -70, y:  420 },
  { x:  238, y:  -70 },
  { x: -430, y: -170 },   /* Support 24/7  */
  { x:  406, y: -224 },
  { x:  112, y:  252 },
  { x: -155, y: -392 },   //account
  { x:  364, y:  294 },
  { x: -392, y:  200 },
  { x:   56, y: -392 },
  { x: -446, y:  15 },    //PPPoE
  { x:  448, y:  126 },
  { x:  -70, y: -224 },
  { x:  266, y: -354 },
  { x: -280, y:  350 },
  { x:  462, y:  -70 },
  { x: -350, y: -336 },   /* bKash */
];

export default function FeaturesSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";
  const { theme } = useTheme();

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const logoSrc = isDark ? "/logo/netFee-logo-dark-mode.png" : "/logo/netfee-logo.png";

  return (
    <section
      ref={ref}
      id="features"
      className="relative overflow-hidden bg-surface py-20 lg:py-28"
    >
      {/* dot grid bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.5,
           }} />

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
              {t("features.badge")}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 ${font}`}>
            {t("features.headline")}
          </h2>
          <p className={`text-base sm:text-lg text-muted max-w-2xl mx-auto ${font}`}>
            {t("features.subheadline")}
          </p>
        </motion.div>

        {/* ══ DESKTOP — orbit layout ══ */}
        <div className="hidden md:flex items-center justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: "1100px", height: "1000px" }}
          >
            {/* center logo circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute z-10 flex flex-col items-center justify-center
                         w-40 h-40 rounded-full
                         bg-background border-4 border-primary/25
                         shadow-2xl shadow-primary/20"
            >
              <Image
                src={logoSrc}
                alt="NetFee"
                width={110}
                height={70}
                className="object-contain"
              />
              <p className={`text-[10px] text-muted mt-1 font-semibold ${font}`}>
                ISP Billing
              </p>
            </motion.div>

            {/* feature cards — fly in from outside */}
            {FEATURES.map((feat, i) => {
              const { x, y } = POSITIONS[i];
              const dist = Math.sqrt(x * x + y * y);
              const startX = (x / dist) * (dist + 220);
              const startY = (y / dist) * (dist + 220);

              return (
                <motion.div
                  key={feat.key}
                  initial={{ x: startX, y: startY, opacity: 0, scale: 0.75 }}
                  animate={inView ? { x, y, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.9, delay: i * 0.04, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, zIndex: 30 }}
                  className="absolute z-20 flex flex-col items-center gap-2
                             w-41 text-center cursor-default border border-border p-4 rounded-2xl
                           hover:border-primary/40 hover:shadow-md
                           transition-all duration-200"
                >
                  {/* card */}
                  <div className={`w-13 h-13 rounded-full flex items-center justify-center
                                   border border-border bg-background
                                   shadow-md hover:shadow-lg hover:border-primary/40
                                   transition-all duration-200
                                   ${feat.bg}`}>
                    <feat.Icon className={`text-2xl ${feat.color}`} />
                  </div>
                  <p className={`text-sm font-semibold text-foreground leading-tight ${font}`}>
                    {t(feat.key)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE — logo + grid
        ══════════════════════════════════════════ */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-35 h-20 rounded-2xl bg-background border-4
                            border-primary/20 shadow-xl flex flex-col items-center justify-center">
              <Image src={logoSrc} alt="NetFee" width={80} height={52} className="object-contain" />
              <p className={`text-[10px] text-muted mt-2 font-semibold ${font}`}>
                ISP Billing
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl
                           bg-background border border-border text-center
                           hover:border-primary/40 hover:shadow-md
                           transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                                 ${feat.bg}`}>
                  <feat.Icon className={`text-xl ${feat.color}`} />
                </div>
                <p className={`text-xs font-semibold text-foreground leading-tight ${font}`}>
                  {t(feat.key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
