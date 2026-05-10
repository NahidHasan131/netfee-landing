"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
/* ─ React icon ─ */
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineDesktopComputer,
  HiOutlineChevronDown,
} from "react-icons/hi";

/* ─ nav items ─ */
const NAV_ITEMS = [
  { key: "Home",         href: "/" },
  { key: "About Us",     href: "/about-us" },
  { key: "Features",     href: "/features" },
  { key: "Pricing",      href: "/pricing" },
  { key: "Support Team", href: "/support-team" },
  { key: "Contact",      href: "/contact-us" },
  { key: "App Store",    href: "/app-store" },
  { key: "Tutorial",     href: "/tutorial" },
];

const THEME_ICONS = {
  light:  <HiOutlineSun  className="w-4 h-4" />,
  dark:   <HiOutlineMoon className="w-4 h-4" />,
  system: <HiOutlineDesktopComputer className="w-4 h-4" />,
};
const THEME_LABELS = { light: "Light", dark: "Dark", system: "System" };

const LANGS = [
  { code: "en", full: "English", flag: "/logo/eng-lang.png" },
  { code: "bn", full: "বাংলা",   flag: "/logo/bd-lan.png"  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, i18n }= useTranslation();
  const { theme, setTheme, THEMES } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const themeRef = useRef(null);
  const langRef  = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) setThemeOpen(false);
      if (langRef.current  && !langRef.current.contains(e.target))  setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const currentLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];
  const isBn = i18n.language === "bn";

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const logoSrc = isDark ? "/logo/netFee-logo-dark-mode.png" : "/logo/netfee-logo.png";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || pathname !== "/"
            ? "bg-(--background)/95 backdrop-blur-md"
            : "bg-transparent"
        }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src={logoSrc} alt="NetFee Logo" width={110} height={36} priority className="object-contain" />
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map(({ key, href }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={key}>
                    <Link href={href}
                      className={` relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                        ${isBn ? "font-bn" : "font-en"}
                        ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                      `} >
                      {t(key)}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300
                          ${isActive ? "w-[70%]" : "w-0"}
                        `}/>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-2">

              {/* Language */}
              <div className="relative" ref={langRef}>
                <button onClick={() => { setLangOpen((p) => !p); setThemeOpen(false); }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-surface hover:border-primary transition-all duration-200" aria-label="Switch language" >
                  <Image src={currentLang.flag} alt={currentLang.full} width={22} height={16} className="rounded-sm object-cover"/>
                  <HiOutlineChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200
                      ${langOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0,  scale: 1    }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }} className="absolute right-0 mt-2 w-40 rounded-xl border border-border bg-background shadow-xl overflow-hidden z-50">
                      {LANGS.map((lang) => (
                        <li key={lang.code}>
                          <button onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                              ${lang.code === "bn" ? "font-bn" : "font-en"}
                              ${i18n.language === lang.code
                                ? "bg-(--primary)/10 text-primary font-semibold" : "text-foreground hover:bg-surface"
                              }`} >
                            <Image src={lang.flag} alt={lang.full} width={22} height={16} className="rounded-sm object-cover shrink-0"/>
                            {lang.full}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme */}
              <div className="relative" ref={themeRef}>
                <button onClick={() => { setThemeOpen((p) => !p); setLangOpen(false); }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-all duration-200" aria-label="Switch theme" >
                  {THEME_ICONS[theme]}
                </button>

                <AnimatePresence>
                  {themeOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0,  scale: 1    }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-40 rounded-xl border border-border bg-background shadow-xl overflow-hidden z-50">
                      {THEMES.map((t_) => (
                        <li key={t_}>
                          <button onClick={() => { setTheme(t_); setThemeOpen(false); }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-en transition-colors
                              ${theme === t_
                                ? "bg-(--primary)/10 text-primary font-semibold" : "text-foreground hover:bg-surface"
                              }`}>
                            {THEME_ICONS[t_]}
                            {THEME_LABELS[t_]}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Hamburger */}
              <button onClick={() => setMobileOpen((p) => !p)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-all duration-200" aria-label="Toggle menu" >
                <HiOutlineMenuAlt3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)} className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm lg:hidden"/>

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{    x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-70 w-72 bg-background border-l border-border flex flex-col shadow-2xl lg:hidden">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
                <Image
                  src={logoSrc} alt="NetFee Logo" width={90} height={30} className="object-contain"/>
                <button
                  onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:text-primary hover:bg-surface transition-all duration-200" aria-label="Close menu" >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map(({ key, href }, idx) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.2 }}
                    >
                      <Link href={href}
                        className={` flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                          ${isBn ? "font-bn" : "font-en"}
                          ${isActive ? "bg-(--primary)/10 text-primary font-semibold" : "text-foreground hover:bg-surface hover:text-primary" }
                        `} >
                        {isActive && (
                          <span className="w-1 h-4 rounded-full bg-primary shrink-0" />
                        )}
                        {t(key)}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
