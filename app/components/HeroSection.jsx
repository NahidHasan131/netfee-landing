"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { HiArrowRight, HiOutlineUserCircle, HiOutlineUsers, HiChevronLeft, HiChevronRight } from "react-icons/hi";

/* ─── data ───────────────────────────────────────────────── */
const PEOPLE = [
  { src: "/images/heroImage/people1.jpg", alt: "ISP user 1" },
  { src: "/images/heroImage/people2.jpg", alt: "ISP user 2" },
  { src: "/images/heroImage/people3.jpg", alt: "ISP user 3" },
];

const SLIDES = [
  { titleKey: "hero.slide1.title", descKey: "hero.slide1.desc", img: "/images/heroImage/welcome.png"    },
  { titleKey: "hero.slide2.title", descKey: "hero.slide2.desc", img: "/images/heroImage/support.png"    },
  { titleKey: "hero.slide3.title", descKey: "hero.slide3.desc", img: "/images/heroImage/sms-module.png" },
  { titleKey: "hero.slide4.title", descKey: "hero.slide4.desc", img: "/images/heroImage/microtik.png"   },
  { titleKey: "hero.slide5.title", descKey: "hero.slide5.desc", img: "/images/heroImage/payment.png"    },
];

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";
  const [current, setCurrent] = useState(1); // 1-based display
  const total = SLIDES.length;

  return (
    <section className="relative w-full min-h-[85vh] flex items-center
                        overflow-hidden bg-background pt-16">

      {/* ── bg blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[460px] h-[460px]
                        rounded-full blur-[120px] animate-pulse"
             style={{ background: "rgba(46,135,223,0.22)" }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px]
                        rounded-full blur-[120px] animate-pulse"
             style={{ background: "rgba(107,31,139,0.18)" }} />
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.04) 100%)" }} />
      </div>

      {/* ── Swiper ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={1000}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          onRealIndexChange={(swiper) => setCurrent(swiper.realIndex + 1)}
          style={{ minHeight: "520px" }}
          className="w-full hero-swiper"
        >
          {SLIDES.map((slide, idx) => (
            <SwiperSlide key={idx} className="h-auto!">
              <div className="grid lg:grid-cols-2 gap-12 items-center pt-6 pb-2">

                {/* ── LEFT ── */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">

                  {/* badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                                   bg-surface border border-border mb-6 ${font}`}>
                    <span className="text-[10px] uppercase tracking-[2px] font-bold text-muted">
                      {t("Next-Gen ISP Solution")}
                    </span>
                  </div>

                  {/* title */}
                  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black
                                  leading-[1.1] mb-5 text-foreground ${font}`}>
                    {t(slide.titleKey)}
                  </h1>

                  {/* accent */}
                  <div className="w-14 h-1 rounded-full bg-primary mb-5" />

                  {/* desc */}
                  <p className={`text-base sm:text-lg max-w-lg mb-8 leading-relaxed text-muted ${font}`}>
                    {t(slide.descKey)}
                  </p>

                  {/* buttons */}
                  <div className="w-60 mx-auto lg:w-full flex flex-col sm:flex-row
                                  sm:flex-wrap gap-3 items-center sm:items-start">
                    <Link href="https://app.netfeebd.com/login" target="_blank" rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                                  px-7 py-3.5 rounded-2xl font-bold text-white
                                  bg-linear-to-r from-primary to-primary/80
                                  hover:from-primary/90 hover:to-primary
                                  hover:scale-[1.03] active:scale-[0.98]
                                  transition-all duration-200 shadow-lg shadow-primary/30 ${font}`}>
                      <HiOutlineUserCircle className="text-xl shrink-0" />
                      {t("Admin Login")}
                    </Link>

                    <Link href="https://customer.netfeebd.com" target="_blank" rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                                  px-7 py-3.5 rounded-2xl font-bold
                                  text-white border-2 border-secondary bg-secondary
                                  hover:bg-secondary/5 hover:text-secondary hover:border-secondary
                                  hover:scale-[1.03] active:scale-[0.98]
                                  transition-all duration-200 ${font}`}>
                      <HiOutlineUsers className="text-xl shrink-0" />
                      {t("Customer Login")}
                    </Link>

                    <Link href="https://app.netfeebd.com/register" target="_blank" rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5
                                  px-4 py-3.5 font-semibold text-sm text-primary
                                  hover:text-muted active:scale-[0.98]
                                  transition-all duration-200 group ${font}`}>
                      {t("Sign Up for the trial")}
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* trust */}
                  <div className="mt-7 flex items-center gap-3">
                    <div className="flex -space-x-2.5">
                      {PEOPLE.map((p) => (
                        <div key={p.src} className="w-9 h-9 rounded-full border-2 border-background overflow-hidden shrink-0">
                          <Image src={p.src} alt={p.alt} width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <p className={`text-sm text-muted ${font}`}>{t("Trusted by 500+ ISP Providers")}</p>
                  </div>
                </div>

                {/* ── RIGHT IMAGE ── */}
                <div className="order-1 lg:order-2 relative group flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full blur-[80px] pointer-events-none"
                       style={{ background: "radial-gradient(circle, rgba(46,135,223,0.15) 0%, transparent 70%)" }} />
                  <Image
                    src={slide.img}
                    alt={t(slide.titleKey)}
                    width={600}
                    height={500}
                    priority={idx === 0}
                    className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-full
                               h-auto object-contain drop-shadow-2xl
                               transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Controls: ← 01 / 05 → ── */}
        <div className="flex items-center justify-center gap-5 mt-6">

          {/* prev */}
          <button
            className="hero-prev group flex items-center gap-2
                       text-muted hover:text-primary
                       transition-colors duration-200 cursor-pointer"
            aria-label="Previous slide"
          >
            <span className="w-8 h-8 rounded-full border border-border bg-surface
                             flex items-center justify-center
                             group-hover:border-primary group-hover:bg-primary/5
                             transition-all duration-200">
              <HiChevronLeft className="w-4 h-4" />
            </span>
          </button>

          {/* counter */}
          <div className="flex items-center gap-2 font-en text-sm font-semibold select-none">
            <span className="text-primary tabular-nums w-5 text-center">
              {String(current).padStart(2, "0")}
            </span>
            <span className="text-border">/</span>
            <span className="text-muted tabular-nums w-5 text-center">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* next */}
          <button
            className="hero-next group flex items-center gap-2
                       text-muted hover:text-primary
                       transition-colors duration-200 cursor-pointer"
            aria-label="Next slide"
          >
            <span className="w-8 h-8 rounded-full border border-border bg-surface
                             flex items-center justify-center
                             group-hover:border-primary group-hover:bg-primary/5
                             transition-all duration-200">
              <HiChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
