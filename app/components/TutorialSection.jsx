"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { HiOutlineX, HiOutlineArrowsExpand } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

/* ─── video data ─────────────────────────────────────────── */
const WEB = [
  { en: "NetFee Admin Panel Tutorial",              bn: "নেটফি অ্যাডমিন প্যানেল টিউটোরিয়াল",              url: "https://youtu.be/7DVn0mQGGH0?si=ANRoTha5-wBX-XSx" },
  { en: "Netfee Manager Panel Web Version",         bn: "নেটফি ম্যানেজার প্যানেল ওয়েব ভার্সন",             url: "https://youtu.be/mS8s6ocgkvM?si=MvI60pOV48Z2k8OV" },
  { en: "Netfee Reseller Panel Web Version",        bn: "নেটফি রিসেলার প্যানেল ওয়েব ভার্সন",              url: "https://youtu.be/jSiRwaSvT-s?si=A6H6MFKKPcNtW4EC" },
  { en: "How to use Netfee web version on mobile",  bn: "নেটফি ওয়েব ভার্সন কিভাবে মোবাইলে ব্যাবহার করবেন", url: "https://youtu.be/sVvctxnNBC0?si=AX6AdxVUJT0rTwbP" },
  { en: "Netfee Collector Panel Tutorial",          bn: "নেটফি কালেক্টর প্যানেল টিউটরিয়াল",               url: "https://youtu.be/PVW7x0t_vhY?si=TDRGdnx5nOvhNLRx" },
];
const CUSTOMER = [
  { en: "Use of the Netfee customer app",           bn: "নেটফি গ্রাহক অ্যাপ এর ব্যবহার",                  url: "https://youtu.be/AzvaUVoqaEo?si=jmrRhepwCtbfK_NI" },
  { en: "How to install the Netfee customer app?",  bn: "নেটফি গ্রাহক অ্যাপ কিভাবে ইন্সটল করবেন?",        url: "https://youtu.be/5p_wx7vPqAI?si=C9qlexo0DlXE5fPB" },
];
const COLLECTION = [
  { en: "Netfee Mobile App Reseller Panel",         bn: "নেটফি মোবাইল অ্যাপ রিসেলার প্যানেল",             url: "https://youtu.be/2TgTCUBUclg?si=KqasGaE5_EaY6M5U" },
  { en: "Netfee Mobile App Collector Panel",        bn: "নেটফি মোবাইল অ্যাপ কালেক্টর প্যানেল",            url: "https://youtu.be/4Ooavtkbyo8?si=VTnEMfYuMpGTG8mO" },
  { en: "How to install Netfee mobile app",         bn: "কিভাবে নেটফি মোবাইল অ্যাপ ইন্সটল করবেন",         url: "https://youtu.be/F2OaMIWQ6_c?si=ozF9RIPi4lQe8NrG" },
];
const SHORTS = [
  { en: "NetFee Software Registration Process",     bn: "নেটফি সফটওয়্যার রেজিস্ট্রেশন প্রক্রিয়া",        url: "https://youtu.be/t-5g8C--fpc?si=2bt4N8RuQp-C-XZ0" },
  { en: "NetFee Support Tutorial",                  bn: "নেটফি সাপোর্ট টিউটোরিয়াল",                      url: "https://youtu.be/rX33-TqCIwU?si=V5hp_Gztyv3TbnLg" },
  { en: "NetFee Admin Panel Dashboard",             bn: "নেটফি এডমিন প্যানেল ড্যাশবোর্ড",                 url: "https://youtu.be/Ttl5NRoUPkM?si=OVJRJlQus4A-3hHp" },
  { en: "NetFee Admin Panel Area",                  bn: "নেটফি এডমিন প্যানেল এরিয়া",                      url: "https://youtu.be/axSbX5_3av4?si=roTz39pABIVe1Xzn" },
  { en: "NetFee Admin Panel Mikrotik Configuration",bn: "নেটফি এডমিন প্যানেল মাইক্রটিক কনফিগারেশন",       url: "https://youtu.be/ZKpYUrPFODo?si=ynyqjvp3zs4uMAZC" },
  { en: "NetFee Admin Panel Customer",              bn: "নেটফি এডমিন প্যানেল গ্রাহক",                     url: "https://youtu.be/L5EafhAP8O8?si=hJaQehVo-BIPBhpm" },
  { en: "NetFee Admin Panel Report Section",        bn: "নেটফি এডমিন প্যানেল রিপোর্ট সেকশন",              url: "https://youtu.be/3lCT7d0vRrI?si=s8mMDBj38z3SEmLP" },
  { en: "NetFee Admin Panel Staff",                 bn: "নেটফি এডমিন প্যানেল স্টাফ",                      url: "https://youtu.be/boo602xwVqY?si=58Z6ykuv1pB7K2QN" },
  { en: "NetFee Admin Panel Reseller Management",   bn: "নেটফি এডমিন প্যানেল রিসেলার ম্যানেজ",            url: "https://youtu.be/fUrf0xOvQfc?si=W3mIU4dTe3PAWIRa" },
  { en: "NetFee Admin Panel SMS Configuration",     bn: "নেটফি এডমিন প্যানেল এসএমএস কনফিগারেশন",         url: "https://youtu.be/PQFSfdDPMLM?si=3VaiZCJaTl8Jg4f4" },
  { en: "NetFee Admin Panel Accounts Section",      bn: "নেটফি এডমিন প্যানেল একাউন্টস",                   url: "https://youtu.be/JOpOb8qmkIE?si=gydJgxPUkZAcCj4k" },
  { en: "NetFee Admin Panel Support Configuration", bn: "নেটফি এডমিন প্যানেল সাপোর্ট কনফিগারেশন",        url: "https://youtu.be/V5hsH5eRj88?si=_mdrDDRqP7Q_NpJw" },
  { en: "NetFee Admin Panel NetFee Support",        bn: "নেটফি এডমিন প্যানেল নেটফি সাপোর্ট",              url: "https://youtu.be/TecREkNzdx8?si=x2_Fw5DOAlqz2VaP" },
  { en: "NetFee Admin Panel Tutorial",              bn: "নেটফি এডমিন প্যানেল টিউটরিয়াল",                 url: "https://youtu.be/zXqd2GiICeU?si=dmNUNZ93VIM81dUr" },
  { en: "How customers can pay via Send Money",     bn: "কিভাবে গ্রাহক সেন্ডমানি এর মাধ্যমে বিল দিবে",    url: "https://youtu.be/SDxNamAT8c0?si=fLP-dECMxrZ9yxDQ" },
  { en: "NetFee Admin Network Diagram",             bn: "নেটফি এডমিন নেটওয়ার্ক ডায়াগ্রাম",                url: "https://youtu.be/ZeWmTWcwdK0?si=0v8TQzALRAODqpa1" },
  { en: "Netfee ISP Billing: Mini Printer Setup",   bn: "নেটফি আইএসপি বিলিং: মিনি প্রিন্টার সেটআপ",      url: "https://youtu.be/bdr4_RF1Ao4?si=QDHWl_dT8dLNg7to" },
];
const ALL = [...WEB, ...CUSTOMER, ...COLLECTION, ...SHORTS];

