'use client';

import Link from 'next/link';

export default function RimiamLogo({ className = "", size = "text-2xl", href, ...props }) {
  const logoContent = (
    <span
      className={`
        ${size} font-bold
        bg-gradient-to-r from-[#8e9aaf] via-[#f1cc5e] to-[#e6b547]
        bg-clip-text text-transparent
        hover:from-[#7a8599] hover:via-[#e6b547] hover:to-[#d4941a]
        transition-all duration-300
        drop-shadow-sm
        ${className}
      `}
      {...props}
    >
      RIMIAM
    </span>
  );

  if (href) {
    return (
      <Link href={href}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
