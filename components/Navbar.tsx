"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { languageStore } from "@/lib/language";
import { en } from "@/messages/en";
import { ru } from "@/messages/ru";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070d]/70 backdrop-blur-xl">

      <div className="container flex h-[72px] items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white">
            A
          </div>

          <div>

            <h2 className="text-lg font-bold text-white">
              AthleteOS
            </h2>

            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              AI Performance Platform
            </p>

          </div>

        </div>

        <nav className="hidden items-center gap-8 lg:flex">

          <a
            href="#platform"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.nav.platform}
          </a>

          <a
            href="#solutions"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.nav.solutions}
          </a>

          <a
            href="#pricing"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.nav.pricing}
          </a>

          <a
            href="#company"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.nav.company}
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.nav.contact}
          </a>

        </nav>

        <div className="hidden items-center gap-5 lg:flex">

          <div className="flex overflow-hidden rounded-full border border-white/10">

            <button
              onClick={() =>
                languageStore.setLanguage("en")
              }
              className={`px-4 py-2 text-sm transition ${
                language === "en"
                  ? "bg-cyan-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() =>
                languageStore.setLanguage("ru")
              }
              className={`px-4 py-2 text-sm transition ${
                language === "ru"
                  ? "bg-cyan-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              RU
            </button>

          </div>
          <button className="btn-primary px-6 py-3 text-sm">
            {t.nav.demo}
          </button>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {open && (

        <div className="border-t border-white/5 bg-[#05070d]/95 backdrop-blur-xl lg:hidden">

          <div className="container py-24">

            <nav className="flex flex-col gap-5">

              <a
                href="#platform"
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t.nav.platform}
              </a>

              <a
                href="#solutions"
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t.nav.solutions}
              </a>

              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t.nav.pricing}
              </a>

              <a
                href="#company"
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t.nav.company}
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-slate-300"
              >
                {t.nav.contact}
              </a>

            </nav>

            <div className="mt-8 flex gap-3">

              <button
                onClick={() =>
                  languageStore.setLanguage("en")
                }
                className={`flex-1 rounded-xl border border-white/10 py-3 transition ${
                  language === "en"
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300"
                }`}
              >
                EN
              </button>

              <button
                onClick={() =>
                  languageStore.setLanguage("ru")
                }
                className={`flex-1 rounded-xl border border-white/10 py-3 transition ${
                  language === "ru"
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300"
                }`}
              >
                RU
              </button>

            </div>

            <button className="btn-primary mt-6 w-full justify-center">
              {t.nav.demo}
            </button>

          </div>

        </div>

      )}

    </header>
  );
}