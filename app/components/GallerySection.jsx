"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const IMAGES = [
  "/images/gallery/showcase1.jpg",
  "/images/gallery/showcase2.jpg",
  "/images/gallery/showcase3.jpg",
  "/images/gallery/showcase4.jpg",
  "/images/gallery/showcase5.jpg",
  "/images/gallery/showcase6.jpg",
  "/images/gallery/showcase7.jpg",
  "/images/gallery/showcase8.jpg",
  "/images/gallery/showcase9.jpg",
  "/images/gallery/showcase10.jpg",
  "/images/gallery/showcase11.jpg",
  "/images/gallery/showcase12.jpg",
  "/images/gallery/showcase13.jpg",
  "/images/gallery/showcase14.jpg",
];

export default function GallerySection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* bg dot grid */}
      {/* <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.4,
           }} /> */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75
                      rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(46,135,223,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
              Gallery
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black
                          text-foreground mb-4 ${font}`}>
            {t("Explore Our Software Gallery")}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>

          <p className={`text-base text-muted max-w-xl mx-auto ${font}`}>
            {t("Checkout our image gallery below which contains some exciting features of Netfee.")}
          </p>
        </motion.div>

        {/* ── coverflow slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={3}
            coverflowEffect={{
              rotate:       40,
              stretch:      0,
              depth:        120,
              modifier:     1.2,
              slideShadows: true,
            }}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            breakpoints={{
              0:   { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024:{ slidesPerView: 3 },
            }}
            className="gallery-swiper w-full py-10 pb-14"
          >
            {/* 14 images — enough for loop without duplicates */}
            {IMAGES.map((src, i) => (
              <SwiperSlide
                key={i}
                className="rounded-2xl overflow-hidden"
              >
                {/* padding-based border — doesn't affect slide width */}
                <div className="rounded-2xl shadow-xl overflow-hidden"
                     style={{ padding: "3px", background: "rgba(46,135,223,0.45)" }}>
                  <div className="relative w-full rounded-xl overflow-hidden"
                       style={{ height: "530px" }}>
                    <Image
                      src={src}
                      alt={`NetFee showcase ${i + 1}`}
                      fill
                      className="object-center object-fill"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* pagination rendered by Swiper inside .gallery-swiper */}
        </motion.div>

      </div>
    </section>
  );
}
