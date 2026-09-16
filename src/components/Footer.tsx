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
    <footer id="contact" className="w-full bg-canvas-2 border-t border-line py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker mb-3">03 / Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-3">
            Contact
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Open to platform and DevOps conversations, collaborations, or a
            quick hello — best reached via LinkedIn or email.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {footerLinks.map((link, index) => {
            const className =
              "flex items-center gap-3 text-accent hover:text-ink hover:bg-accent/10 px-4 py-3 rounded-xl border border-line bg-surface transition-colors duration-200 w-full";

            return (
              <div key={index} className="w-full">
                {link.isInternal ? (
                  <Link
                    href={link.href}
                    className={className}
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
                    className={className}
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                    <span className="text-sm">{link.text}</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
