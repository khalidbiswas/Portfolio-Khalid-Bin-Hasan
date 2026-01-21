import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/khalidbiswas", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/khalid-bin-hasan0/", label: "LinkedIn" },
        { icon: <FaWhatsapp />, href: "https://wa.me/01566085589", label: "WhatsApp" },
        { icon: <FaFacebookF />, href: "https://facebook.com/yourusername", label: "Facebook" },
    ];

    return (
        <footer className="bg-black text-white py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

                {/* Copyright Text */}
                <p className="text-gray-400 text-sm md:text-base font-medium">
                    © {currentYear} Khalid Bin Hasan. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;