import FlareIP from "../img/flareip.svg";
import FlareGHStats from "../img/flareghstats.webp";
import bf2042ico from "../img/bf2042ico.webp";
import bright from "../img/bright.webp";
// import cavestory from "../img/cavestory.webp";
import detblevingencd from "../img/detblevingencd.webp";
import dockerctx from "../img/dockerctx.webp";
import doggate from "../img/doggate.webp";
import doh from "../img/doh.webp";
import pusheencat from "../img/pusheen-cat.webp";
import flowerapi from "../img/flowerapi.webp";
import gologo from "../img/gologo.webp";
import gomyip from "../img/gomyip.webp";
import grumpypgp from "../img/grumpypgp.webp";
import grumpypgpweb from "../img/grumpygpgweb.webp";
import khaossweeper from "../img/khaossweeper.webp";
import kubectlpvcmount from "../img/kubectl-pvcmount.webp";
import miniomatic from "../img/miniomatic.svg";
import ncregistry from "../img/ncregistry.webp";
// import noclip from "../img/noclip.webp";
import non from "../img/non.webp";
import nyancatchat from "../img/nyancatchat.webp";
import nyancat from "../img/nyancat.webp";
import peppojnet from "../img/peppojnet.webp";
import pusheense from "../img/pusheense.webp";
import pwgen from "../img/pwgen.webp";
import readthenburn from "../img/readthenburn.webp";
import registryport from "../img/registryport.webp";
import snapnote from "../img/snapnote.webp";
import vault from "../img/vault.webp";
import linkvigil from "../img/linkvigil.webp";
import lotemp from "../img/lotemp.webp";
import lynxgate from "../img/lynxgate.webp";
import outlinewikibackup from "../img/outlinewikibackup.webp";
import rustyalias from "../img/rustyalias.webp";
import BadgesList from "./BadgesList";

const {
  CLOUDFLARE,
  CSS,
  DOCKER,
  GO,
  C,
  HTML,
  JS,
  KUBERNETES,
  MARIADB,
  NODEJS,
  PYTHON,
  REACTJS,
  REACTNATIVE,
  RUST,
  SHELL,
  SOCKETIO,
  TENSORFLOW,
  TS,
  WORDPRESS,
} = BadgesList;

export interface Project {
  image: string | { src: string };
  title: string;
  description: string;
  link: string;
  github?: string;
  badges: Array<{
    name: string;
    src: string;
    width?: string;
    height?: string;
  }>;
}

