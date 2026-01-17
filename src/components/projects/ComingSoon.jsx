import React from "react";
import { twMerge } from "tailwind-merge";

const ComingSoon = ({ className, label = "Coming soon" }) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-full overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04]",
        className
      )}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-black/80" />

      {/* pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm md:text-base lg:text-lg font-semibold text-white/80">
          {label}
        </span>

        <p className="mt-3 text-sm md:text-base lg:text-lg  text-white/60 max-w-xs leading-relaxed">
          This project is in progress — I’m actively building it and will add a
          demo + screenshots soon.
        </p>

        <div className="mt-4 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
