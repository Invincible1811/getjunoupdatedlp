import Image from "next/image";
import Link from "next/link";

const footerBg = "/assets/juno/footer-bg.webp";
const facebookIcon = "/assets/juno/icon-facebook.svg";
const whatsappIcon = "/assets/juno/icon-whatsapp.svg";
const instagramIcon = "/assets/juno/icon-instagram.svg";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Waitlist", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: facebookIcon, label: "Facebook", href: "#" },
  { icon: whatsappIcon, label: "WhatsApp", href: "#" },
  { icon: instagramIcon, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-between overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[rgba(57,72,53,0.9)]" />
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <Image
            src={footerBg}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 lg:px-[315px] py-5 w-full">
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          {/* Brand */}
          <p className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-white text-center">
            getjuno.de
          </p>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[18px] md:text-[24px] font-medium text-white hover:text-white/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5 p-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="relative w-9 h-9 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF] rounded-full"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={36}
                  height={36}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 w-full flex items-center justify-center px-[45px] py-[19px]">
        <p className="text-[16px] md:text-[24px] font-medium text-white text-center">
          © 2026 Juno Digital Assistant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
