import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./glass.css";
import BrandLogo from "./BrandLogo"; // optional if you're using logo tab

const Header = () => {
  const items = useMemo(
    () => [
      { type: "logo", href: "#home", id: "home" },
      { label: "About", href: "#about", id: "about" },
      { label: "Experience", href: "#experience", id: "experience" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const [active, setActive] = useState(0);

  // --- indicator positioning ---
 const updateIndicator = () => {
  const nav = navRef.current;
  const link = linkRefs.current[active];
  if (!nav || !link) return;

  const styles = window.getComputedStyle(nav);
  const padLeft = parseFloat(styles.paddingLeft) || 0;

  // offsetLeft is measured from the nav’s padding edge,
  // but your indicator already starts at inset-left (same as padding).
  const x = link.offsetLeft - padLeft;
  const w = link.offsetWidth;

  nav.style.setProperty("--pill-x", `${x}px`);
  nav.style.setProperty("--pill-width", `${w}px`);
};


  useLayoutEffect(() => {
    updateIndicator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // --- scroll-aware active tracking ---
  useEffect(() => {
    const sectionEls = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);

    if (!sectionEls.length) return;

    // Pick section whose top is closest to the "center line" of viewport.
    const getClosestSectionIndex = () => {
      const centerY = window.innerHeight * 0.35; // tweak: 0.3–0.5 feels good
      let bestIdx = 0;
      let bestDist = Infinity;

      items.forEach((it, idx) => {
        const el = document.getElementById(it.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      return bestIdx;
    };

    // Update on scroll (cheap + reliable)
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActive(getClosestSectionIndex());
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  const handleClick = (i) => {
    setActive(i);
  };

  return (
    <nav ref={navRef} className="glass-nav">
      <span className="glass-indicator" />

      {items.map((item, i) => (
        <a
          key={item.id}
          href={item.href}
          ref={(el) => (linkRefs.current[i] = el)}
          onClick={() => handleClick(i)}
          className={`px-4 py-1.5 rounded-full text-sm md:text-lg lg:text-xl font-semibold transition-colors ${
            active === i ? "text-white" : "text-white/70 hover:text-white"
          }`}
        >
          {item.type === "logo" ? (
            <BrandLogo size={22} className="opacity-90" />
          ) : (
            item.label
          )}
        </a>
      ))}
    </nav>
  );
};

export default Header;
