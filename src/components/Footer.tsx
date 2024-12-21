'use client';

import { 
  FaLinkedin, 
  FaMastodon, 
  FaGithub, 
  FaEnvelope, 
  FaKey, 
  FaCircle 
} from 'react-icons/fa';
import Link from 'next/link';

interface FooterLink {
  icon: React.ReactNode;
  text: string;
  href: string;
  isInternal?: boolean;
  ariaLabel: string;
}

const footerLinks: FooterLink[] = [
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    text: "Add Me On LinkedIn!",
    href: "https://www.linkedin.com/in/filip-stenstr%C3%B6m/",
    ariaLabel: "LinkedIn Profile"
  },
  {
    icon: <FaMastodon className="w-6 h-6" />,
    text: "Follow me on Mastodon!",
    href: "https://k8s.social/@stenstromen",
    ariaLabel: "Mastodon Profile"
  },
  {
    icon: <FaGithub className="w-6 h-6" />,
    text: "Follow Me On GitHub!",
    href: "https://github.com/Stenstromen",
    ariaLabel: "GitHub Profile"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    text: "Send Me An Email!",
    href: "mailto:info@stenstromen.se?subject=Hello!&body=Hello,%20friend.%0A%0AI%20would%20like%20to%20ask%20you...",
    ariaLabel: "Send Email"
  },
  {
    icon: <FaKey className="w-6 h-6" />,
    text: "Fetch My Public PGP Key!",
    href: "/pgp",
    isInternal: true,
    ariaLabel: "PGP Public Key"
  },
  {
    icon: <FaCircle className="w-6 h-6" />,
    text: "Atlassian Statuspage Uptime",
    href: "https://stenstromen.statuspage.io/",
    ariaLabel: "Status Page"
  }
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#2d3545] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {footerLinks.map((link, index) => (
            <div key={index} className="w-full flex justify-center">
              {link.isInternal ? (
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-[#f686bd] hover:bg-[#f686bd]/10 px-4 py-2 rounded-md transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                  <span className="text-sm">{link.text}</span>
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#f686bd] hover:bg-[#f686bd]/10 px-4 py-2 rounded-md transition-colors duration-200"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                  <span className="text-sm">{link.text}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
} 