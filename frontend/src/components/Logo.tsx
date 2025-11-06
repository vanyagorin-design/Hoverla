import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.9 1.18 6.88L12 17.77l-6.18 3.28L7 14.17l-5-4.9 6.91-1.01L12 2z"/>
      </svg>
      <span className="font-black tracking-tight text-xl">Hoverla Plzeň</span>
    </div>
  );
}
