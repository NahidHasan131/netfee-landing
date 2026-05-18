"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HiOutlineDownload, HiArrowLeft, HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const APPS = {
  "admin-app": {
    titleKey:   "app.admin.title",
    versionKey: "app.admin.version",
    descKey:    "app.admin.desc",
    img:        "/logo/netFee.png",
    apk:        "/apk/netFee_Mikrotik_filtering_14_may.apk",
    iconBg:     "bg-blue-500/10",
    badge:      "bg-blue-500/15 text-blue-600",
    features: {
      en: [
        "Complete ISP billing management",
        "Mikrotik router integration",
        "Client & payment management",
        "Real-time Webhook notifications",
        "SMS module support",
        "Reseller panel access",
        "Live bandwidth monitoring",
        "Multi-language (Bangla & English)",
      ],
      bn: [
        "সম্পূর্ণ আইএসপি বিলিং ম্যানেজমেন্ট",
        "মাইক্রোটিক রাউটার ইন্টিগ্রেশন",
        "ক্লায়েন্ট ও পেমেন্ট ম্যানেজমেন্ট",
        "রিয়েল-টাইম ওয়েবহুক নোটিফিকেশন",
        "এসএমএস মডিউল সাপোর্ট",
        "রিসেলার প্যানেল অ্যাক্সেস",
        "লাইভ ব্যান্ডউইথ মনিটরিং",
        "বহুভাষিক (বাংলা ও ইংরেজি)",
      ],
    },
  },
  "client-app": {
    titleKey:   "app.client.title",
    versionKey: "app.client.version",
    descKey:    "app.client.desc",
    img:        "/logo/netFeeClient.png",
    apk:        "/apk/NetFeeCustomer.apk",
    iconBg:     "bg-emerald-500/10",
    badge:      "bg-emerald-500/15 text-emerald-600",
    features: {
      en: [
        "View current bill & payment history",
        "Online bill payment",
        "Service status & notifications",
        "Support ticket submission",
        "Profile & account management",
        "Easy & user-friendly interface",
      ],
      bn: [
        "বর্তমান বিল ও পেমেন্ট হিস্টোরি দেখুন",
        "অনলাইনে বিল পেমেন্ট করুন",
        "সার্ভিস স্ট্যাটাস ও নোটিফিকেশন",
        "সাপোর্ট টিকেট জমা দিন",
        "প্রোফাইল ও অ্যাকাউন্ট ম্যানেজমেন্ট",
        "সহজ ও ব্যবহারকারী-বান্ধব ইন্টারফেস",
      ],
    },
  },
  "sms-responder": {
    titleKey:   "app.sms.title",
    versionKey: "app.sms.version",
    descKey:    "app.sms.desc",
    img:        "/logo/smsResponder.jpeg",
    apk:        "/apk/netFee_SMS_Responder_13_April.apk",
    iconBg:     "bg-violet-500/10",
    badge:      "bg-violet-500/15 text-violet-600",
    features: {
      en: [
        "Auto-respond to incoming SMS",
        "Predefined rule-based responses",
        "Bill due & payment alerts",
        "Real-time SMS processing",
        "Easy configuration",
        "Improved customer communication",
      ],
      bn: [
        "ইনকামিং এসএমএসে স্বয়ংক্রিয় উত্তর",
        "পূর্বনির্ধারিত নিয়মভিত্তিক রেসপন্স",
        "বিল বকেয়া ও পেমেন্ট অ্যালার্ট",
        "রিয়েল-টাইম এসএমএস প্রক্রিয়াকরণ",
        "সহজ কনফিগারেশন",
        "উন্নত গ্রাহক যোগাযোগ",
      ],
    },
  },
};

export default function AppDetailClient() {
  const { slug }    = useParams();
  const { t, i18n } = useTranslation();
  const isBn        = i18n.language === "bn";
  const font        = isBn ? "font-bn" : "font-en";
  const app         = APPS[slug];

  if (!app) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground mb-4 font-en">App not found</p>
          <Link href="/app-store" className="text-primary hover:underline font-en">
            ← Back to App Store
          </Link>
        </div>
      </div>
    );
  }

  const features = isBn ? app.features.bn : app.features.en;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/app-store"
              className="inline-flex items-center gap-2 text-sm text-muted
                         hover:text-primary transition-colors mb-10 font-en">
          <HiArrowLeft className="w-4 h-4" />
          {isBn ? "অ্যাপ স্টোরে ফিরুন" : "Back to App Store"}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-surface overflow-hidden shadow-xl"
        >
          <div className="h-1.5 w-full bg-linear-to-r from-primary via-primary/60 to-primary/20" />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-28 h-28 rounded-2xl ${app.iconBg} flex items-center
                             justify-center shadow-lg shrink-0 mx-auto sm:mx-0`}
              >
                <Image src={app.img} alt={t(app.titleKey)} width={80} height={80}
                       className="object-contain rounded-xl" />
              </motion.div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start
                                gap-3 mb-3">
                  <h1 className={`text-2xl sm:text-3xl font-black text-foreground ${font}`}>
                    {t(app.titleKey)}
                  </h1>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${app.badge} font-en`}>
                    {t(app.versionKey)}
                  </span>
                </div>
                <p className={`text-base text-muted leading-relaxed mb-6 ${font}`}>
                  {t(app.descKey)}
                </p>
                <a href={app.apk} download
                   className={`group/dl relative overflow-hidden
                               inline-flex items-center justify-center gap-2.5
                               px-8 py-3.5 rounded-2xl font-bold text-sm
                               border-2 border-primary text-primary hover:text-white
                               transition-colors duration-300 shadow-lg shadow-primary/25 ${font}`}>
                  <span className="absolute inset-0 bg-primary translate-x-[-101%]
                                   group-hover/dl:translate-x-0 transition-transform
                                   duration-300 ease-out rounded-xl" />
                  <HiOutlineDownload className="relative z-10 w-5 h-5" />
                  <span className="relative z-10">{t("appstore.download")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-border mx-8" />

          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-6">
              <HiOutlineCheckBadge className="w-5 h-5 text-primary" />
              <h2 className={`text-lg font-bold text-foreground ${font}`}>
                {isBn ? "মূল ফিচারসমূহ" : "Key Features"}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-1 p-3 rounded-full bg-primary/10 text-primary
                             border border-border hover:border-primary/40 transition-colors">
                  <HiOutlineCheckCircle className="w-4 h-4 shrink-0" />
                  <span className={`text-xs  ${font}`}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="px-8 sm:px-10 pb-8 sm:pb-10">
            <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6
                            flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className={`font-bold text-foreground mb-1 ${font}`}>
                  {isBn ? "এখনই ডাউনলোড করুন" : "Download Now"}
                </p>
                <p className={`text-sm text-muted ${font}`}>
                  {isBn ? "APK ফাইল ডাউনলোড করে ইনস্টল করুন"
                         : "Download the APK file and install on your Android device"}
                </p>
              </div>
              <a href={app.apk} download
                 className={`group/dl2 relative overflow-hidden shrink-0
                             inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl
                             font-bold text-sm border-2 border-primary text-primary
                             hover:text-white transition-colors duration-300
                             shadow-md shadow-primary/20 ${font}`}>
                <span className="absolute inset-0 bg-primary translate-x-[-101%]
                                 group-hover/dl2:translate-x-0 transition-transform
                                 duration-300 ease-out rounded-xl" />
                <HiOutlineDownload className="relative z-10 w-4 h-4" />
                <span className="relative z-10">{t("appstore.download")}</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
