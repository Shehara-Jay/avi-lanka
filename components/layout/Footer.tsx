"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const exploreLinks = [
  { label: "About Sri Lanka", href: "/about-sri-lanka" },
  { label: "Excursions & Tours", href: "/tours" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

const serviceLinks = [
  { label: "Private Tours", href: "/services/private-tours" },
  { label: "Car with Driver", href: "/services/car-with-driver" },
  { label: "Local Guides", href: "/services/local-guides" },
  {
    label: "Custom Itineraries",
    href: "/services/custom-itineraries",
  },
];

const socialLinks = [
  {
    label: "Telegram",
    href: "#",
    icon: FaTelegramPlane,
    hoverClass: "hover:border-[#229ED9] hover:bg-[#229ED9]",
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
    hoverClass: "hover:border-[#25D366] hover:bg-[#25D366]",
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    hoverClass: "hover:border-[#E1306C] hover:bg-[#E1306C]",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#102719] text-white">
      {/* =====================================
          SUBTLE BACKGROUND GLOWS
      ====================================== */}

      <div className="pointer-events-none absolute left-[-10%] top-[-40%] h-[420px] w-[420px] rounded-full bg-[#90EE90]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[5%] h-[380px] w-[380px] rounded-full bg-[#67C7E8]/[0.03] blur-[120px]" />

      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div className="relative z-20 mx-auto max-w-[1540px] px-6 pb-14 pt-16 md:px-10 md:pb-16 md:pt-20 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1fr] lg:gap-16">
          {/* =====================================
              BRAND
          ====================================== */}

          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Avi Lanka home"
            >
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
                <img
                  src="/images/avi-lanka-logo.png"
                  alt="Avi Lanka logo"
                  className="h-[40px] w-[40px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="text-[24px] font-semibold tracking-[-0.04em] text-white">
                Avi Lanka
              </span>
            </Link>

            <p className="mt-5 max-w-[360px] text-[13px] leading-6 text-white/55">
              Discover Sri Lanka through private journeys, trusted local
              support and experiences shaped around the way you want to travel.
            </p>

            <Link
              href="/tours"
              className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#BDF5B5]"
            >
              Explore Sri Lanka

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* =====================================
              EXPLORE LINKS
          ====================================== */}

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#90EE90]">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group w-fit text-[12px] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative">
                    {item.label}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#90EE90] transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================
              SERVICE LINKS
          ====================================== */}

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#90EE90]">
              Services
            </p>

            <div className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group w-fit text-[12px] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative">
                    {item.label}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#90EE90] transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#90EE90]">
              Get in touch
            </p>

            <div className="space-y-4">
              {/* PHONE */}

              <a
                href="tel:+94XXXXXXXXX"
                className="group flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#BDF5B5] transition-all duration-300 group-hover:border-[#90EE90] group-hover:bg-[#90EE90] group-hover:text-[#145c14]">
                  <Phone size={14} />
                </span>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Phone
                  </p>

                  <p className="mt-1 text-[12px] text-white/65 transition-colors duration-300 group-hover:text-white">
                    +94 XX XXX XXXX
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:hello@avilanka.com"
                className="group flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#BDF5B5] transition-all duration-300 group-hover:border-[#90EE90] group-hover:bg-[#90EE90] group-hover:text-[#145c14]">
                  <Mail size={14} />
                </span>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Email
                  </p>

                  <p className="mt-1 text-[12px] text-white/65 transition-colors duration-300 group-hover:text-white">
                    hello@avilanka.com
                  </p>
                </div>
              </a>
            </div>

            {/* =====================================
                SOCIAL ICONS
            ====================================== */}

            <div className="mt-7">
              <p className="mb-3 text-[8px] uppercase tracking-[0.25em] text-white/30">
                Follow & contact
              </p>

              <div className="flex gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      title={item.label}
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-white/60
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:text-white
                        ${item.hoverClass}
                      `}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            LARGE BRAND WORDMARK
        ====================================== */}

        <div className="mt-16 border-t border-white/[0.08] pt-8 md:mt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="select-none text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.07]">
              AVI LANKA
            </h2>

            <div className="flex items-center gap-3">
              <span className="h-[6px] w-[6px] rounded-full bg-[#90EE90]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#BDF5B5]">
                Discover your Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          BOTTOM BAR
      ====================================== */}

      <div className="relative z-30 border-t border-white/[0.08] bg-[#0c2114]/70">
        <div className="mx-auto flex max-w-[1540px] flex-col gap-4 px-6 py-5 text-[8px] uppercase tracking-[0.22em] text-white/35 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>
            © {new Date().getFullYear()} Avi Lanka. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-[#90EE90]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#90EE90]"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-[#90EE90]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}