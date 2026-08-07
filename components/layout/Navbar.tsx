"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "About Sri Lanka",
    href: "/about-sri-lanka",
  },
  {
    label: "Excursions & Tours",
    href: "/tours",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Photo Gallery",
    href: "/gallery",
  },
];

const socialItems = [
  {
    label: "Telegram",
    href: "#",
    icon: FaTelegramPlane,
    hoverColor: "hover:bg-[#229ED9]",
    hoverBorder: "hover:border-[#229ED9]",
    hoverShadow: "hover:shadow-[0_8px_20px_rgba(34,158,217,0.25)]",
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
    hoverColor: "hover:bg-[#25D366]",
    hoverBorder: "hover:border-[#25D366]",
    hoverShadow: "hover:shadow-[0_8px_20px_rgba(37,211,102,0.25)]",
  },
  {
    label: "Call Avi Lanka",
    href: "tel:+94XXXXXXXXX",
    icon: Phone,
    hoverColor: "hover:bg-[#3B82F6]",
    hoverBorder: "hover:border-[#3B82F6]",
    hoverShadow: "hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)]",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================================
          MAIN NAVBAR
      ================================= */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div
          className={`
            mx-auto
            flex
            w-[calc(100%-24px)]
            max-w-[1540px]
            items-center
            justify-between
            border
            border-black/[0.06]
            bg-white/92
            px-4
            backdrop-blur-xl
            transition-all
            duration-500
            md:w-[calc(100%-40px)]
            md:px-6

            ${
              scrolled
                ? "h-[62px] rounded-[18px] shadow-[0_8px_30px_rgba(20,30,20,0.07)]"
                : "h-[74px] rounded-[22px] shadow-[0_10px_40px_rgba(20,30,20,0.05)]"
            }
          `}
        >
          {/* ================================
              BRAND
          ================================= */}

          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="Avi Lanka home"
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center md:h-[50px] md:w-[50px]">
              <img
                src="/images/avi-lanka-logo.png"
                alt="Avi Lanka logo"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-[1.07]
                "
              />
            </div>

            <span
              className="
                whitespace-nowrap
                text-[21px]
                font-semibold
                tracking-[-0.04em]
                text-[#171714]
                transition-colors
                duration-300
                group-hover:text-[#008000]
                md:text-[24px]
              "
            >
              Avi Lanka
            </span>
          </Link>

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
        group
        relative
        whitespace-nowrap
        py-3
        text-[13px]
        font-semibold
        text-[#008000]
        transition-colors
        duration-300
        hover:text-[#006400]
      "
              >
                <span
                  className="
          inline-block
          origin-center
          transition-transform
          duration-300
          ease-out
          group-hover:scale-[1.05]
        "
                >
                  {item.label}
                </span>

                <span
                  className="
          absolute
          bottom-[7px]
          left-0
          h-[1.5px]
          w-full
          origin-left
          scale-x-0
          bg-[#90EE90]
          transition-transform
          duration-300
          ease-out
          group-hover:scale-x-100
        "
                />
              </Link>
            ))}
          </nav>

          {/* ================================
              DESKTOP SOCIAL ICONS
          ================================= */}

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`
                    group
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/[0.08]
                    bg-[#f4f3ef]
                    text-black/60
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-[3px]
                    hover:text-white
                    ${item.hoverColor}
                    ${item.hoverBorder}
                    ${item.hoverShadow}
                  `}
                >
                  <Icon
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </a>
              );
            })}
          </div>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#008000]/20
              bg-white
              text-[#008000]
              transition-all
              duration-300
              hover:border-[#008000]
              hover:bg-[#008000]
              hover:text-white
              xl:hidden
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      {/* ================================
          MOBILE / TABLET MENU
      ================================= */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#fafcf8]
          transition-all
          duration-500
          xl:hidden

          ${
            isOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        <div
          className={`
            flex
            min-h-[100svh]
            flex-col
            px-6
            pb-8
            pt-28
            transition-all
            duration-500

            ${isOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          {/* ================================
              MOBILE HEADER
          ================================= */}

          <div className="mb-5 flex items-center justify-between border-b border-[#90EE90]/40 pb-5">
            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#008000]">
              Explore Avi Lanka
            </p>

            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#008000]">
              Sri Lanka
            </p>
          </div>

          {/* ================================
              MOBILE NAVIGATION
          ================================= */}

          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#90EE90]/40
                  py-4
                "
              >
                <span
                  className="
                    text-[clamp(1.8rem,7vw,3rem)]
                    font-medium
                    leading-none
                    tracking-[-0.045em]
                    text-[#008000]
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:text-[#006400]
                  "
                >
                  {item.label}
                </span>

                <span className="text-[8px] tracking-[0.2em] text-[#008000]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          {/* ================================
              MOBILE SOCIALS
          ================================= */}

          <div className="mt-auto pt-10">
            <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.4em] text-[#008000]">
              Get in touch
            </p>

            <div className="flex gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-white
                      text-[#008000]
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-[2px]
                      hover:text-white
                      ${item.hoverColor}
                      ${item.hoverBorder}
                    `}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* ================================
                MOBILE FOOTER
            ================================= */}

            <div className="mt-8 flex items-center justify-between border-t border-[#90EE90]/40 pt-5 text-[8px] uppercase tracking-[0.25em] text-[#008000]/60">
              <span>Avi Lanka</span>
              <span>Discover Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
