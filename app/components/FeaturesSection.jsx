"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { useTheme } from "../providers/ThemeProvider";

import { FaPhoneVolume, FaUsersBetweenLines, FaCommentSms,
         FaHandshakeSimple, FaMobileRetro, FaServer, FaStreetView, FaLanguage } from "react-icons/fa6";
import { IoNotifications, IoDocumentTextSharp, IoSettingsSharp } from "react-icons/io5";
import { MdVisibility, MdEmail, MdPeopleAlt,
         MdManageAccounts, MdPayments, MdOutlineNetworkWifi } from "react-icons/md";
import { LuSquareUserRound } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { RiRobot2Fill } from "react-icons/ri";
import { SiDiagramsdotnet } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdOutlineRouter } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";


/* ───  features ────────────────────────────────────────── */
const FEATURES = [
  { key: "Billing Management",           Icon: IoDocumentTextSharp,   color: "text-orange-500",  bg: "bg-orange-500/10"  },
  { key: "User Friendly",                Icon: FaUsersBetweenLines,   color: "text-green-500",   bg: "bg-green-500/10"   },
  { key: "Notifications",                Icon: IoNotifications,       color: "text-yellow-500",  bg: "bg-yellow-500/10"  },
  { key: "Reports",                      Icon: TbReportSearch,        color: "text-indigo-500",  bg: "bg-indigo-500/10"  },
  { key: "Accessibility",                Icon: MdVisibility,          color: "text-purple-500",  bg: "bg-purple-500/10"  },
  { key: "Customer Support",             Icon: LuSquareUserRound,     color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Client Management",            Icon: MdPeopleAlt,           color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Support & Ticketing",          Icon: MdEmail,               color: "text-cyan-500",    bg: "bg-cyan-500/10"    },
  { key: "Support 24/7",                 Icon: FaPhoneVolume,         color: "text-blue-500",    bg: "bg-blue-500/10"    },
  { key: "SMS Module",                   Icon: FaCommentSms,          color: "text-rose-500",    bg: "bg-rose-500/10"    },
  { key: "Client Portal",                Icon: RiRobot2Fill,          color: "text-teal-500",    bg: "bg-teal-500/10"    },
  { key: "Accounts Management",          Icon: MdManageAccounts,      color: "text-violet-500",  bg: "bg-violet-500/10"  },
  { key: "Reseller Panel",               Icon: FaHandshakeSimple,     color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Mobile App",                   Icon: FaMobileRetro,         color: "text-green-500",   bg: "bg-green-500/10"   },
  { key: "Web Hook Payment",             Icon: MdPayments,            color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  { key: "PPPoE & Static",               Icon: MdOutlineNetworkWifi,  color: "text-sky-500",     bg: "bg-sky-500/10"     },
  { key: "Salary Management",            Icon: IoSettingsSharp,       color: "text-amber-500",   bg: "bg-amber-500/10"   },
  { key: "Multiple Mikrotik",            Icon: FaServer,              color: "text-slate-500",   bg: "bg-slate-500/10"   },
  { key: "Customer Live Bandwidth",      Icon: FaStreetView,          color: "text-primary",     bg: "bg-primary/10"     },
  { key: "Network Diagram",              Icon: SiDiagramsdotnet,      color: "text-purple-500",  bg: "bg-purple-500/10"  },
  { key: "Payment Gateway",              Icon: LuDatabaseBackup,      color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { key: "bKash Instant Notification",   Icon: AiFillNotification,          color: "text-green-600",   bg: "bg-green-600/10"   },
  { key: "OLT Integration",              Icon: MdOutlineRouter,       color: "text-blue-600",    bg: "bg-blue-600/10"    },
  { key: "Bangla & English",  Icon: FaLanguage,          color: "text-rose-500",    bg: "bg-rose-500/10"    },
];

/* ─── positions — each has a comment with feature name ──── */
const POSITIONS = [
  { x: -214, y:  -44  }, /* 0  Billing Management               */
  { x:  112, y: -194  }, /* 1  User Friendly                    */
  { x: -210, y:  102  }, /* 2  Notifications                    */
  { x:  238, y:  102  }, /* 3  Reports                          */
  { x:  -70, y:  240  }, /* 4  Accessibility                    */
  { x:  112, y:  420  }, /* 5  Customer Support Panel           */
  { x:  -72, y:  420  }, /* 6  Client Management                */
  { x:  238, y:  -44  }, /* 7  Client Support & Ticketing       */
  { x: -380, y: -190  }, /* 8  Support 24/7                     */
  { x:  410, y: -190  }, /* 9  SMS Module                       */
  { x:  112, y:  240  }, /* 10  Client Portal              */
  { x: -72,  y: -392  }, /* 11 Accounts Management              */
  { x:  300, y:  370  }, /* 12 Reseller Panel + App             */
  { x: -380, y:  240  }, /* 13 Mobile App                */
  { x:  108, y: -392  }, /* 14 Web Hook Payment System          */
  { x: -446, y:  100  }, /* 15 PPPoE & Static                   */
  { x:  462, y:  106  }, /* 16 Salary Management                */
  { x:  -70, y: -194  }, /* 17 Multiple Mikrotik Add            */
  { x:  296, y: -336  }, /* 18 Customer Live Bandwidth          */
  { x: -260, y:  370  }, /* 19 Network Diagram                  */
  { x:  462, y:  -40  }, /* 20 Payment Gateway       */
  { x: -260, y: -336  }, /* 21 bKash Instant Notification       */
  { x:  410, y:  240  }, /* 22 OLT Limit  ← opposite of 15 PPPoE */
  { x: -440, y: -40   }, /* 23 Language (Bangla & English) ← opposite of 22 OLT */
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
      {/* <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.5,
           }} /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
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

        {/* ══ DESKTOP ══ */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative flex items-center justify-center"
               style={{ width: "1100px", height: "1000px" }}>

            {/* center logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px 8px rgba(46,135,223,0.35), 0 0 80px 20px rgba(46,135,223,0.15)",
              }}
              className="absolute z-10 flex flex-col items-center justify-center
                         w-40 h-40 rounded-full cursor-pointer
                         bg-background border-4 border-primary/25
                         shadow-2xl shadow-primary/20
                         transition-colors duration-300 hover:border-primary/60"
            >
              <Image src={logoSrc} alt="NetFee" width={110} height={70} className="object-contain" />
              <p className={`text-[10px] text-muted mt-1 font-semibold ${font}`}>ISP Billing</p>
            </motion.div>

            {/* feature cards */}
            {FEATURES.map((feat, i) => {
              const { x, y } = POSITIONS[i];
              const dist   = Math.sqrt(x * x + y * y);
              const startX = (x / dist) * (dist + 220);
              const startY = (y / dist) * (dist + 220);

              return (
                <motion.div
                  key={feat.key}
                  initial={{ x: startX, y: startY, opacity: 0, scale: 0.75 }}
                  animate={inView ? { x, y, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.9, delay: i * 0.04, ease: "easeOut" }}
                  whileHover={{ zIndex: 30 }}
                  className="absolute z-20 flex flex-col items-center gap-2
                             w-37 text-center cursor-default"
                >
                  {/* gradient card — same style as about cards */}
                  <div className={`w-full flex flex-col items-center justify-between gap-2 p-3.5
                                   rounded-2xl border border-primary/15
                                   bg-linear-to-br from-primary/5 via-primary/5 to-background
                                   shadow-sm hover:shadow-lg hover:shadow-primary/15
                                   hover:border-primary/40 hover:-translate-y-0.5
                                   transition-all duration-300 ease-out`}
                       style={{ minHeight: "96px" }}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                                     ${feat.bg} shrink-0`}>
                      <feat.Icon className={`text-xl ${feat.color}`} />
                    </div>
                    <p className={`text-sm font-semibold text-foreground leading-tight ${font}`}>
                      {t(feat.key)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══ MOBILE ══ */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px 6px rgba(46,135,223,0.30), 0 0 60px 16px rgba(46,135,223,0.12)",
            }}
            className="mb-8 cursor-pointer rounded-2xl overflow-hidden"
          >
            <div className="w-full rounded-2xl bg-background border-4
                            border-primary/20 hover:border-primary/60
                            shadow-xl flex flex-col items-center justify-center py-6
                            transition-colors duration-300">
              <Image src={logoSrc} alt="NetFee" width={80} height={52} className="object-contain" />
              <p className={`text-[10px] text-muted mt-2 font-semibold ${font}`}>ISP Billing</p>
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
                           border border-primary/15
                           bg-linear-to-br from-primary/15 via-primary/5 to-background
                           text-center hover:border-primary/35 hover:shadow-md
                           transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${feat.bg}`}>
                  <feat.Icon className={`text-xl ${feat.color}`} />
                </div>
                <p className={`text-xs font-semibold text-foreground leading-tight ${font}`}>
                  {t(feat.key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* count badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                           bg-primary text-white text-sm font-semibold
                           shadow-lg shadow-primary/25 ${font}`}>
            <HiOutlineCheckBadge className="w-4 h-4" />
            {FEATURES.length}+ {t("features.badge")}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
