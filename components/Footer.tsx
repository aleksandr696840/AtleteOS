"use client";

import { ArrowUpRight, Mail, Globe } from "lucide-react";

const navigation = [
  "Platform",
  "Solutions",
  "Pricing",
  "Company",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">

      <div className="container">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white">
                A
              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  AthleteOS
                </h2>

                <p className="text-sm text-slate-500">
                  AI Performance Platform
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Artificial intelligence platform for elite athletes,
              coaches and professional sports organizations.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Navigation
            </h3>

            <div className="space-y-4">

              {navigation.map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 transition hover:text-white"
                >
                  {item}
                </a>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Mail
                  size={18}
                  className="text-cyan-400"
                />

                hello@athleteos.ai

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Globe
                  size={18}
                  className="text-cyan-400"
                />

                athleteos.ai

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Ready?
            </h3>

            <button className="btn-primary">

              Request Demo

              <ArrowUpRight size={18} />

            </button>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 AthleteOS. All rights reserved.
          </p>

          <div className="flex gap-8">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}