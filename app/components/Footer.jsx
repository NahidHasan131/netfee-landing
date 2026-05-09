"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

// const NAV_LINKS = [
//   { key: "Home",         href: "/"             },
//   { key: "Features",     href: "/features"     },
//   { key: "Pricing",      href: "/pricing"      },
//   { key: "Support Team", href: "/support-team" },
//   { key: "App Store",    href: "/app-store"    },
// ];

const POLICIES = [
  { key: "Privacy Policy",         href: "/privacy-policy"       },
  { key: "Terms & Conditions",     href: "/terms-conditions"     },
  { key: "Return & Refund Policy", href: "/return-refund-policy" },
  { key: "About Us",     href: "/about-us"     },
  { key: "App Store",    href: "/app-store"    },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  /* footer is always dark — always use dark logo */
  const logoSrc = "/logo/netFee-logo-dark-mode.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#0d0d0d" }}>

      {/* bg glow */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(circle at 85% 15%, rgba(46,135,223,0.20) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
           style={{ background: "radial-gradient(circle at 15% 85%, rgba(46,135,223,0.2) 0%, transparent 60%)" }} /> */}

      {/* ══════════════════════════════════════════
          MAIN BODY
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_20%_30%] gap-12 lg:gap-14">

          {/* ── col 1: logo + tagline + email ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image src={logoSrc} alt="NetFee" width={140} height={46} className="object-contain" />
            </Link>

            <p className={`text-sm text-white leading-relaxed mb-8 ${font}`}>
              {t("footer.tagline")}
            </p>

             {/* email */}
              <div className="flex items-start gap-3">
                <span className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <HiOutlineMail className="w-8 h-8 text-primary" />
                </span>
                <div>
                  <p className={` font-semibold text-white uppercase tracking-wider mb-0.5 ${font}`}>{t("footer.email.label")}</p>
                  <a href="mailto:netfeebd@gmail.com"
                     className={` text-white hover:text-primary transition-colors ${font}`}>
                    netfeebd@gmail.com
                  </a>
                </div>
              </div>
            
          </div>

          {/* ── col 1: navigation ──
          <div>
            <h4 className={`text-xl font-extrabold text-white/90 uppercase tracking-[0.18em] mb-6 pb-2 border-b border-white/10 ${font}`}>
              {t("footer.nav.title")}
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href}
                        className={`text-sm text-white/55 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 ${font}`}>
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* ── col 2: policies ── */}
          <div>
            <h4 className={`text-xl font-extrabold text-white/90 uppercase tracking-[0.18em] mb-6 pb-2 border-b border-white/10 ${font}`}>
              {t("footer.policy.title")}
            </h4>
            <ul className="space-y-3">
              {POLICIES.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href}
                        className={`group flex items-center gap-3 text-white hover:text-primary transition-colors duration-200 ${font}`}>
                    {/* vertical line */}
                    <span className="w-0.5 h-4 rounded-full bg-primary/40
                                     group-hover:bg-primary group-hover:h-5
                                     transition-all duration-300 shrink-0" />
                    {/* text slides right on hover */}
                    <span className="group-hover:translate-x-1.5
                                     transition-transform duration-300">
                      {t(key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── col 3: contact ── */}
          <div>
            <h4 className={`text-xl font-extrabold text-white/90 uppercase tracking-[0.18em] mb-6 pb-2 border-b border-white/10 ${font}`}>
              {t("footer.contact.title")}
            </h4>

            <ul className="space-y-5">

              {/* Dhaka */}
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                </span>
                <div>
                  <p className={` font-semibold text-white uppercase tracking-wider mb-1 ${font}`}>
                    {t("Dhaka Office")}
                  </p>
                  <p className={`text-sm text-white leading-snug mb-1.5 ${font}`}>
                    {t("272/5, West Agargaon, Sher-e-Bangla Nagar, Dhaka-1207")}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <HiOutlinePhone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:01896192227"
                       className={`text-sm text-white hover:text-primary transition-colors ${font}`}>
                      01896192227
                    </a>
                    <span className="text-white">·</span>
                    <a href="tel:01896488481"
                       className={`text-sm text-white hover:text-primary transition-colors ${font}`}>
                      01896488481
                    </a>
                  </div>
                </div>
              </li>

              {/* Rajshahi */}
              <li className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                </span>
                <div>
                  <p className={`font-semibold text-white uppercase tracking-wider mb-1 ${font}`}>
                    {t("Rajshahi Office")}
                  </p>
                  <p className={`text-sm text-white leading-snug mb-1.5 ${font}`}>
                    {t("216/1, Talaimari, Kajla, Boalia, Rajshahi-6204")}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <HiOutlinePhone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:01896192221"
                       className={`text-sm text-white hover:text-primary transition-colors ${font}`}>
                      01896192221
                    </a>
                    <span className="text-white">·</span>
                    <a href="tel:01896192222"
                       className={`text-sm text-white hover:text-primary transition-colors ${font}`}>
                      01896192222
                    </a>
                  </div>
                </div>
              </li>

              {/* subscribe box
              <li className="">

              {sent ? (
                <p className={`text-sm text-primary font-semibold ${font}`}>✓ Subscribed!</p>
              ) : (
                <div className="flex rounded-xl border border-white/15 overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <div className="flex items-center pl-3 bg-transparent shrink-0">
                    <HiOutlineMail className="w-4 h-4 text-muted" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.subscribe.placeholder")}
                    className={`flex-1 min-w-0 px-2.5 py-2.5 text-sm bg-transparent text-white placeholder:text-white/35 outline-none border-none ${font}`}
                  />
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className={`px-4 py-2.5 bg-primary text-white text-xs font-semibold
                                hover:bg-primary/90 active:bg-primary/80
                                transition-colors shrink-0 ${font}`}
                  >
                    {t("footer.subscribe.btn")}
                  </button>
                </div>
              )}
            </li> */}
            </ul>
          </div>

          

        </div>
      </div>

      {/* ══════════════════════════════════════════
          PAYMENT IMAGE
      ══════════════════════════════════════════ */}
      <div className=" py-6"
           >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/footer-payment.png"
            alt="Accepted payment methods"
            width={1200}
            height={70}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/8 py-4"
           style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-xs text-white ${font}`}>
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {POLICIES.map(({ key, href }) => (
              <Link key={key} href={href}
                    className={`text-xs text-white hover:text-primary transition-colors ${font}`}>
                {t(key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
