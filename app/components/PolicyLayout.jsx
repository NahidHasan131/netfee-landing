"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HiArrowLeft } from "react-icons/hi";

export default function PolicyLayout({ title, lastUpdated, children }) {
  const { i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* back button */}
        <Link href="/"
              className="inline-flex items-center gap-2 text-sm text-muted
                         hover:text-primary transition-colors mb-8 font-en">
          <HiArrowLeft className="w-4 h-4" />
          {isBn ? "হোমে ফিরুন" : "Back to Home"}
        </Link>

        {/* header */}
        <div className="mb-10 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide uppercase font-en">
              Legal
            </span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-black text-foreground mb-3
                          ${isBn ? "font-bn" : "font-en"}`}>
            {title}
          </h1>
          {lastUpdated && (
            <p className={`text-sm text-muted ${isBn ? "font-bn" : "font-en"}`}>
              {isBn ? "সর্বশেষ আপডেট:" : "Last updated:"} {lastUpdated}
            </p>
          )}
        </div>

        {/* content */}
        <div className={`prose-custom ${isBn ? "font-bn" : "font-en"}`}>
          {children}
        </div>

      </div>
    </div>
  );
}
