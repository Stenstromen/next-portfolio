/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import detblevingencd from "../../img/detblevingencd.webp";
import hsts from "../../img/hsts.png";
import cloudflarehsts from "../../img/cloudflarehsts.png";
import cloudflaretls from "../../img/cloudflaretls.png";

function DetBlevIngenCD() {
  const [openSection, setOpenSection] = useState(0);

  return (
    <div className="min-h-screen bg-[#4f5d75]/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#4f5d75]/80 mx-[10%] my-[2%] overflow-x-hidden transform transition-all duration-1000 ease-in-out">
        <div className="divide-y divide-gray-200">
          {/* Section 1 - Lokaltidningsbesvikelse */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 0 ? -1 : 0)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  1.&nbsp;
                  <span className="underline">
                    Lokaltidningsbesvikelse:n <i>Det Blev Ingen CD</i>
                  </span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 0 ? "block" : "hidden"}`}
            >
              <p className="font-bold mb-2">Lokalnyheter?</p>
              <p className="mb-2">
                Tidningsnotis, troligtvis från 2001, i Avesta Tidning.
              </p>
              <p className="mb-2">
                &quot;En av de första Svenska virala fenomenen&quot; (enligt
                Sveriges Radio)
              </p>
              <p className="mb-2">
                Väldigt liten och obetydlig samt &quot;extremt lokal&quot; nyhet
                blir välkänd
              </p>
              <p className="mb-4">
                Ikonisk bild tagen av samma lokalreporter, Thomas Ahlin
              </p>

              <p className="font-bold mb-2">Vad är nyheten?</p>
              <p className="font-bold mb-2">
                En grå marsdag i Avesta i början av 2000-talet:
              </p>
              <p className="mb-2">
                Några ungdomar har varit ute för att kolla på CD-skivor på
                lunchrasten, men det var stängt
              </p>
              <p className="mb-2">...</p>
              <p className="mb-4">Thats It</p>

              <div className="mb-4">
                <img
                  src={detblevingencd.src}
                  alt="Det Blev Ingen CD"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={387}
                />
              </div>

              <p className="font-bold mb-2">Utfall</p>
              <p className="mb-2">
                2004, Webbsida det-blev-ingen-cd.com lanseras
              </p>
              <p className="mb-2">
                2018, Genomgick en refaktorering och vart Open Source
                <sup>
                  <a href="#footnote1" id="ref1" className="text-blue-500">
                    *
                  </a>
                </sup>
              </p>
              <p className="mb-2">
                2019, En dokumentärfilm om nyheten släpps under hösten samma år
              </p>
              <p className="mb-2">2023, ;-)</p>

              <p id="footnote1" className="text-sm mt-4">
                <sup>
                  <a href="#ref1" className="text-blue-500">
                    *
                  </a>
                </sup>
                <a
                  href="https://github.com/bombsimon/det-blev-ingen-cd.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 ml-1"
                >
                  github.com/bombsimon/det-blev-ingen-cd.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 2 - Cloudflare Pages */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 1 ? -1 : 1)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  2.&nbsp;
                  <span className="underline">Cloudflare Pages</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 1 ? "block" : "hidden"}`}
            >
              <p className="font-bold mb-2">Cloudflare Pages</p>
              <p className="italic mb-2">Static Site Hosting</p>
              <p className="mb-2">
                Stöd för de flesta Front-End ramverken (React, Vite, Svelte etc)
              </p>
              <p className="mb-2">
                Hanterar SSL/TLS (HTTPS) med tillhörande certifikat
              </p>
              <p className="mb-4">
                Andra alternativ: &#123;Cloudflare, GitHub, GitLab&#125; Pages,
                Netlify, Vercel etc
              </p>

              <p className="font-bold mb-2">Cloudflare Pages, forts</p>
              <p className="mb-2">
                Gömmer merparten av webbserver konfigurationen bakom ett fint
                gränssnitt
              </p>
              <p className="mb-2">
                Möjlighet att ändra inställningar kring SSL/TLS, Omdirigering,
                Rate limiting etc
              </p>
              <p className="mb-2">Custom domains</p>
            </div>
          </div>

          {/* Section 3 - Webbsäkerhet */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 2 ? -1 : 2)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  3.&nbsp;
                  <span className="underline">
                    Webbsäkerhet, vad och varför?
                  </span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 2 ? "block" : "hidden"}`}
            >
              <p className="font-bold mb-2">Webbsäkerhet, vad och varför?</p>
              <p className="mb-2">HTTP Strict Transport Security (HSTS)</p>
              <p className="mb-2">Content Security Policy (CSP)</p>
              <p className="mb-4">Subresource Integrity (SRI)</p>

              <p className="font-bold mb-2">HSTS</p>
              <p className="mb-2">
                HTTP Header som tvingar browser anslutning över HTTPS
              </p>
              <p className="mb-2">
                Attribut som max-age, includeSubDomains och preload
              </p>
              <p className="italic mb-2">
                Browser: Tillåt inget annat än https för domänen, kom ihåg det
                så här länge, applicera det också för alla mina subdomäner samt
                tillåt inläsning av detta i förväg.
              </p>
              <p className="mb-4">Förinläst HSTS databas, hstspreload.org</p>

              <div className="mb-4">
                <img
                  src={hsts.src}
                  alt="HSTS"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={800}
                  height={400}
                />
              </div>

              <p className="font-bold mb-2">CSP</p>
              <p className="mb-2">
                HTTP Header som begränsar tillgången till webresurser
              </p>
              <p className="mb-2">
                Attribut som <i>&#123;style, script, img, connect&#125;-src</i>
              </p>
              <p className="italic mb-2">
                Browser: Begränsa inläsningen av webresurserna enligt headern
                content-security-policy
              </p>
              <p className="mb-4">
                Eventuella fel som browsern upptäcker kan rapporteras med
                report-to headern
              </p>

              <pre className="bg-black text-green-500 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                {`default-src 'self';
