"use client";

import { useState } from "react";

const EGG =
  "SHVoPyAKY3VybCAtdSBncmVhdDpoYXggaHR0cDovL3doYXRpc3RoaXMuYTIzN2JjYmIubmlwLm51Cg==";

export default function EasterEgg() {
  const [open, setOpen] = useState(false);

  return (
    <div data-egg={EGG}>
      <p className="section-kicker">
        Platform engineer{" "}
        <button
          type="button"
          className="inline cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-accent"
          aria-expanded={open}
          aria-controls="hero-note"
          onClick={() => setOpen((value) => !value)}
        >
          ·
        </button>{" "}
        Stockholm
      </p>
      {open && (
        <p
          id="hero-note"
          className="mt-3 max-w-xl break-all font-mono text-[11px] font-normal normal-case leading-relaxed tracking-normal text-subtle select-all"
        >
          {EGG}
        </p>
      )}
    </div>
  );
}
