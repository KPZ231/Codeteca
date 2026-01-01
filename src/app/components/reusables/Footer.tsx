"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
}

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/blog", label: "Blog" },
    { href: "/explore", label: "Explore New Snippets" },
    { href: "/library", label: "Snippets Library" },
    { href: "/pricing", label: "Pricing" },
  ];

  const socialLinks = [
    { href: "/", icon: FaFacebook, label: "Facebook" },
    { href: "/", icon: FaInstagram, label: "Instagram" },
    { href: "/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "/", icon: FaTiktok, label: "TikTok" },
    { href: "/", icon: FaGithub, label: "GitHub" },
  ];

  return (
    <footer className=" mt-16 w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/logo500x500.png"
                alt="Codeteca Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Your ultimate destination for code snippets and development resources.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-2xl text-white mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-gray-400 hover:text-white hover:translate-x-1"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-2xl text-white mb-6">Connect With Us</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={22} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-6" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {getYear()} Copyright by{" "}
            <Link
              href="https://kpzsproductions.pl"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              KPZsProductions
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}