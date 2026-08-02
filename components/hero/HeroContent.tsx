"use client";

import { motion } from "framer-motion";
import { languageStore } from "@/lib/language";
import { en } from "@/messages/en";
import { ru } from "@/messages/ru";
import { useEffect, useState } from "react";

export default function HeroContent() {
  const [language, setLanguage] = useState(
    languageStore.getLanguage()
  );

  useEffect(() => {
    const handler = (e: Event) => {
      const event = e as CustomEvent<"en" | "ru">;
      setLanguage(event.detail);
    };

    window.addEventListener(
      "languageChanged",
      handler as EventListener
    );

    return () =>
      window.removeEventListener(
        "languageChanged",
        handler as EventListener
      );
  }, []);

  const t = language === "ru" ? ru : en;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300"
      >
        {t.hero.badge}
      </motion.div>

      <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
        {t.hero.title1}
        <span className="gradient-text mt-2 block">
          {t.hero.title2}
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {t.hero.description}
      </p>
    </>
  );
}