const ProjectList: Project[] = [
  {
    image: snapnote,
    title: "Snapnote",
    description: "Open source note taking application.",
    link: "https://snapnote.online",
    github: "https://github.com/Stenstromen/snapnote",
    badges: [REACTJS, TS, GO, MARIADB, KUBERNETES],
  },
  {
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNjAiPgogIDxwYXRoIGZpbGw9ImxpZ2h0Z3JheSIgZD0iTTEwIDEwIFEgMjAgMCwgMzAgMTAgVCA1MCAxMCBUIDcwIDEwIFQgOTAgMTAgUSAxMDAgMCwgMTEwIDEwIiAvPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjIwIiBmaWxsPSJsaWdodGJsdWUiIC8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSIzMCIgcj0iMTAiIGZpbGw9IndoaXRlIiAvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0gNjAgNDAgUSA3MCA1MCwgODAgNDAgVCAxMDAgNDAiIC8+Cjwvc3ZnPgo=",
    title: "Twaddle",
    description: "Generate gibberish using the distilGP2 model.",
    link: "https://twaddle.page",
    github: "https://github.com/Stenstromen/twaddle-frontend",
    badges: [REACTJS, TS, PYTHON, TENSORFLOW, KUBERNETES],
  },
  {
    image: readthenburn,
    title: "ReadThenBurn.se",
    description:
      "Create temporary, shareable, messages. Only readable once. Read-Then-Burn.",
    link: "http://readthenburn.se",
    github: "https://github.com/Stenstromen/readthenburn-frontend",
    badges: [REACTJS, GO, MARIADB, KUBERNETES],
  },
  {
    image: nyancat,
    title: "NyanCat",
    description:
      "Nyancat for the terminal. Shamelessly stolen from github.com/klange/nyancat, but with a added telnet server.",
    link: "https://github.com/Stenstromen/nyancat/releases/latest/",
    github: "https://github.com/Stenstromen/nyancat",
    badges: [C],
  },
  {
    image: registryport,
    title: "RegistryPort",
    description:
      "RegistryPort brings the power of Docker Registries to the palm of your hand.",
    link: "https://apps.apple.com/us/app/registryport/id6464222587",
    github: "https://github.com/Stenstromen/registryport",
    badges: [REACTNATIVE, TS, DOCKER],
  },
  {
    image: lynxgate,
    title: "LynxGate",
    description: "API Authentication GW for use with Nginx Ingress .",
    link: "https://github.com/Stenstromen/lynxgate/pkgs/container/lynxgate",
    github: "https://github.com/Stenstromen/lynxgate",
    badges: [GO, DOCKER, KUBERNETES],
  },
  {
    image: grumpypgp,
    title: "GrumpyPGP",
    description: "The lack of a good PGP app for iOS makes the cat grumpy.",
    link: "https://apps.apple.com/se/app/grumpypgp/id6474478177",
    github: "https://github.com/Stenstromen/grumpypgp",
    badges: [REACTNATIVE, TS],
  },
  {
    image: grumpypgpweb,
    title: "GrumpyPGPWeb",
    description: "PGP tool for the web, because the cat is still grumpy.",
    link: "https://grumpycat.se",
    github: "https://github.com/Stenstromen/grumpypgpweb",
    badges: [REACTJS, TS],
  },
  {
    image: doggate,
    title: "DogGate",
    description:
      "DogGate, a simple and easy authentication system for your web applications.",
    link: "https://github.com/Stenstromen/doggate",
    github: "https://github.com/Stenstromen/doggate",
    badges: [GO, DOCKER, KUBERNETES],
  },
  {
    image: miniomatic,
    title: "Miniomatic",
    description:
      "Backend service API for Minio that provides a simple way to create and manage Minio instances on Kubernetes.",
    link: "https://github.com/Stenstromen/miniomatic/releases/latest/",
    github: "https://github.com/Stenstromen/minomatic",
    badges: [GO, DOCKER, KUBERNETES],
  },
  {
    image: kubectlpvcmount,
    title: "kubectl-pvcmount",
    description:
      "Go binary for temporary mounting of PVCs to a pod. This is useful for debugging purposes or for copying data from a PVC to another location.",
    link: "https://github.com/Stenstromen/kubectl-pvcmount/releases/latest/",
    github: "https://github.com/Stenstromen/kubectl-pvcmount",
    badges: [GO, KUBERNETES],
  },
  {
    image: khaossweeper,
    title: "KhaosSweeper",
    description:
      "Minesweeper game that randomly kills pods in your Kubernetes cluster, when a mine is hit, because why not?",
    link: "https://github.com/Stenstromen/khaossweeper/releases/latest/",
    github: "https://github.com/Stenstromen/khaossweeper",
    badges: [GO, KUBERNETES],
  },
  {
    image: FlareIP,
    title: "FlareIP",
    description:
      "Cloudflare Worker to get the client IP address and other stats.",
    link: "https://addr.se/readme",
    github: "https://github.com/Stenstromen/flareip",
    badges: [TS, CLOUDFLARE],
  },
  {
    image: bright,
    title: "Bright",
    description:
      "BRIGHT is a DNS, Email and Web standards testing tool. All related to a single tested domain.",
    link: "https://github.com/Stenstromen/bright/releases/latest",
    github: "https://github.com/Stenstromen/bright",
    badges: [RUST],
  },
  {
    image: bf2042ico,
    title: "BF2042Stats",
    description: "Battlefield 2042 Stats page",
    link: "https://battlefield2042.se",
    github: "https://github.com/Stenstromen/bf2042stats",
    badges: [REACTJS, TS, CLOUDFLARE],
  },
  {
    image: doh,
    title: "DNS-over-HTTPS",
    description:
      "Fork of github.com/m13253/dns-over-https. With added Redis Cache Support and Scratch Container.",
    link: "https://github.com/Stenstromen/dns-over-https",
    github: "https://github.com/Stenstromen/dns-over-https",
    badges: [GO, DOCKER, KUBERNETES],
  },
  {
    image: nyancatchat,
    title: "Chat.NyanCat.se",
    description: "Fully featured NyanCat themed chat client and server.",
    link: "https://chat.nyancat.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [REACTJS, NODEJS, SOCKETIO, KUBERNETES],
  },
  {
    image: dockerctx,
    title: "DockerCTX",
    description:
      "Rewrite of ahmetb's 'kubectx' utility. Easily switch between Docker contexts.",
    link: "https://github.com/Stenstromen/dockerctx/releases/latest/",
    github: "https://github.com/Stenstromen/dockerctx",
    badges: [SHELL],
  },
  {
    image: outlinewikibackup,
    title: "OutlineWiki Backup",
    description: "OutlineWiki Backup Utility",
    link: "https://github.com/Stenstromen/outlinewikibackup",
    github: "https://github.com/Stenstromen/outlinewikibackup",
    badges: [GO, DOCKER],
  },
  {
    image: pusheencat,
    title: "Filosofiska Eleonora",
    description:
      "I took the Red Pill, but now I have to live the Blue Pill life.",
    link: "https://filosofiskaeleonora.se",
    github: "https://github.com/Stenstromen/filosofiskaeleonora",
    badges: [REACTJS, CLOUDFLARE],
  },
  {
    image: FlareGHStats,
    title: "FlareGHStats",
    description: "Cloudflare Worker to get the GitHub stats for a user.",
    link: "https://github.com/Stenstromen/flareghstats",
    github: "https://github.com/Stenstromen/flareghstats",
    badges: [TS, CLOUDFLARE],
  },
  {
    image: flowerapi,
    title: "Flower.API",
    description:
      "API server for listing beautiful flowers, requires registration.",
    link: "https://flower.api.stenstromen.se/readme",
    github: "https://github.com/Stenstromen/flowerapi",
    badges: [NODEJS, KUBERNETES],
  },
  {
    image: ncregistry,
    title: "NcRegistry",
    description:
      "NcRegistry Go binary provides users with an interactive prompt to select registries, view repositories, and manage Docker images and tags.",
    link: "https://github.com/Stenstromen/ncregistry/releases/latest/",
    github: "https://github.com/Stenstromen/ncregistry",
    badges: [GO, DOCKER],
  },
  {
    image: non,
    title: "No\\n",
    description: "Simple line break and carriage return remover",
    link: "https://github.com/Stenstromen/non/releases/latest/",
    github: "https://github.com/Stenstromen/non",
    badges: [RUST],
  },
  {
    image: linkvigil,
    title: "LinkVigil",
    description:
      "LinkVigil is a simple HTTP API monitoring tool, that checks if a URL is up or down and updates Atlassian Statuspage.",
    link: "https://github.com/Stenstromen/linkvigil/releases/latest/",
    github: "https://github.com/Stenstromen/linkvigil",
    badges: [GO],
  },
  {
    image: lotemp,
    title: "LoTemp",
    description: "Fetch Current Local Outside Temperature In the Terminal",
    link: "https://github.com/Stenstromen/lotemp/releases/latest/",
    github: "https://github.com/Stenstromen/lotemp",
    badges: [RUST],
  },
  {
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cGF0aCBkPSJNMjIgMTJoLTRtLTIgMGE2IDYgMCAwIDAtNiA2djJtNi0yYTYgNiAwIDAgMCA2LTYgNiA2IDAgMCAwLTYtNiA2IDYgMCAwIDAtNiA2IDYgNiAwIDAgMCA2IDZ2MmE2IDYgMCAwIDEtNi02IDYgNiAwIDAgMSA2LTYgNiA2IDAgMCAxIDYgNiA2IDYgMCAwIDEtNiA2bTYtNmg0Ij48L3BhdGg+Cjwvc3ZnPgo=",
    title: "OpenVision",
    description:
      "OpenVision is a web application that allows you to detect objects in images, using Keras MobileNetV3 model in TensorflowJs.",
    link: "https://openvision.boo",
    github: "https://github.com/Stenstromen/openvision",
    badges: [REACTJS, TS, TENSORFLOW],
  },
  {
    image: peppojnet,
    title: "Peppoj.net",
    description: "Personal blog with useful guides.",
    link: "https://www.peppoj.net",
    badges: [WORDPRESS, KUBERNETES],
  },
  {
    image: pwgen,
    title: "PWGen.cz",
    description: "Generate secure passwords.",
    link: "https://pwgen.cz",
    github: "https://github.com/Stenstromen/pwgen",
    badges: [REACTJS, TS],
  },
  {
    image: pusheense,
    title: "Pusheen.se",
    description: "Pusheen the cat!",
    link: "http://pusheen.se",
    github: "https://github.com/Stenstromen/pusheen",
    badges: [REACTJS, CLOUDFLARE],
  },
  {
    image: rustyalias,
    title: "RustyAlias",
    description: " Wildcard DNS for any IP Address.",
    link: "https://github.com/Stenstromen/rustyalias",
    github: "https://github.com/Stenstromen/rustyalias",
    badges: [RUST],
  },
  {
    image: gologo,
    title: "GoSPFFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare.",
    link: "https://github.com/Stenstromen/gospfflare/releases/latest/",
    github: "https://github.com/Stenstromen/gospfflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoMTA-STSFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare, and create the accompanying Nginx configuration.",
    link: "https://github.com/Stenstromen/gomtastsflare/releases/latest/",
    github: "https://github.com/Stenstromen/gomtastsflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoTLSAFlare",
    description:
      "Go binary for updating TLSA DANE record on cloudflare from x509 Certificate.",
    link: "https://github.com/Stenstromen/gotlsaflare/releases/latest/",
    github: "https://github.com/Stenstromen/gotlsaflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoDKIMFlare",
    description: "Go binary for creating/updating DKIM records on Cloudflare.",
    link: "https://github.com/Stenstromen/godkimflare/releases/latest/",
    github: "https://github.com/Stenstromen/godkimflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gomyip,
    title: "GoMyIP",
    description: "ifconfig.co copycat, written in Go",
    link: "https://github.com/Stenstromen/gomyip",
    github: "https://github.com/Stenstromen/gomyip",
    badges: [GO, KUBERNETES],
  },
  {
    image: vault,
    title: "VaultCTX",
    description:
      "Context switching for Hashicorp Vault with support for multiple vaults and namespaces",
    link: "https://github.com/Stenstromen/vaultctx/releases/latest/",
    github: "https://github.com/Stenstromen/vaultctx",
    badges: [RUST],
  },
  {
    image: detblevingencd,
    title: "det-blev-ingen-cd.se",
    description: "det-blev-ingen-cd.com, med .se istället.",
    link: "https://det-blev-ingen-cd.se",
    github: "https://github.com/stenstromen/det-blev-ingen-cd",
    badges: [HTML, CSS, JS, CLOUDFLARE],
  },
];

export default ProjectList;