/* ─── helpers ────────────────────────────────────────────── */
function getYtId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&\s]+)/);
  return m ? m[1] : null;
}
function embedUrl(ytId) {
  return `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
}
function thumbUrl(ytId) {
  return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
}

/* ─── tabs ───────────────────────────────────────────────── */
const TABS = [
  { key: "tutorial.tab.all",        videos: ALL        },
  { key: "tutorial.tab.web",        videos: WEB        },
  { key: "tutorial.tab.customer",   videos: CUSTOMER   },
  { key: "tutorial.tab.collection", videos: COLLECTION },
  { key: "tutorial.tab.shorts",     videos: SHORTS     },
];

const PER_PAGE = 9;

/* ─── video card ─────────────────────────────────────────── */
function VideoCard({ video, isBn, idx, inView, onExpand }) {
  const [playing, setPlaying] = useState(false);
  const title = isBn ? video.bn : video.en;
  const ytId  = getYtId(video.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (idx % PER_PAGE) * 0.03 }}
      className="group flex flex-col rounded-2xl overflow-hidden border-3 border-primary/40
                 bg-background hover:border-primary/80 hover:shadow-xl hover:shadow-primary/20
                 transition-all duration-300"
    >
      {/* video / thumbnail area */}
      <div className="relative aspect-video bg-black overflow-hidden">
        {playing && ytId ? (
          <iframe
            src={embedUrl(ytId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            {ytId ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={thumbUrl(ytId)}
                alt={title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-surface flex items-center justify-center">
                <FaPlay className="w-8 h-8 text-primary/30" />
              </div>
            )}

            {/* play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center
                         bg-black/20 hover:bg-black/40 transition-colors duration-200 "
              aria-label="Play video"
            >
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center
                              shadow-xl scale-90 group-hover:scale-100 
                              transition-transform duration-300 cursor-pointer">
                <FaPlay size={18} className="text-primary ml-1" />
              </div>
            </button>

            {/* expand button */}
            {ytId && (
              <button
                onClick={() => onExpand(video)}
                className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-black/50
                           flex items-center justify-center text-white
                           opacity-0 group-hover:opacity-100
                           hover:bg-primary transition-all duration-200 cursor-pointer"
                aria-label="Expand video"
              >
                <HiOutlineArrowsExpand className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </div>

      {/* title */}
      <div className="p-4 flex-1 flex items-start">
        <p className={`text-sm font-semibold text-foreground leading-snug
                       group-hover:text-primary transition-colors
                       ${isBn ? "font-bn" : "font-en"}`}>
          {title}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── lightbox modal ─────────────────────────────────────── */
function Lightbox({ video, isBn, onClose }) {
  const title = isBn ? video.bn : video.en;
  const ytId  = getYtId(video.url);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        exit={{    scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl"
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60
                     flex items-center justify-center text-white cursor-pointer
                     hover:bg-primary transition-colors"
          aria-label="Close"
        >
          <HiOutlineX className="w-5 h-5 " />
        </button>

        {/* iframe */}
        <div className="aspect-video w-full">
          {ytId && (
            <iframe
              src={embedUrl(ytId)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>

        {/* title bar */}
        <div className="px-5 py-3 bg-surface border-t border-border">
          <p className={`text-sm font-semibold text-foreground ${isBn ? "font-bn" : "font-en"}`}>
            {title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── main section ───────────────────────────────────────── */
export default function TutorialSection() {
  const { t, i18n } = useTranslation();
  const isBn = i18n.language === "bn";
  const font = isBn ? "font-bn" : "font-en";

  const [activeTab,    setActiveTab]    = useState(0);
  const [page,         setPage]         = useState(1);
  const [lightboxVideo,setLightboxVideo]= useState(null);

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const allVideos    = TABS[activeTab].videos;
  const totalPages   = Math.ceil(allVideos.length / PER_PAGE);
  const pagedVideos  = allVideos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleTabChange = (i) => { setActiveTab(i); setPage(1); };

  return (
    <section
      ref={ref}
      id="tutorial"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* bg */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
             backgroundSize: "32px 32px",
             opacity: 0.35,
           }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75
                      rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(46,135,223,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
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
              {t("tutorial.badge")}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 ${font}`}>
            {t("tutorial.headline")}
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <div className="w-10 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full accent-dot" />
          </div>
          <p className={`text-base text-muted max-w-xl mx-auto ${font}`}>
            {t("tutorial.subheadline")}
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer
                          ${font}
                          ${activeTab === i
                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                            : "bg-surface border border-border text-muted hover:border-primary hover:text-primary"
                          }`}
            >
              {t(tab.key)}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-en
                                ${activeTab === i ? "bg-white/20 text-white" : "bg-border text-muted"}`}>
                {tab.videos.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${page}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pagedVideos.map((video, idx) => (
              <VideoCard
                key={video.url}
                video={video}
                isBn={isBn}
                idx={idx}
                inView={inView}
                onExpand={setLightboxVideo}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-xl text-sm font-semibold border border-primary
                         text-muted hover:border-primary hover:text-primary
                         disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
                         transition-all duration-200 font-en"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-xl text-sm font-semibold font-en transition-all duration-200 cursor-pointer
                            ${page === p
                              ? "bg-primary text-white shadow-md shadow-primary/25"
                              : "border border-border text-muted hover:border-primary hover:text-primary"
                            }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-xl text-sm font-semibold border border-border
                         text-muted hover:border-primary hover:text-primary
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-200 font-en  cursor-pointer"
            >
              Next →
            </button>
          </div>
        )}

        <p className="text-center text-sm text-muted mt-5 font-en">
          {allVideos.length} videos · page {page} of {totalPages || 1}
        </p>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightboxVideo && (
          <Lightbox
            video={lightboxVideo}
            isBn={isBn}
            onClose={() => setLightboxVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
