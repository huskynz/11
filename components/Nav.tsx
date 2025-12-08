"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Logo from "./logo";

type NavItem =
  | { name: string; href: string; anchor?: false }
  | { name: string; href: string; anchor: true };

export default function Nav() {
  const [pathname, setPathname] = useState<string>("/");
  const [hash, setHash] = useState<string>("");

  // Use window location so Nav still works when router context is missing (e.g. global 404)
  useEffect(() => {
    setPathname(window.location.pathname);
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about", anchor: true },
    { name: "Contact", href: "#contact", anchor: true },
    { name: "Timeline", href: "/timeline" },
    { name: "Blog", href: "/blog" },
  ];

  const forceNavigate = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = href;
    }
  };

  return (
    <nav className="w-full py-2 px-4 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 min-w-max">
        <Logo w={50} h={50} />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex gap-3 md:gap-6 text-sm font-semibold items-center">
          {navItems.map((item) => {
            let isActive = false;
            // Only one item can be active at a time
            if (!item.anchor) {
              isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            } else {
              isActive = pathname === "/" && hash === item.href;
            }
            // If a hash nav is active, Home should not be active
            if (item.name === "Home" && pathname === "/" && (hash === "#about" || hash === "#contact")) {
              isActive = false;
            }
            const baseClass =
              "px-5 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ";
            const activeClass = "bg-huskyPurple text-white shadow-md";
            const inactiveClass =
              "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-huskyBlue dark:hover:text-huskyPink";

            // Use plain anchors to avoid relying on Next.js router context
            const href = item.anchor ? `/${item.href}` : item.href;

            return (
              <a
                key={item.name}
                href={href}
                onClick={forceNavigate(href)}
                className={baseClass + (isActive ? activeClass : inactiveClass)}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