connect-src 'self' https://*.google-analytics.com;
script-src 'self' https://www.googletagmanager.com 'sha256-MIxUxP1eI71+iIPFXEcZzdvb/Whmq+vPhAWxUfjTzOY=' 'sha256-bUf9tVceFEfgLN9S61nbHttCZLlXubeFiaARwPWmgLo=';
style-src 'self' 'sha256-XOyHuWE0UOp5Z40lP6GhS+bertK9G9ZvTLNyfBds1/I=' https://cdnjs.cloudflare.com;
img-src 'self';
object-src 'none';
form-action 'self';
frame-ancestors 'none';
base-uri 'self';
font-src 'self';
media-src 'self';
frame-src 'self';
upgrade-insecure-requests;`}
              </pre>

              <p className="font-bold mb-2">CSP, forts</p>
              <p className="mb-2">
                Inline resurser, ex script och style, kan verifieras med hash
                eller nonce
              </p>
              <p className="mb-2">
                SHA&#123;256, 384, 512&#125; hash av innehållet i inline style
                eller script tag
              </p>
              <p className="mb-2">
                Nonce, Number Used Once, ett slumptal i CSP attributet som
                matchar slumptal i inline style eller script tag.
              </p>
              <p className="mb-4">
                Content-Security-Policy: script-src
                &apos;nonce-2726c7f26c&apos;;
              </p>

              <pre className="bg-black text-green-500 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                {`<script nonce="2726c7f26c">
const inline = 1;
...`}
              </pre>

              <p className="font-bold mb-2">SRI</p>
              <p className="mb-2">
                Validering av externa script och stylesheet (&lt;script&gt; ||
                &lt;link&gt;)
              </p>
              <p className="mb-2">
                Använder SHA hash precis som &#123;script, style&#125;-src i CSP
              </p>
              <p className="mb-2">Läggs till som Integrity attribut i taggen</p>

              <pre className="bg-black text-green-500 p-4 rounded-lg mb-4 overflow-x-auto text-sm">
                {`<script
src="https://example.com/example-framework.js"
integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7H..."`}
              </pre>
            </div>
          </div>

          {/* Section 4 - Det Blev Ingen CD */}
          <div className="border-b border-gray-200">
            <button
              className="w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => setOpenSection(openSection === 3 ? -1 : 3)}
            >
              <div className="flex items-center">
                <span className="font-bold">
                  4.&nbsp;
                  <span className="underline">Det Blev Ingen CD?</span>
                </span>
              </div>
            </button>

            <div
              className={`px-6 pb-4 ${openSection === 3 ? "block" : "hidden"}`}
            >
              <p className="mb-2">
                Finns nu, med vettig domän, det-blev-ingen-cd.SE
              </p>
              <p className="mb-2">Hostad hos Cloudflare Pages</p>
              <p className="mb-2">
                Alla (nästan) tidigare nämnda säkerhetsfunktioner aktiverade
              </p>
              <p className="mb-4">
                Skriven i <i>Ren</i> HTML, CSS och Javascript
              </p>

              <div className="mb-4">
                <img
                  src={cloudflarehsts.src}
                  alt="Cloudflare HSTS"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={700}
                  height={400}
                />
              </div>

              <div className="mb-4">
                <img
                  src={cloudflaretls.src}
                  alt="Cloudflare TLS"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={700}
                  height={400}
                />
              </div>

              <p className="font-bold mb-2">_headers</p>
              <pre className="bg-black text-green-500 p-4 rounded-lg overflow-x-auto text-sm">
                {`/*
Content-Security-Policy: default-src 'self';
connect-src 'self' https://*.google-analytics.com;
script-src 'self' https://www.googletagmanager.com 'sha256-MIxUxP1eI71+iIPFXEcZzdvb/Whmq+vPhAWxUfjTzOY=' 'sha256-bUf9tVceFEfgLN9S61nbHttCZLlXubeFiaARwPWmgLo=';
style-src 'self' 'sha256-XOyHuWE0UOp5Z40lP6GhS+bertK9G9ZvTLNyfBds1/I=' https://cdnjs.cloudflare.com;
img-src 'self';
object-src 'none';
form-action 'self';
frame-ancestors 'none';
base-uri 'self';
font-src 'self';
media-src 'self';
frame-src 'self';
upgrade-insecure-requests;
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: no-referrer`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetBlevIngenCD;
