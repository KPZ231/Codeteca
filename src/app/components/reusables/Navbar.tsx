"use client";

import { JSX, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import {
  HiOutlineBookOpen,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineFire,
  HiOutlineClock,
  HiOutlineStar,
  HiOutlineCodeBracket,
  HiOutlinePaintBrush,
} from "react-icons/hi2";

interface SubmenuItem {
  href: string;
  label: string;
  description?: string;
  icon: JSX.Element;
}

interface NavLink {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    {
      href: "/blog",
      label: "Blog",
      submenu: [
        {
          href: "/blog/tutorials",
          label: "Tutorials",
          description: "Learn step by step",
          icon: <HiOutlineAcademicCap />,
        },
        {
          href: "/blog/articles",
          label: "Articles",
          description: "Latest insights",
          icon: <HiOutlineBookOpen />,
        },
        {
          href: "/blog/news",
          label: "News",
          description: "Stay updated",
          icon: <HiOutlineNewspaper />,
        },
      ],
    },
    {
      href: "/explore",
      label: "Explore New Snippets",
      submenu: [
        {
          href: "/explore/trending",
          label: "Trending",
          icon: <HiOutlineFire />,
        },
        {
          href: "/explore/recent",
          label: "Recent",
          icon: <HiOutlineClock />,
        },
        {
          href: "/explore/featured",
          label: "Featured",
          icon: <HiOutlineStar />,
        },
      ],
    },
    {
      href: "/library",
      label: "Snippets Library",
      submenu: [
        {
          href: "/library/javascript",
          label: "JavaScript",
          icon: <HiOutlineCodeBracket />,
        },
        {
          href: "/library/typescript",
          label: "TypeScript",
          icon: <HiOutlineCodeBracket />,
        },
        {
          href: "/library/react",
          label: "React",
          icon: <HiOutlineCodeBracket />,
        },
        {
          href: "/library/css",
          label: "CSS",
          icon: <HiOutlinePaintBrush />,
        },
      ],
    },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="w-[95%] bg-(--background-accent) mx-auto rounded-b-2xl text-(--text-color) shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Image
              src="/images/logo512x128.png"
              width={256}
              height={64}
              alt="Codeteca Logo"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition
                      ${isActive
                        ? "bg-(--accent-color) text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-(--bg-color)"
                      }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.submenu && (
                    <div className="absolute left-0 top-full w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      <div className="bg-(--bg-color) rounded-xl shadow-2xl border border-(--background-accent) overflow-hidden animate-dropdown">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            prefetch={false}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-(--background-accent) transition"
                          >
                            {/* Icon */}
                            <div className="text-(--accent-color) text-lg mt-0.5">
                              {item.icon}
                            </div>

                            {/* Text */}
                            <div>
                              <div className="font-medium text-white">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-xs text-gray-400">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/" content="Submit Snippet" variant="primary" target="_self"></Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-(--bg-color)"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f12] border-t border-[#1a1c20] animate-dropdown">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1a1c20]"
                >
                  {link.label}
                </Link>

                {link.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white"
                      >
                        <span className="text-(--accent-color)">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
