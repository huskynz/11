"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Timeline", href: "/timeline" },
    { name: "About", href: "#about", anchor: true },
    { name: "Contact", href: "#contact", anchor: true },
  ];

  // Handler for About/Contact to always go to homepage and scroll
  const handleAnchorNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/${href}`); // navigates to /#about or /#contact
    } else {
      window.location.hash = href;
    }
  }, [pathname, router]);
  return (
  <nav className="w-full py-2 px-4 flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 min-w-max">
        <img src="https://serv.husky.nz/logo/default.png" alt="HuskyNZ Logo" className="h-8 w-8 rounded-md shadow-md" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex gap-3 md:gap-6 text-sm font-semibold items-center">
          {navItems.map((item) => {
            let isActive = false;
            // Only one item can be active at a time
            if (!item.anchor) {
              isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            } else if (pathname === "/" && typeof window !== "undefined") {
              isActive = window.location.hash === item.href;
            }
            // If a hash nav is active, Home should not be active
            if (item.name === "Home" && pathname === "/" && typeof window !== "undefined" && (window.location.hash === "#about" || window.location.hash === "#contact")) {
              isActive = false;
            }
            const baseClass =
              "px-5 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ";
            const activeClass =
              "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md";
            const inactiveClass =
              "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400";
            if (item.anchor) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={baseClass + (isActive ? activeClass : inactiveClass)}
                  onClick={(e) => handleAnchorNav(e, item.href)}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={baseClass + (isActive ? activeClass : inactiveClass)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
