"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center
                    overflow-hidden relative px-4 mt-24">

      {/* bg blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-125 h-125
                        rounded-full blur-[120px] opacity-30 animate-pulse"
             style={{ background: "rgba(46,135,223,0.25)" }} />
        <div className="absolute bottom-[-15%] right-[-10%] w-125 h-125
                        rounded-full blur-[100px] opacity-20"
             style={{ background: "rgba(46,135,223,0.20)" }} />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
             style={{
               backgroundImage: "radial-gradient(#2E87DF 1px, transparent 1px)",
               backgroundSize: "28px 28px",
             }} />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* 404 big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-6 select-none"
        >
          {/* shadow text behind */}
          <span className="absolute inset-0 flex items-center justify-center
                           text-[180px] sm:text-[220px] font-black
                           text-primary/8 blur-sm leading-none">
            404
          </span>
          {/* main text */}
          <span className="relative text-[120px] sm:text-[160px] font-black
                           leading-none tracking-tighter
                           bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #1a6bbf 50%, var(--primary) 100%)",
                }}>
            404
          </span>
        </motion.div>

        {/* icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20
                          flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-3 font-en">
            Page Not Found
          </h1>
          <p className="text-base text-muted leading-relaxed mb-8 font-en">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Go Home — primary solid */}
          <Link href="/"
                className="group relative overflow-hidden
                           inline-flex items-center gap-2.5 px-7 py-3.5
                           rounded-2xl font-bold text-white font-en
                           border-2 border-primary hover:text-white
                           transition-colors duration-300 shadow-lg shadow-primary/25">
            <span className="absolute inset-0 bg-primary
                             translate-x-0 group-hover:translate-x-0
                             transition-transform duration-300" />
            <HiOutlineHome className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Go to Home</span>
          </Link>

          {/* Go Back — outline */}
          <button
            onClick={() => window.history.back()}
            className="group relative overflow-hidden
                       inline-flex items-center gap-2.5 px-7 py-3.5
                       rounded-2xl font-bold font-en
                       border-2 border-primary text-primary hover:text-white
                       transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-primary
                             translate-x-[-101%] group-hover:translate-x-0
                             transition-transform duration-300 ease-out" />
            <HiOutlineArrowLeft className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Go Back</span>
          </button>
        </motion.div>

        {/* helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted mb-4 font-en uppercase tracking-widest">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Features",  href: "/features"     },
              { label: "Pricing",   href: "/pricing"      },
              { label: "App Store", href: "/app-store"    },
              { label: "Contact",   href: "/contact-us"   },
              { label: "Tutorial",  href: "/tutorial"     },
            ].map(({ label, href }) => (
              <Link key={href} href={href}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold font-en
                               border border-border text-muted
                               hover:border-primary hover:text-primary
                               transition-all duration-200">
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
