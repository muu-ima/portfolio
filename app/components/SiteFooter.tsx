const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/muu-ima",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.88c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 5.98c.85 0 1.69.12 2.49.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Works",
    href: "/#works",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M5 5h14v14H5zM8 9h8M8 12h8M8 15h5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Home",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#76a7f4] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
        <div className="flex items-center justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-white transition hover:-translate-y-0.5 hover:text-sky-950"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm font-medium text-white/95">
          © 2026 muu-ima. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
