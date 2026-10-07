export interface TechBadge {
  name: string;
  label: string;
}

function tech(name: string, label = name): TechBadge {
  return { name, label };
}

const BadgesList = {
  HTML: tech("HTML"),
  CSS: tech("CSS"),
  JS: tech("JS", "JavaScript"),
  TS: tech("TS", "TypeScript"),
  SOCKETIO: tech("SOCKETIO", "Socket.IO"),
  NEXTJS: tech("NEXTJS", "Next.js"),
  NODEJS: tech("NODEJS", "Node.js"),
  MARIADB: tech("MARIADB", "MariaDB"),
  WORDPRESS: tech("WORDPRESS", "WordPress"),
  BOOTSTRAP: tech("BOOTSTRAP", "Bootstrap"),
  REACTJS: tech("REACTJS", "React"),
  VITE: tech("VITE", "Vite"),
  NGINX: tech("NGINX", "Nginx"),
  KUBERNETES: tech("KUBERNETES", "Kubernetes"),
  GO: tech("GO", "Go"),
  RUST: tech("RUST", "Rust"),
  C: tech("C"),
  CSHARP: tech("CSHARP", "C#"),
  PYTHON: tech("PYTHON", "Python"),
  TENSORFLOW: tech("TENSORFLOW", "TensorFlow"),
  SHELL: tech("SHELL", "Shell"),
  ALPINE: tech("ALPINE", "Alpine"),
  DOCKER: tech("DOCKER", "Docker"),
  REACTNATIVE: tech("REACTNATIVE", "React Native"),
  UBUNTU: tech("UBUNTU", "Ubuntu"),
  LINUX: tech("LINUX", "Linux"),
  LINODE: tech("LINODE", "Linode"),
  CLOUDFLARE: tech("CLOUDFLARE", "Cloudflare"),
  GITHUBACTIONS: tech("GITHUBACTIONS", "Actions"),
  GITHUB: tech("GITHUB", "GitHub"),
  GIT: tech("GIT", "Git"),
  MARKDOWN: tech("MARKDOWN", "Markdown"),
  JEST: tech("JEST", "Jest"),
  ESLINT: tech("ESLINT", "ESLint"),
};

export default BadgesList;
